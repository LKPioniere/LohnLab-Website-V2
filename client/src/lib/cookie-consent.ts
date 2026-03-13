import { useState, useEffect, useCallback } from "react";

export interface ConsentState {
  necessary: true;
  statistics: boolean;
  marketing: boolean;
}

const STORAGE_KEY = "lohnlab_cookie_consent";
const CONSENT_EVENT = "consent-changed";

const DEFAULT_CONSENT: ConsentState = {
  necessary: true,
  statistics: false,
  marketing: false,
};

export function getConsent(): ConsentState | null {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) return null;
    return JSON.parse(stored) as ConsentState;
  } catch {
    return null;
  }
}

export function saveConsent(consent: ConsentState): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(consent));
  window.dispatchEvent(new CustomEvent(CONSENT_EVENT, { detail: consent }));
}

export function hasConsent(): boolean {
  return getConsent() !== null;
}

export function resetConsent(): void {
  localStorage.removeItem(STORAGE_KEY);
  window.dispatchEvent(new CustomEvent(CONSENT_EVENT, { detail: null }));
}

export function acceptAll(): void {
  saveConsent({ necessary: true, statistics: true, marketing: true });
}

export function acceptNecessaryOnly(): void {
  saveConsent({ necessary: true, statistics: false, marketing: false });
}

export function acceptMarketing(): void {
  const current = getConsent() ?? DEFAULT_CONSENT;
  saveConsent({ ...current, marketing: true });
}

export function useConsent() {
  const [consent, setConsent] = useState<ConsentState | null>(getConsent);

  const handleConsentChange = useCallback((e: Event) => {
    const detail = (e as CustomEvent).detail;
    setConsent(detail);
  }, []);

  useEffect(() => {
    window.addEventListener(CONSENT_EVENT, handleConsentChange);
    return () => window.removeEventListener(CONSENT_EVENT, handleConsentChange);
  }, [handleConsentChange]);

  return consent;
}
