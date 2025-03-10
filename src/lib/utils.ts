/**
 *
 * @param num - number to format as a percentage
 * @returns number as a string formatted as a percentage
 */
export function formatPercentage(num: number): string {
    return `${(num * 100).toFixed(0)}%`;
}

/**
 *
 * @param str1 - expected string of letters to compare
 * @param str2 - actual string of letters typed to compare
 * @returns number of mistakes between the two strings
 */
export function countMistakes(expected: string, actual: string) {
    let mistakes = 0;
    const length = Math.max(expected.length, actual.length);
    for (let i = 0; i < length; i++) {
        if (expected[i] !== actual[i]) {
            mistakes++;
        }
    }
    return mistakes;
}