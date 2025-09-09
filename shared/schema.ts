import { pgTable, text, serial, timestamp, date, integer, json, boolean, vector, real } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const contacts = pgTable("contacts", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  userType: text("user_type").notNull(),
  message: text("message"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

// Chatbot Sessions zur Verfolgung des Fortschritts
export const chatbotSessions = pgTable("chatbot_sessions", {
  id: serial("id").primaryKey(),
  sessionId: text("session_id").notNull().unique(),
  currentStep: integer("current_step").default(0).notNull(),
  completedFields: json("completed_fields").$type<string[]>().default([]).notNull(),
  employeeData: json("employee_data").$type<Record<string, any>>().default({}).notNull(),
  lastMessage: text("last_message"),
  isCompleted: boolean("is_completed").default(false).notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

// Neue Mitarbeiter Stammdaten
export const newEmployees = pgTable("new_employees", {
  id: serial("id").primaryKey(),
  sessionId: text("session_id").notNull(),
  // 1. Vollständiger Name
  firstName: text("first_name"),
  lastName: text("last_name"),
  // 2. Geburtsdatum
  birthDate: date("birth_date"),
  // 3. Anschrift
  street: text("street"),
  postalCode: text("postal_code"),
  city: text("city"),
  // 4. Sozialversicherungsnummer
  socialSecurityNumber: text("social_security_number"),
  // 5. Steuerliche Identifikationsnummer
  taxId: text("tax_id"),
  // 6. Familienstand
  maritalStatus: text("marital_status"), // ledig, verheiratet, geschieden, verwitwet
  // 7. Anzahl Kinder
  numberOfChildren: integer("number_of_children").default(0),
  // 8. Konfession
  religion: text("religion"), // ev, rk, keine, sonstige
  // 9. Krankenversicherung
  healthInsuranceName: text("health_insurance_name"),
  healthInsuranceNumber: text("health_insurance_number"),
  // 10. Gewünschtes Bruttogehalt
  desiredGrossSalary: integer("desired_gross_salary"), // in Cent
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

// RAG Vektorspeicher für Gesprächskontext
export const conversationEmbeddings = pgTable("conversation_embeddings", {
  id: serial("id").primaryKey(),
  sessionId: text("session_id").notNull(),
  messageContent: text("message_content").notNull(),
  messageType: text("message_type").notNull(), // 'user' | 'assistant' | 'system'
  step: integer("step").notNull(),
  embedding: vector("embedding", { dimensions: 1536 }), // OpenAI text-embedding-ada-002 dimension
  metadata: json("metadata").$type<Record<string, any>>().default({}).notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

// RAG Vektorspeicher für Stammdaten-Kontext
export const employeeDataEmbeddings = pgTable("employee_data_embeddings", {
  id: serial("id").primaryKey(),
  sessionId: text("session_id").notNull(),
  fieldName: text("field_name").notNull(), // z.B. 'firstName', 'lastName'
  fieldValue: text("field_value").notNull(),
  fieldContext: text("field_context").notNull(), // Kontext wie die Eingabe erfasst wurde
  embedding: vector("embedding", { dimensions: 1536 }),
  completionStep: integer("completion_step").notNull(),
  relevanceScore: real("relevance_score").default(1.0).notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

// RAG Kontext-Metadaten
export const ragContexts = pgTable("rag_contexts", {
  id: serial("id").primaryKey(),
  sessionId: text("session_id").notNull(),
  contextType: text("context_type").notNull(), // 'conversation' | 'employee_data' | 'validation'
  contextContent: text("context_content").notNull(),
  embedding: vector("embedding", { dimensions: 1536 }),
  priority: integer("priority").default(1).notNull(), // Priorität für Retrieval
  isActive: boolean("is_active").default(true).notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export const insertContactSchema = createInsertSchema(contacts).pick({
  name: true,
  email: true,
  userType: true,
  message: true,
});

export const insertChatbotSessionSchema = createInsertSchema(chatbotSessions).pick({
  sessionId: true,
  currentStep: true,
  completedFields: true,
  employeeData: true,
  lastMessage: true,
  isCompleted: true,
});

export const insertNewEmployeeSchema = createInsertSchema(newEmployees).pick({
  sessionId: true,
  firstName: true,
  lastName: true,
  birthDate: true,
  street: true,
  postalCode: true,
  city: true,
  socialSecurityNumber: true,
  taxId: true,
  maritalStatus: true,
  numberOfChildren: true,
  religion: true,
  healthInsuranceName: true,
  healthInsuranceNumber: true,
  desiredGrossSalary: true,
});

export const insertConversationEmbeddingSchema = createInsertSchema(conversationEmbeddings).pick({
  sessionId: true,
  messageContent: true,
  messageType: true,
  step: true,
  embedding: true,
  metadata: true,
});

export const insertEmployeeDataEmbeddingSchema = createInsertSchema(employeeDataEmbeddings).pick({
  sessionId: true,
  fieldName: true,
  fieldValue: true,
  fieldContext: true,
  embedding: true,
  completionStep: true,
  relevanceScore: true,
});

export const insertRagContextSchema = createInsertSchema(ragContexts).pick({
  sessionId: true,
  contextType: true,
  contextContent: true,
  embedding: true,
  priority: true,
  isActive: true,
});

export type InsertContact = z.infer<typeof insertContactSchema>;
export type Contact = typeof contacts.$inferSelect;
export type InsertChatbotSession = z.infer<typeof insertChatbotSessionSchema>;
export type ChatbotSession = typeof chatbotSessions.$inferSelect;
export type InsertNewEmployee = z.infer<typeof insertNewEmployeeSchema>;
export type NewEmployee = typeof newEmployees.$inferSelect;
export type InsertConversationEmbedding = z.infer<typeof insertConversationEmbeddingSchema>;
export type ConversationEmbedding = typeof conversationEmbeddings.$inferSelect;
export type InsertEmployeeDataEmbedding = z.infer<typeof insertEmployeeDataEmbeddingSchema>;
export type EmployeeDataEmbedding = typeof employeeDataEmbeddings.$inferSelect;
export type InsertRagContext = z.infer<typeof insertRagContextSchema>;
export type RagContext = typeof ragContexts.$inferSelect;

// Die 10 wichtigsten Stammdaten-Felder in der richtigen Reihenfolge
export const employeeDataFields = [
  'firstName',
  'lastName', 
  'birthDate',
  'street',
  'postalCode',
  'city',
  'socialSecurityNumber',
  'taxId',
  'maritalStatus',
  'numberOfChildren',
  'religion',
  'healthInsuranceName',
  'healthInsuranceNumber',
  'desiredGrossSalary'
] as const;

export const employeeDataFieldLabels: Record<typeof employeeDataFields[number], string> = {
  firstName: 'Vorname',
  lastName: 'Nachname',
  birthDate: 'Geburtsdatum',
  street: 'Straße und Hausnummer',
  postalCode: 'Postleitzahl',
  city: 'Ort',
  socialSecurityNumber: 'Sozialversicherungsnummer',
  taxId: 'Steuerliche Identifikationsnummer',
  maritalStatus: 'Familienstand',
  numberOfChildren: 'Anzahl Kinder',
  religion: 'Konfession',
  healthInsuranceName: 'Krankenversicherung',
  healthInsuranceNumber: 'Krankenversicherungsnummer',
  desiredGrossSalary: 'Gewünschtes Bruttogehalt'
};
