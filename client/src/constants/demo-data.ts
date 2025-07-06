/**
 * Demo-Daten für den Calculator - 5% Lohnerhöhung Szenario
 */
export const DEMO_EMPLOYEES = [
  { 
    id: "10112", 
    name: "Sarah Schröder", 
    department: "Management", 
    salary: "4.500 €", 
    newSalary: "4.725 €",
    increase: "5%",
    monthlySavings: "76 €" 
  },
  { 
    id: "10164", 
    name: "Frank Becker", 
    department: "Verkauf", 
    salary: "3.800 €", 
    newSalary: "3.990 €",
    increase: "5%",
    monthlySavings: "52 €" 
  },
  { 
    id: "10168", 
    name: "Daniel Weber", 
    department: "Produktion", 
    salary: "3.200 €", 
    newSalary: "3.360 €",
    increase: "5%",
    monthlySavings: "43 €" 
  },
  { 
    id: "10921", 
    name: "Angelika Schwarz", 
    department: "Personal", 
    salary: "3.600 €", 
    newSalary: "3.780 €",
    increase: "5%",
    monthlySavings: "89 €" 
  },
] as const;