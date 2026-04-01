import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  ReadVocabData: [],
  BookMarkDrawer: false,
  OnlineDictionaryDrawer: false,
  OnlineDictionaryValue: null,
};

const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    setReadVocabData: (state, action) => {
      state.ReadVocabData = [...action.payload];
    },
    setBookMarkDrawer: (state, action) => {
      state.BookMarkDrawer = action.payload;
    },
    setOnlineDictionaryDrawer: (state, action) => {
      state.OnlineDictionaryDrawer = action.payload;
    },
    setOnlineDictionaryValue: (state, action) => {
      state.OnlineDictionaryValue = action.payload;
    },
  },
});

export const { setReadVocabData, setBookMarkDrawer, setOnlineDictionaryDrawer, setOnlineDictionaryValue } = basketSlice.actions;

export const CatchReadVocabData = state => state.basket.ReadVocabData;
export const CatchBookMarkDrawer = state => state.basket.BookMarkDrawer;
export const CatchOnlineDictionaryDrawer = state => state.basket.OnlineDictionaryDrawer;
export const CatchOnlineDictionaryValue = state => state.basket.OnlineDictionaryValue;

export default basketSlice.reducer;
