import { formatPercentage, countMistakes, calculateAccuracy } from '../../src/lib/utils';

describe('formatPercentage', () => {
  it('should properly format a decimal with one significant digit as a percentage', () => {
    expect(formatPercentage(0.5)).toBe('50%');
  });

  it('should format a decimal with two significant digits as a percentage', () => {
    expect(formatPercentage(0.75)).toBe('75%');
  })

  it('should format a decimal with three or more significant digits as a percentage', () => {
    expect(formatPercentage(0.123)).toBe('12%');
    expect(formatPercentage(0.8333333333333334)).toBe('83%');
  });
});

describe('countMistakes', () => {
  it('should count the number of mistakes in two arrays of strings', () => {
    const str1 = ['hello', 'world', 'this', 'is', 'a', 'test'];
    const str2 = ['hello', 'world', 'this', 'is', 'a', 'test'];
    expect(countMistakes(str1, str2)).toBe(0);

    const str3 = ['hello', 'world', 'this', 'is', 'a', 'test'];
    const str4 = ['hello', 'wrld', 'this', 'is', 'a', 'test'];
    expect(countMistakes(str3, str4)).toBe(1);
  });

  it('should count the number of mistakes in two string arrays with different lengths', () => {
    const str1 = ['hello', 'world', 'this', 'is', 'a', 'test'];
    const str2 = ['hello', 'world', 'this', 'isa', 'test'];
    expect(countMistakes(str1, str2)).toBe(2);
  });
});

describe('calculateAccuracy', () => {
  it('should calculate the percentage correct out of the total letters completed', () => {
    const string = ['hello', 'world', 'this', 'is', 'a', 'test'];
    const typedString = ['helo', 'world', 'this', 'is', 'a', 'test'];
    const numErrors = countMistakes(string, typedString);
    const numTotal = typedString.length;
    expect(calculateAccuracy(numErrors, numTotal)).toBe(0.8333333333333334);
  });

  it('should calculate the percentage correct out of the total words completed with no words', () => {
    const string: string[] = [];
    const typedString: string[] = [];
    const numErrors = countMistakes(string, typedString);
    const numTotal = typedString.length
    expect(calculateAccuracy(numErrors, numTotal)).toBe(0);
  });

  it('should calculate the percentage correct out of the total words completed with no typed words', () => {
    const string = ['hello', 'world', 'this', 'is', 'a', 'test'];
    const typedString: string[] = [];
    const numErrors = countMistakes(string, typedString);
    const numTotal = typedString.length;
    expect(calculateAccuracy(numErrors, numTotal)).toBe(0);
  });
});