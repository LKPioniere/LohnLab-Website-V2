/**
 * Demo-Daten für den Calculator
 */
export const DEMO_EMPLOYEES = [
  { 
    id: "10112", 
    name: "Sarah Schröder", 
    department: "Management", 
    salary: "8.500 €", 
    optimized: true, 
    savings: "+ 27,05 €" 
  },
  { 
    id: "10164", 
    name: "Frank Becker", 
    department: "Verkauf", 
    salary: "5.000 €", 
    optimized: false, 
    savings: null 
  },
  { 
    id: "10168", 
    name: "Daniel Weber", 
    department: "Produktion", 
    salary: "3.500 €", 
    optimized: false, 
    savings: null 
  },
  { 
    id: "10921", 
    name: "Angelika Schwarz", 
    department: "Personal", 
    salary: "3.500 €", 
    optimized: true, 
    savings: "+ 27,05 €" 
  },
] as const;