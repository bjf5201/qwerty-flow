import { describe, it, expect } from 'vitest';
import { qwertyMap, __test__ } from '../../src/lib/keyboardLayout';

const { createKeyLayout } = __test__;

describe('createKeyLayout', () => {
  it('should create a correct layout map for QWERTY layout', () => {
    const layout = "-=qwertyuiop[]asdfghjkl;'zxcvbnm,./";
    const layoutMap = createKeyLayout(layout);
    expect(layoutMap).toEqual(qwertyMap);
  });

  it('should create a correct layout map for a custom layout', () => {
    const customLayout = "1234567890qwertyuiopasdfghjklzxcvbnm,./";
    const expectedMap = {
      '-': '1', '=': '2', 'q': '3', 'w': '4', 'e': '5', 'r': '6', 't': '7', 'y': '8', 'u': '9', 'i': '0',
      'o': 'q', 'p': 'w', '[': 'e', ']': 'r', 'a': 't', 's': 'y', 'd': 'u', 'f': 'i', 'g': 'o', 'h': 'p',
      'j': 'a', 'k': 's', 'l': 'd', ';': 'f', '\'': 'g', 'z': 'h', 'x': 'j', 'c': 'k', 'v': 'l', 'b': 'z',
      'n': 'x', 'm': 'c', ',': 'v', '.': 'b', '/': 'n'
    };
    const layoutMap = createKeyLayout(customLayout);
    expect(layoutMap).toEqual(expectedMap);
  });
});
