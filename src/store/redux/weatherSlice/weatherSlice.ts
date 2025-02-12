import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { WeatherCardData, WeatherState } from './types';

const initialState: WeatherState = {
  cards: [],
  error: null,
};

export const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    addCard: (
      state,
      action: PayloadAction<Omit<WeatherCardData, 'id' | 'timestamp'>>
    ) => {
      const newCard = {
        ...action.payload,
        id: crypto.randomUUID(),
        timestamp: Date.now(),
      };
      state.cards.unshift(newCard);
    },
    deleteCard: (state, action: PayloadAction<string>) => {
      state.cards = state.cards.filter((card) => card.id !== action.payload);
    },
    clearHistory: (state) => {
      state.cards = [];
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
  },
});

export const { addCard, deleteCard, clearHistory, setError } = weatherSlice.actions;
export default weatherSlice.reducer;