import { renderHook } from '@testing-library/react';
import { getTestText } from "../../src/hooks/useTestText";

describe('getTestText', async () => {
  it('should return a test text object', async () => {
    const { result } = renderHook(() => getTestText());
    const testText = await result.current;
    expect(testText).toHaveProperty('name');
    expect(testText).toHaveProperty('description');
  });

  it('should return a test text object with a name as a string', async () => {
    const { result } = renderHook(() => getTestText());
    const testText = await result.current;
    expect(testText.name).toEqual(expect.any(String));
  });

  it('should return a test text object with a description as a string', async () => {
    const { result } = renderHook(() => getTestText());
    const testText = await result.current;
    expect(testText.description).toEqual(expect.any(String));
  });
})