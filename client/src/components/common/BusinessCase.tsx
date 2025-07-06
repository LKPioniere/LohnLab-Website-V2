/**
 * Business Case Komponente
 */
export default function BusinessCase() {
  return (
    <div className="bg-gradient-to-br from-[var(--lohn-teal)] to-[var(--lohn-secondary)] rounded-xl p-6 text-white">
      <h4 className="text-lg font-semibold mb-4">Ihr Business Case</h4>
      <p className="text-sm opacity-90 mb-4">
        <strong>Für Steuerberater:</strong> Bei nur 50 optimierten Mitarbeitenden generieren Sie 
        <strong> 1.352 € monatlich</strong> - das sind <strong>16.230 € Zusatzhonorar pro Jahr</strong>.<br/>
        <strong>Für Unternehmen:</strong> Bis zu 50% Lohnkosteneinsparung bei gesteigerter Mitarbeiterzufriedenheit.
      </p>
      <div className="bg-white/20 rounded-lg p-4">
        <div className="text-2xl font-bold">+ 1.352 €</div>
        <div className="text-sm">monatlich bei 50 Mitarbeitern</div>
      </div>
    </div>
  );
}