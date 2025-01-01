export function toTitleCase(str: string): string {
  return str
    .replace(/-/g, ' ')
    .replace(/\w\S*/g, (text) => text.charAt(0).toUpperCase() + text.substring(1).toLowerCase());
}
