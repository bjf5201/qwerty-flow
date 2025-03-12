import { renderHook } from '@testing-library/react';
import useTimer from '../../src/hooks/useTimer';

describe('useTimer', () => {
  it('should return the correct time if given positive arg', () => {
    const { result } = renderHook(() => useTimer(60));
    expect(result.current.remainingTime).toBe(60);
  });

  it('should return the correct time if given arg of 0', () => {
    const { result } = renderHook(() => useTimer(0));
    expect(result.current.remainingTime).toBe(0);
  });

  it('should throw an error if given negative arg', () => {
    expect(() => renderHook(() => useTimer(-1))).toThrowError();
  });
});