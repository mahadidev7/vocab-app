import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  ReadVocabData: [],
};

const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    setReadVocabData: (state, action) => {
      state.ReadVocabData = [...action.payload];
    },

    // setIsModal: (state, action) => {
    //   state.isModal = action.payload;
    // },
    // setHelpCenterOfDictionary: (state, action) => {
    //   state.helpCenterOfDictionary = action.payload;
    // },
    // setFeedbackVocabulary: (state, action) => {
    //   state.myVocabulary = [...action.payload];
    // },
  },
});

export const { setReadVocabData } = basketSlice.actions;

export const CatchReadVocabData = state => state.basket.ReadVocabData;

export default basketSlice.reducer;
