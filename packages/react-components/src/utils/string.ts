/**
 * Normalise a string: lowercase + trim. Used for case-insensitive matching.
 */
export function normalize(text: string): string {
  return text.trim().toLowerCase()
}
