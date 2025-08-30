import { createSlice } from '@reduxjs/toolkit';

const styleStore = createSlice({
  name: 'worldThemes',
  initialState: {
    worldTheme: 'acheme',
  },
  reducers: {
    addWorldTheme(state, action) {
      state.worldTheme = action.payload;
    },
  },
});

const { addWorldTheme } = styleStore.actions;
const worldThemesReducer = styleStore.reducer;
export { addWorldTheme };
export default worldThemesReducer;
