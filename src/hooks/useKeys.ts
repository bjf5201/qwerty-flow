import { useCallback, useEffect, useState } from 'react';
import { qwertyMap } from '../lib/keyboardLayout';

/**
 * Function which determines if an individual key is permissable.
 *
 * @param code - string representing the key code
 * @param key - string representing the key
 * @returns true if the key is allowed, false otherwise
 */
function isKeyAllowed(code: string, key: string) {
  const allowedKeys = Object.keys(qwertyMap);
  return (
    code.startsWith("Key") ||
    code.startsWith("Digit") ||
    code === 'Backspace' ||
    code === 'Space' ||
    allowedKeys.includes(key.toLowerCase())
  );
}

/**
 * Function which hooks into the keyboard event listener to track typed keys.
 *
 * @param enabled - boolean to enable or disable the hook
 * @returns object containing the typed keys, cursor position, and total typed keys
 */
export default function useKeys(enabled: boolean) {
  const [cursorPosition, setCursorPosition] = useState<number>(0);
  const [typedKeys, setTypedKeys] = useState<string[]>([]);
  const [totalTyped, setTotalTyped] = useState<number>(0);

  const keydownHandler = useCallback(
    ({ key, code }: KeyboardEvent) => {
      if (!enabled || !isKeyAllowed(code, key)) return;

      switch (code) {
        case 'Backspace':
          setTypedKeys((prev) => prev.slice(0, -1));
          setCursorPosition((prev) => Math.max(0, prev - 1));
          setTotalTyped((prev) => Math.max(0, prev - 1));
          break;
        case 'Space':
          setTypedKeys((prev) => prev.concat(' '));
          setCursorPosition((prev) => prev + 1);
          setTotalTyped((prev) => prev + 1);
          break;
        default:
          setTypedKeys((prev) => prev.concat(key));
          setCursorPosition((prev) => prev + 1);
          setTotalTyped((prev) => prev + 1);
        }
    }, [enabled]
  );

  const clearTypedKeys = useCallback(() => {
    setTypedKeys([]);
    setCursorPosition(0);
  }, []);

  const clearTotalTypedKeys = useCallback(() => {
    setTotalTyped(0);
  }, []);

  useEffect(() => {
    window.addEventListener('keydown', keydownHandler);
    return () => {
      window.removeEventListener('keydown', keydownHandler);
    };
  }, [keydownHandler]);

  return { typedKeys, cursorPosition, totalTyped, clearTypedKeys, clearTotalTypedKeys };
}
