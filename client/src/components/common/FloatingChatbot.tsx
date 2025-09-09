import { useState, useEffect, useRef } from "react";
import { MessageCircle, X, Send, User, Bot, CheckCircle, Circle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import { employeeDataFieldLabels } from "@shared/schema";

interface ChatMessage {
  id: string;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
}

interface ProgressData {
  completed: number;
  total: number;
  completedFields: string[];
  isCompleted?: boolean;
}

interface Session {
  sessionId: string;
  currentStep: number;
  completedFields: string[];
  employeeData: Record<string, any>;
  lastMessage: string;
  isCompleted: boolean;
}

export default function FloatingChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [currentMessage, setCurrentMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [sessionId, setSessionId] = useState<string>("");
  const [progress, setProgress] = useState<ProgressData>({ completed: 0, total: 14, completedFields: [] });
  const [session, setSession] = useState<Session | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Generate session ID on first open
  useEffect(() => {
    if (isOpen && !sessionId) {
      const newSessionId = `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
      setSessionId(newSessionId);
      
      // Add welcome message
      setMessages([{
        id: '1',
        text: 'Hallo! Ich bin Ihr digitaler HR-Assistent von LohnLab Cockpit. Ich helfe Ihnen dabei, alle wichtigen Stammdaten für Ihre Neueinstellung systematisch zu erfassen. Lassen Sie uns beginnen - wie ist der Vorname des neuen Mitarbeiters?',
        sender: 'bot',
        timestamp: new Date()
      }]);
    }
  }, [isOpen, sessionId]);

  // Auto scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = async () => {
    if (!currentMessage.trim() || isLoading || !sessionId) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      text: currentMessage,
      sender: "user",
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setCurrentMessage("");
    setIsLoading(true);

    try {
      const response = await fetch('/api/chatbot/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          sessionId,
          message: currentMessage
        })
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      const data = await response.json();
      
      if (data.success) {
        const botMessage: ChatMessage = {
          id: (Date.now() + 1).toString(),
          text: data.response,
          sender: "bot",
          timestamp: new Date()
        };

        setMessages(prev => [...prev, botMessage]);
        setProgress(data.progress || progress);
        setSession(data.session);
      }
    } catch (error) {
      console.error('Error sending message:', error);
      const errorMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        text: "Entschuldigung, es gab einen Fehler bei der Verarbeitung Ihrer Nachricht. Das kann passieren, wenn der Service überlastet ist. Bitte warten Sie einen Moment und versuchen Sie es erneut.",
        sender: "bot",
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const getFieldDisplayName = (fieldKey: string): string => {
    return employeeDataFieldLabels[fieldKey as keyof typeof employeeDataFieldLabels] || fieldKey;
  };

  const progressPercentage = progress.total > 0 ? (progress.completed / progress.total) * 100 : 0;

  return (
    <>
      {/* Floating Button */}
      {!isOpen && (
        <div className="fixed bottom-6 right-6 z-50">
          <Button
            onClick={() => setIsOpen(true)}
            size="lg"
            className="rounded-full h-16 w-16 bg-[var(--lohn-primary)] hover:bg-[var(--lohn-primary)]/90 shadow-lg"
          >
            <MessageCircle className="h-8 w-8" />
          </Button>
        </div>
      )}

      {/* Chat Widget */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-96 h-[600px] flex flex-col">
          <Card className="h-full flex flex-col shadow-2xl">
            <CardHeader className="bg-[var(--lohn-primary)] text-white p-4 rounded-t-lg">
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg font-semibold">
                  HR-Assistent
                </CardTitle>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsOpen(false)}
                  className="text-white hover:bg-white/20 p-1 h-8 w-8"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
              
              {/* Progress Bar */}
              <div className="mt-3 space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Fortschritt</span>
                  <span>{progress.completed}/{progress.total}</span>
                </div>
                <Progress value={progressPercentage} className="h-2" />
              </div>
            </CardHeader>

            <CardContent className="flex-1 flex flex-col p-0">
              {/* Progress Overview */}
              {progress.completedFields.length > 0 && (
                <div className="p-4 bg-gray-50 border-b">
                  <h4 className="text-sm font-medium mb-2">Erfasste Daten:</h4>
                  <div className="flex flex-wrap gap-1">
                    {progress.completedFields.map((field) => (
                      <Badge key={field} variant="secondary" className="text-xs">
                        <CheckCircle className="h-3 w-3 mr-1" />
                        {getFieldDisplayName(field)}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}

              {/* Chat Messages */}
              <ScrollArea className="flex-1 p-4">
                <div className="space-y-4">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-[80%] rounded-lg px-3 py-2 ${
                          message.sender === 'user'
                            ? 'bg-[var(--lohn-primary)] text-white'
                            : 'bg-gray-200 text-gray-800'
                        }`}
                      >
                        <div className="flex items-center gap-2 mb-1">
                          {message.sender === 'user' ? (
                            <User className="h-3 w-3" />
                          ) : (
                            <Bot className="h-3 w-3" />
                          )}
                          <span className="text-xs opacity-75">
                            {message.timestamp.toLocaleTimeString('de-DE', { 
                              hour: '2-digit', 
                              minute: '2-digit' 
                            })}
                          </span>
                        </div>
                        <p className="text-sm leading-relaxed">{message.text}</p>
                      </div>
                    </div>
                  ))}
                  
                  {isLoading && (
                    <div className="flex justify-start">
                      <div className="bg-gray-200 text-gray-800 rounded-lg px-3 py-2">
                        <div className="flex items-center gap-2">
                          <Bot className="h-3 w-3" />
                          <div className="flex space-x-1">
                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  <div ref={messagesEndRef} />
                </div>
              </ScrollArea>

              <Separator />

              {/* Input Area */}
              <div className="p-4">
                {progress.isCompleted && (
                  <div className="mb-4 p-3 bg-green-50 border border-green-200 rounded-lg">
                    <div className="flex items-center gap-2 text-green-800">
                      <CheckCircle className="h-4 w-4" />
                      <span className="text-sm font-medium">
                        Alle Stammdaten erfolgreich erfasst!
                      </span>
                    </div>
                  </div>
                )}
                
                <div className="flex gap-2">
                  <Input
                    value={currentMessage}
                    onChange={(e) => setCurrentMessage(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Nachricht eingeben..."
                    disabled={isLoading}
                    className="flex-1"
                  />
                  <Button
                    onClick={sendMessage}
                    disabled={isLoading || !currentMessage.trim()}
                    size="sm"
                  >
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </>
  );
}