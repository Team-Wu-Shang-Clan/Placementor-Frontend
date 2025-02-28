export const sleep = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));

/**
 * Format a date string to a more readable format
 */
export function formatDate(dateString: string): string {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric"
    }).format(date);
}
