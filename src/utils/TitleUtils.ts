export function toKebabCase(title : string) {
    const lower = title.toLowerCase();
    const words = lower.split(" ");
    const kebab = words.reduce((prev, next) => {
        return prev + "-" + next;
    });
    return encodeURIComponent(kebab);
}