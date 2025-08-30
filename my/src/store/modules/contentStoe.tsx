import { createSlice } from '@reduxjs/toolkit';

const styleStore = createSlice({
  name: 'contentColors',
  initialState: {
    contentColor: 'ant-anchor-link',
  },
  reducers: {
    addContentColor(state, action) {
      state.contentColor = action.payload;
    },
  },
});

const { addContentColor } = styleStore.actions;
const contentColorsReducer = styleStore.reducer;
export { addContentColor };
export default contentColorsReducer;
