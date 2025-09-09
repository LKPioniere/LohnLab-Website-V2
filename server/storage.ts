import { 
  contacts, 
  chatbotSessions, 
  newEmployees,
  type Contact, 
  type InsertContact,
  type ChatbotSession,
  type InsertChatbotSession,
  type NewEmployee,
  type InsertNewEmployee
} from "@shared/schema";

export interface IStorage {
  createContact(contact: InsertContact): Promise<Contact>;
  
  // Chatbot Session Management
  createChatbotSession(session: InsertChatbotSession): Promise<ChatbotSession>;
  getChatbotSession(sessionId: string): Promise<ChatbotSession | null>;
  updateChatbotSession(sessionId: string, updates: Partial<InsertChatbotSession>): Promise<ChatbotSession>;
  
  // Employee Data Management
  createNewEmployee(employee: InsertNewEmployee): Promise<NewEmployee>;
  getNewEmployeeBySession(sessionId: string): Promise<NewEmployee | null>;
  updateNewEmployee(sessionId: string, updates: Partial<InsertNewEmployee>): Promise<NewEmployee>;
}

export class MemStorage implements IStorage {
  private contacts: Map<number, Contact>;
  private chatbotSessions: Map<string, ChatbotSession>;
  private newEmployees: Map<string, NewEmployee>;
  private currentId: number;
  private currentEmployeeId: number;

  constructor() {
    this.contacts = new Map();
    this.chatbotSessions = new Map();
    this.newEmployees = new Map();
    this.currentId = 1;
    this.currentEmployeeId = 1;
  }

  async createContact(insertContact: InsertContact): Promise<Contact> {
    const id = this.currentId++;
    const contact: Contact = { 
      ...insertContact,
      message: insertContact.message || null,
      id, 
      createdAt: new Date() 
    };
    this.contacts.set(id, contact);
    return contact;
  }

  async createChatbotSession(session: InsertChatbotSession): Promise<ChatbotSession> {
    const id = this.currentId++;
    const chatbotSession: ChatbotSession = {
      ...session,
      id,
      currentStep: session.currentStep || 0,
      completedFields: session.completedFields || [] as string[],
      employeeData: session.employeeData || {},
      lastMessage: session.lastMessage || null,
      isCompleted: session.isCompleted || false,
      createdAt: new Date(),
      updatedAt: new Date()
    };
    this.chatbotSessions.set(session.sessionId, chatbotSession);
    return chatbotSession;
  }

  async getChatbotSession(sessionId: string): Promise<ChatbotSession | null> {
    return this.chatbotSessions.get(sessionId) || null;
  }

  async updateChatbotSession(sessionId: string, updates: Partial<InsertChatbotSession>): Promise<ChatbotSession> {
    const existing = this.chatbotSessions.get(sessionId);
    if (!existing) {
      throw new Error(`Session ${sessionId} not found`);
    }

    const updated: ChatbotSession = {
      ...existing,
      ...updates,
      updatedAt: new Date()
    };
    this.chatbotSessions.set(sessionId, updated);
    return updated;
  }

  async createNewEmployee(employee: InsertNewEmployee): Promise<NewEmployee> {
    const id = this.currentEmployeeId++;
    const newEmployee: NewEmployee = {
      ...employee,
      id,
      numberOfChildren: employee.numberOfChildren || 0,
      createdAt: new Date(),
      updatedAt: new Date()
    };
    this.newEmployees.set(employee.sessionId, newEmployee);
    return newEmployee;
  }

  async getNewEmployeeBySession(sessionId: string): Promise<NewEmployee | null> {
    return this.newEmployees.get(sessionId) || null;
  }

  async updateNewEmployee(sessionId: string, updates: Partial<InsertNewEmployee>): Promise<NewEmployee> {
    const existing = this.newEmployees.get(sessionId);
    if (!existing) {
      throw new Error(`Employee for session ${sessionId} not found`);
    }

    const updated: NewEmployee = {
      ...existing,
      ...updates,
      updatedAt: new Date()
    };
    this.newEmployees.set(sessionId, updated);
    return updated;
  }
}

export const storage = new MemStorage();
