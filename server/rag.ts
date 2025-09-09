// In-Memory RAG-System für Gesprächskontext
interface StoredEmbedding {
  id: string;
  sessionId: string;
  content: string;
  type: 'conversation' | 'employee_data';
  embedding: number[];
  metadata: Record<string, any>;
  timestamp: Date;
}

class EmbeddingService {
  private embeddings: Map<string, StoredEmbedding[]> = new Map(); // sessionId -> embeddings
  private currentId = 1;

  // Einfache lokale Embedding-Generierung
  private generateLocalEmbedding(text: string): number[] {
    const words = text.toLowerCase().split(/\s+/);
    const embedding = new Array(384).fill(0);
    
    words.forEach((word, index) => {
      const hash = this.simpleHash(word);
      embedding[hash % 384] += 1 / (index + 1);
    });

    // Normalisierung
    const norm = Math.sqrt(embedding.reduce((sum, val) => sum + val * val, 0));
    return embedding.map(val => norm > 0 ? val / norm : 0);
  }

  private simpleHash(str: string): number {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      const char = str.charCodeAt(i);
      hash = ((hash << 5) - hash) + char;
      hash = hash & hash; // 32-bit integer
    }
    return Math.abs(hash);
  }

  async storeConversationEmbedding(
    sessionId: string,
    messageContent: string,
    messageType: 'user' | 'assistant' | 'system',
    metadata: Record<string, any> = {}
  ): Promise<void> {
    const embedding = this.generateLocalEmbedding(messageContent);
    
    const stored: StoredEmbedding = {
      id: `emb_${this.currentId++}`,
      sessionId,
      content: `${messageType}: ${messageContent}`,
      type: 'conversation',
      embedding,
      metadata: { ...metadata, messageType },
      timestamp: new Date()
    };

    if (!this.embeddings.has(sessionId)) {
      this.embeddings.set(sessionId, []);
    }
    this.embeddings.get(sessionId)!.push(stored);
  }

  async storeEmployeeDataEmbedding(
    sessionId: string,
    fieldName: string,
    fieldValue: string,
    fieldContext: string
  ): Promise<void> {
    const contextText = `${fieldName}: ${fieldValue} (${fieldContext})`;
    const embedding = this.generateLocalEmbedding(contextText);
    
    const stored: StoredEmbedding = {
      id: `emb_${this.currentId++}`,
      sessionId,
      content: contextText,
      type: 'employee_data',
      embedding,
      metadata: { fieldName, fieldValue, fieldContext },
      timestamp: new Date()
    };

    if (!this.embeddings.has(sessionId)) {
      this.embeddings.set(sessionId, []);
    }
    this.embeddings.get(sessionId)!.push(stored);
  }

  async retrieveRelevantContext(
    sessionId: string,
    query: string,
    limit: number = 5
  ): Promise<Array<{ content: string; type: string; relevance: number }>> {
    const sessionEmbeddings = this.embeddings.get(sessionId) || [];
    if (sessionEmbeddings.length === 0) return [];

    const queryEmbedding = this.generateLocalEmbedding(query);
    
    const contexts = sessionEmbeddings.map(stored => ({
      content: stored.content,
      type: stored.type,
      relevance: this.calculateRelevance(queryEmbedding, stored.embedding)
    }));

    return contexts
      .sort((a, b) => b.relevance - a.relevance)
      .slice(0, limit);
  }

  private calculateRelevance(embedding1: number[], embedding2: number[]): number {
    if (embedding1.length !== embedding2.length) return 0;
    
    // Cosine similarity
    const dotProduct = embedding1.reduce((sum, a, i) => sum + a * embedding2[i], 0);
    const magnitude1 = Math.sqrt(embedding1.reduce((sum, a) => sum + a * a, 0));
    const magnitude2 = Math.sqrt(embedding2.reduce((sum, a) => sum + a * a, 0));
    
    if (magnitude1 === 0 || magnitude2 === 0) return 0;
    return dotProduct / (magnitude1 * magnitude2);
  }

  async getSessionSummary(sessionId: string): Promise<string> {
    const contexts = await this.retrieveRelevantContext(sessionId, "gesamter Gesprächsverlauf Stammdaten", 15);
    
    if (contexts.length === 0) {
      return "Neue Sitzung - noch keine Daten erfasst.";
    }

    const conversationParts = contexts
      .filter(c => c.type === 'conversation')
      .slice(0, 8)
      .map(c => c.content)
      .join('\n');

    const employeeDataParts = contexts
      .filter(c => c.type === 'employee_data')
      .slice(0, 8)
      .map(c => c.content)
      .join(', ');

    let summary = "GESPRÄCHSKONTEXT:\n";
    if (conversationParts) {
      summary += conversationParts + "\n\n";
    }
    if (employeeDataParts) {
      summary += "ERFASSTE STAMMDATEN: " + employeeDataParts;
    }

    return summary;
  }
}

export const embeddingService = new EmbeddingService();