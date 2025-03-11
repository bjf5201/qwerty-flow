import { renderHook } from '@testing-library/react';
import { useTestText } from "../../src/hooks/useTestText";

describe('useTestText', () => {
  it('should return the correct test description content', () => {
    const { result } = renderHook(() => useTestText());
    expect(result.current.description).toBe("Test description");
  });

  it('should return the correct test name content', () => {
    const { result } = renderHook(() => useTestText());
    expect(result.current.name).toBe("Test Agency");
  });
})