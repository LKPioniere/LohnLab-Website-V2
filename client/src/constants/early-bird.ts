/**
 * Early Bird Vorteile
 */
export function getEarlyBirdBenefits(gendered: boolean) {
  return [
    {
      id: 'access',
      text: 'Bevorzugter Zugang zum MVP'
    },
    {
      id: 'pricing',
      text: `Sonderkonditionen für ${gendered ? "Frühanwender*innen" : "Frühanwender"}`
    },
    {
      id: 'support',
      text: 'Direkter Draht zum Entwicklungsteam'
    },
    {
      id: 'training',
      text: 'Kostenlose Schulungen und Support'
    }
  ] as const;
}
