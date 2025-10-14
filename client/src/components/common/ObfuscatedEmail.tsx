import { useEffect, useState } from "react";

interface ObfuscatedEmailProps {
  user: string;
  domain: string;
  className?: string;
  children?: React.ReactNode;
}

/**
 * Verschleierte E-Mail Komponente zum Schutz vor Spam-Bots
 * Die E-Mail wird erst clientseitig zusammengesetzt
 */
export default function ObfuscatedEmail({
  user,
  domain,
  className = "",
  children,
}: ObfuscatedEmailProps) {
  const [email, setEmail] = useState("");

  useEffect(() => {
    // Construct email on client side to avoid exposing it in HTML source
    setEmail(`${user}@${domain}`);
  }, [user, domain]);

  if (!email) {
    // Show mailto link without href while loading (bot protection)
    return (
      <span className={className}>{children || "E-Mail wird geladen..."}</span>
    );
  }

  return (
    <a
      href={`mailto:${email}`}
      className={className}
      onClick={(e) => {
        // Ensure mailto opens even if JavaScript is disabled after page load
        e.currentTarget.href = `mailto:${email}`;
      }}
    >
      {children || email}
    </a>
  );
}

