import core, { setDarkMode, CoreState } from '../core';

describe('core redux module', () => {
  describe('reducer', () => {
    const initialState: CoreState = {
      isDark: false,
    };

    it('should have initialState', () => {
      const state = core(undefined, { type: 'INIT' } as any);
      expect(state).toEqual(initialState);
    });
    it('handles SET_IS_DARK_MODE action', () => {
      let state = core(initialState, setDarkMode(true));
      expect(state.isDark).toBe(true);
      state = core(initialState, setDarkMode(false));
      expect(state.isDark).toBe(false);
    });
  });
});
