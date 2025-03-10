import { formatPercentage } from '../../src/lib/utils';

describe('formatPercentage', () => {
  it('should format a simple decimal as a percentage', () => {
    expect(formatPercentage(0.5)).toBe('50%');
  });

  it('should format a complex decimal as a percentage', () => {
    expect(formatPercentage(0.123)).toBe('12%');
  });
});