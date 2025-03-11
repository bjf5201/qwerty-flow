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
 * @param str1 - expected array of strings to compare
 * @param str2 - actual array of strings typed to compare
 * @returns number of mistakes between the two strings
 */
export function countMistakes(expected: string[], actual: string[]) {
  let mistakes = 0;
  const length = Math.min(expected.length, actual.length);
  for (let i = 0; i < length; i++) {
    if (expected[i] !== actual[i]) {
      mistakes++;
    }
  }
  return mistakes;
}
/**
 *
 * @param errors - number of errors made
 * @param totalWords - total number of words expected
 * @returns the accuracy as a decimal percentage between 0 and 1
 *
 * @example
 * ```ts
 * calculateAccuracy(1, 10); // 0.9
 * ```
 */

export function calculateAccuracy(errors: number, totalLetters: number) : number {
    if (totalLetters > 0) {
      const correct = totalLetters - errors;
      return (correct / totalLetters);
    }

    return 0;
}