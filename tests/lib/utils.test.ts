import { formatPercentage, countMistakes } from '../../src/lib/utils';

describe('formatPercentage', () => {
  it('should format a simple decimal as a percentage', () => {
    expect(formatPercentage(0.5)).toBe('50%');
  });

  it('should format a complex decimal as a percentage', () => {
    expect(formatPercentage(0.123)).toBe('12%');
  });
});

describe('countMistakes', () => {
  it('should count the number of mistakes in two strings', () => {
    const str1 = 'hello';
    const str2 = 'hella';
    expect(countMistakes(str1, str2)).toBe(1);
  });

  it('should count the number of mistakes in two strings with different lengths', () => {
    const str1 = 'hello';
    const str2 = 'hell';
    expect(countMistakes(str1, str2)).toBe(1);
  });

  it('should count the number of mistakes in two strings with different characters', () => {
    const str1 = 'hello';
    const str2 = 'world';
    expect(countMistakes(str1, str2)).toBe(4);
  });

  it('should count the number of mistakes in two strings with different characters and lengths', () => {
    const str1 = 'hello';
    const str2 = 'worlds';
    expect(countMistakes(str1, str2)).toBe(5);

    const str3 = 'worlds';
    const str4 = 'hello';
    expect(countMistakes(str3, str4)).toBe(5);
  });
});