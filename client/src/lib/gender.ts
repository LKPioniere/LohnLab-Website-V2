import { useState, useEffect, useCallback, createContext, useContext } from "react";

const STORAGE_KEY = "lohnlab_gender_language";
const GENDER_EVENT = "gender-changed";

export function getGenderEnabled(): boolean {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === null) return true;
    return stored === "true";
  } catch {
    return true;
  }
}

export function setGenderEnabled(enabled: boolean): void {
  localStorage.setItem(STORAGE_KEY, String(enabled));
  window.dispatchEvent(new CustomEvent(GENDER_EVENT, { detail: enabled }));
}

export function useGender(): boolean {
  const [enabled, setEnabled] = useState(getGenderEnabled);

  const handleChange = useCallback((e: Event) => {
    setEnabled((e as CustomEvent<boolean>).detail);
  }, []);

  useEffect(() => {
    window.addEventListener(GENDER_EVENT, handleChange);
    return () => window.removeEventListener(GENDER_EVENT, handleChange);
  }, [handleChange]);

  return enabled;
}

/**
 * Returns gendered or generic text based on current setting.
 * Usage: g("Mitarbeiter", "Mitarbeiter*innen")
 */
export function g(generic: string, gendered: string, isGendered: boolean): string {
  return isGendered ? gendered : generic;
}
