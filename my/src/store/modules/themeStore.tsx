import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ThemeState {
  myTheme: string;
}

const styleStore = createSlice({
  name: 'myThemes',
  initialState: {
    myTheme: 'light',
  } as ThemeState,
  reducers: {
    addTheme(state: ThemeState, action: PayloadAction<string>) {
      return {
        ...state,
        myTheme: action.payload,
      };
    },
  },
});

const { addTheme } = styleStore.actions;
const myThemesReducer = styleStore.reducer;
export { addTheme };
export default myThemesReducer;
