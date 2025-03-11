import { renderHook, act } from '@testing-library/react';
import useKeys from '../../src/hooks/useKeys';

describe("useKeys", () => {
  it('should return the correct initial state', () => {
    const { result } = renderHook(() => useKeys(true));
    expect(result.current.typedKeys).toEqual([]);
    expect(result.current.cursorPosition).toBe(0);
    expect(result.current.totalTyped).toBe(0);
  });

  it('should update the state appropriately when typing', () => {
    const { result } = renderHook(() => useKeys(true));
    act(() => {
      const event = new KeyboardEvent('keydown', { key: 'a' });
      window.dispatchEvent(event);
    })
    expect(result.current.typedKeys).toEqual(['a']);
    expect(result.current.cursorPosition).toBe(1);
    expect(result.current.totalTyped).toBe(1);
  });

  it('should update the state appropriately when backspacing', () => {
    const { result } = renderHook(() => useKeys(true));
    act(() => {
      const event = new KeyboardEvent('keydown', { key: 'a' });
      window.dispatchEvent(event);
      const eventB = new KeyboardEvent('keydown', { key: 'b' });
      window.dispatchEvent(eventB);
      const backspaceEvent = new KeyboardEvent('keydown', { code: 'Backspace' });
      window.dispatchEvent(backspaceEvent);
    });
    expect(result.current.typedKeys).toEqual(['a']);
    expect(result.current.cursorPosition).toBe(1);
    expect(result.current.totalTyped).toBe(1);
  });

  it('should update the state appropriately when typing a space', () => {
    const { result } = renderHook(() => useKeys(true));
    act(() => {
      const event = new KeyboardEvent('keydown', { code: 'Space' });
      window.dispatchEvent(event);
    })
    expect(result.current.cursorPosition).toBe(1);
    expect(result.current.typedKeys).toEqual([' ']);
    expect(result.current.totalTyped).toBe(1);
  });

  it('should update the state appropriately when typing multiple types of keys', () => {
    const { result } = renderHook(() => useKeys(true));
    act(() => {
      const eventA = new KeyboardEvent('keydown', { key: 'a' });
      window.dispatchEvent(eventA);
      const eventB = new KeyboardEvent('keydown', { key: 'b' });
      window.dispatchEvent(eventB);
      const eventSpace = new KeyboardEvent('keydown', { code: 'Space' });
      window.dispatchEvent(eventSpace);
    })
    expect(result.current.cursorPosition).toBe(3);
    expect(result.current.typedKeys).toEqual(['a', 'b', ' ']);
    expect(result.current.totalTyped).toBe(3);
  });

  it('should update the state appropriately when typing multiple keys and backspaces', () => {
    const { result } = renderHook(() => useKeys(true));
    act(() => {
      const eventA = new KeyboardEvent('keydown', { key: 'a' });
      window.dispatchEvent(eventA);
      const eventB = new KeyboardEvent('keydown', { key: 'b' });
      window.dispatchEvent(eventB);
      const eventSpace = new KeyboardEvent('keydown', { code: 'Space' });
      window.dispatchEvent(eventSpace);
      const eventF = new KeyboardEvent('keydown', { key: 'f' });
      window.dispatchEvent(eventF);
      const eventG = new KeyboardEvent('keydown', { key: 'g' });
      window.dispatchEvent(eventG);
      const backspaceEvent = new KeyboardEvent('keydown', { code: 'Backspace' });
      window.dispatchEvent(backspaceEvent);
    })
    expect(result.current.typedKeys).toEqual(['a', 'b', ' ', 'f']);
    expect(result.current.cursorPosition).toBe(4);
    expect(result.current.totalTyped).toBe(4);
  });

  it('should not update the state when disabled', () => {
    const { result } = renderHook(() => useKeys(false));
    act(() => {
      const event = new KeyboardEvent('keydown', { key: 'a' });
      window.dispatchEvent(event);
    })
    expect(result.current.cursorPosition).toBe(0);
    expect(result.current.typedKeys).toEqual([]);
    expect(result.current.totalTyped).toBe(0);
  });
});