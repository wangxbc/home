import { createSlice } from '@reduxjs/toolkit';

const styleStore = createSlice({
  name: 'borderThemes',
  initialState: {
    borderTheme: 'achemeborder',
  },
  reducers: {
    addBorderTheme(state, action) {
      state.borderTheme = action.payload;
    },
  },
});

const { addBorderTheme } = styleStore.actions;
const borderThemesReducer = styleStore.reducer;
export { addBorderTheme };
export default borderThemesReducer;
