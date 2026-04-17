import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Dish } from '../../utils/data';

type CartState = {
  items: Dish[];
  isOpen: boolean;
};

const initialState: CartState = {
  items: [],
  isOpen: false,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Dish>) => {
      state.items.push(action.payload);
    },
    remove: (state, action: PayloadAction<number>) => {
      const itemIndex = state.items.findIndex((item) => item.id === action.payload);
      
      if (itemIndex !== -1) {
        state.items.splice(itemIndex, 1);
      }
    },
    open: (state) => {
      state.isOpen = true;
    },
    close: (state) => {
      state.isOpen = false;
    },
    clear: (state) => {
      state.items = [];
    },
  },
});

export const { add, remove, open, close, clear } = cartSlice.actions;
export default cartSlice.reducer;