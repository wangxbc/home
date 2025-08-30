import { createSlice } from '@reduxjs/toolkit';

const styleStore = createSlice({
  name: 'cardThemes',
  initialState: {
    cardTheme: 'cardStyle1',
  },
  reducers: {
    addCardTheme(state, action) {
      state.cardTheme = action.payload;
    },
  },
});

const { addCardTheme } = styleStore.actions;
const cardThemesReducer = styleStore.reducer;
export { addCardTheme };
export default cardThemesReducer;
