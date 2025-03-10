// Allow for inclusion of alternate keyboard layouts in the future
/** Keyboard layout string for QWERTY keyboards. */
const qwertyKeys = "-=qwertyuiop[]asdfghjkl;'zxcvbnm,./";

/**
 * createLayoutMap creates a mapping of keys based on the given layout string.
 *
 * @remarks This function can be used to create layout maps for alternative keyboards
 * in the future.
 *
 * @param layout string representing the keyboard layout
 * @returns the keyboard layout map which maps each character in the layout to
 * its corresponding key on the traditional QWERTY keyboard.
 */
const createKeyLayout = (layout: string) => {
      const map = qwertyKeys.split("").reduce((acc, key, index) => {
            acc[key] = layout[index];
            return acc;
      }
      , {} as Record<string, string>);
      return map;
};

export const qwertyMap = createKeyLayout(qwertyKeys);

// For testing purposes
export const __test__ = { createKeyLayout };