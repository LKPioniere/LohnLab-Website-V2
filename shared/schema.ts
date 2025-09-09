import { pgTable, text, serial, timestamp, date, integer, json, boolean } from "drizzle-orm/pg-core";
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

export type InsertContact = z.infer<typeof insertContactSchema>;
export type Contact = typeof contacts.$inferSelect;
export type InsertChatbotSession = z.infer<typeof insertChatbotSessionSchema>;
export type ChatbotSession = typeof chatbotSessions.$inferSelect;
export type InsertNewEmployee = z.infer<typeof insertNewEmployeeSchema>;
export type NewEmployee = typeof newEmployees.$inferSelect;

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
