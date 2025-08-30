import { createSlice } from '@reduxjs/toolkit';

const styleStore = createSlice({
  name: 'cardsThemes',
  initialState: {
    cardsTheme: 'cardLight',
  },
  reducers: {
    addCardsTheme(state, action) {
      state.cardsTheme = action.payload;
    },
  },
});

const { addCardsTheme } = styleStore.actions;
const cardThemessReducer = styleStore.reducer;
export { addCardsTheme };
export default cardThemessReducer;
