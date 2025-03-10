/**
 *
 * @param num - number to format as a percentage
 * @returns number as a string formatted as a percentage
 */
export function formatPercentage(num: number): string {
    return `${(num * 100).toFixed(0)}%`;
}