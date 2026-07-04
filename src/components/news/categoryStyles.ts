/** Shared badge colours for article category pills — one identity across the news platform */
export const CATEGORY_STYLES: Record<string, string> = {
  Innovation: 'bg-blue-100 text-blue-800',
  Technology: 'bg-purple-100 text-purple-800',
  Community: 'bg-green-100 text-green-800',
  Events: 'bg-orange-100 text-orange-800',
  'Youth Stories': 'bg-cyan-100 text-cyan-800',
  'Creative Arts': 'bg-amber-100 text-amber-800',
  'FM Shows': 'bg-red-100 text-red-700',
  /* Aggregated newsroom categories */
  Politics: 'bg-rose-100 text-rose-800',
  Business: 'bg-emerald-100 text-emerald-800',
  Sports: 'bg-orange-100 text-orange-800',
  'World Cup': 'bg-teal-100 text-teal-900',
};

/** Section-header accent bars for aggregated categories (local sections use brand blue) */
export const CATEGORY_ACCENTS: Record<string, string> = {
  Politics: 'bg-rose-700',
  Business: 'bg-emerald-600',
  Sports: 'bg-orange-500',
  'World Cup': 'bg-teal-800',
};
