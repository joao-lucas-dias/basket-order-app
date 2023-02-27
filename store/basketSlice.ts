import Item from "@/models/basketItem";
import { QuantityInfo } from "@/models/product";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type State = {
  showBasket: boolean;
  items: Item[];
};

const initialState: State = {
  showBasket: false,
  items: [],
};

interface QuantityUpdate {
  id: string;
  type: string;
  quantityInfo: QuantityInfo;
}

const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    toggleCartVisibility: (state) => {
      state.showBasket = !state.showBasket
    },
    addToCart: (state, action: PayloadAction<Item>) => {
      const item = state.items.find((item) => item.name === action.payload.name);

      if (item) {
        const quantityInfo = item.quantityInfo;
        const parsedMax: number = quantityInfo.amount.max ?? Number.MAX_SAFE_INTEGER;

        if (item.quantity + action.payload.quantity > parsedMax) {
          item.quantity = parsedMax;
        } else {
          item.quantity += action.payload.quantity;
        }
      } else {
        state.items.push(action.payload);
      }
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      const item = state.items.findIndex((item) => item.name === action.payload);
      state.items.splice(item, 1);
    },
    updateQuantity: (state, action: PayloadAction<QuantityUpdate>) => {
      const item = state.items.find((item) => item.name === action.payload.id);
      const quantityInfo = action.payload.quantityInfo;

      if (action.payload.type === "INC") {
        const parsedMax: number = quantityInfo.amount.max ?? Number.MAX_SAFE_INTEGER;

        if (item!.quantity < parsedMax) {
          item!.quantity += quantityInfo.amount.step;
        }
      } else {
        if (item!.quantity > quantityInfo.amount.min) {
          item!.quantity -= quantityInfo.amount.step;
        }
      }
    },
  },
});

export const { toggleCartVisibility, addToCart, removeFromCart, updateQuantity } = basketSlice.actions;

export default basketSlice.reducer;
