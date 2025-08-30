import { createSlice } from '@reduxjs/toolkit';

const styleStore = createSlice({
  name: 'cardColors',
  initialState: {
    cardColor: 'acheme1',
  },
  reducers: {
    addCardColor(state, action) {
      state.cardColor = action.payload;
    },
  },
});

const { addCardColor } = styleStore.actions;
const cardColorReducer = styleStore.reducer;
export { addCardColor };
export default cardColorReducer;
