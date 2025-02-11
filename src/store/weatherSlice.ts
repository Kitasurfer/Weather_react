import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface WeatherCardData {
  id: string;
  cityName: string;
  temperature: number;
  description: string;
  icon: string;
  timestamp: number;
}

interface WeatherState {
  cards: WeatherCardData[];
  error: string | null;
}

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
      console.log('Setting error:', action.payload);
      state.error = action.payload;
    },
  },
});

export const { addCard, deleteCard, clearHistory, setError } = weatherSlice.actions;
export default weatherSlice.reducer;
