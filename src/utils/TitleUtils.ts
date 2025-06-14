/**
 * Converts a given string title (e.g. "Title A B C") to Kebab case ("title-a-b-c").
 * @param title The string to be converted to Kebab case.
 * @returns The Kebab case representation of the string.
 */
export function toKebabCase(title: string) {
  const lower = title.toLowerCase();
  const words = lower.split(' ');
  const kebab = words.reduce((prev, next) => {
    return prev + '-' + next;
  });
  return encodeURIComponent(kebab);
}
