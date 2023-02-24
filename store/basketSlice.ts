import Item from "@/models/basketItem";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type State = {
  items: Item[];
};

const initialState: State = {
  items: [],
};

interface QuantityUpdate {
  id: string;
  step: number;
}

const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Item>) => {
      state.items.push(action.payload);
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      state.items.filter((item) => item.name !== action.payload);
    },
    updateQuantity: (state, action: PayloadAction<QuantityUpdate>) => {
      const item = state.items.findIndex((item) => item.name === action.payload.id);
      state.items[item].quantity += action.payload.step;
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity } = basketSlice.actions;

export default basketSlice.reducer;
