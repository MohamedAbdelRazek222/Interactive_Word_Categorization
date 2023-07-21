// wordsSlice.js

import { createSlice } from "@reduxjs/toolkit";
import { fetchWords } from "../thunks/fetchWords";
import { fetchRank } from "../thunks/fetchRank";

const initialState = {
  words: [],
  currentWordIndex: 0,
  selectedOption: null,
  correctAnswer: null,
  progress: 0,
  showRankScreen: false,
  rank: null,
};

const wordsSlice = createSlice({
  name: 'words',
  initialState,
  reducers: {
    selectOption: (state, action) => {
      state.selectedOption = action.payload;
      const currentWord = state.words[state.currentWordIndex];
      state.correctAnswer = currentWord.pos === action.payload;
      state.progress = ((state.currentWordIndex + 1) / state.words.length) * 100;
      if (state.currentWordIndex === state.words.length - 1) {
        state.showRankScreen = true;
      }
    },
    nextWord: (state, action) => {
      state.selectedOption = null;
      state.correctAnswer = null;
      if (state.currentWordIndex < state.words.length - 1) {
        state.currentWordIndex++;
      } else {
        state.showRankScreen = true;
      }
    },
    resetPractice: (state) => {
      state.words = [];
      state.currentWordIndex = 0;
      state.selectedOption = null;
      state.correctAnswer = null;
      state.progress = 0;
      state.showRankScreen = false;
      state.rank = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchWords.fulfilled, (state, action) => {
        state.words = action.payload;
      })
      builder.addCase(fetchRank.fulfilled, (state, action) => {
        console.log({ssssssss: action.payload})

        state.rank = action.payload;
      });
  },
});


export const { selectOption, nextWord, resetPractice } = wordsSlice.actions;
export const rootReducer = wordsSlice.reducer;
