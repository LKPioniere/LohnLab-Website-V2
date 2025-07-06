/**
 * Business Metriken Komponente
 */
export default function BusinessMetrics() {
  return (
    <div className="mt-6 space-y-4">
      <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
        <span className="text-gray-600">Steuerberater - Zusatzerlös/Jahr:</span>
        <span className="font-bold text-[var(--lohn-primary)]">16.230 €</span>
      </div>
      <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
        <span className="text-gray-600">Unternehmen - Kosteneinsparung:</span>
        <span className="font-bold text-[var(--lohn-secondary)]">Bis zu 50%</span>
      </div>
      <div className="flex justify-between items-center p-4 bg-[var(--lohn-teal)]/10 rounded-lg">
        <span className="text-[var(--lohn-primary)]">Implementierungsaufwand:</span>
        <span className="font-bold text-[var(--lohn-primary)]">Minimal</span>
      </div>
    </div>
  );
}