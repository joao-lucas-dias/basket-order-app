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
      state.items.push(action.payload);
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      const item = state.items.findIndex((item) => item.name === action.payload);
      state.items.splice(item, 1);
    },
    updateQuantity: (state, action: PayloadAction<QuantityUpdate>) => {
      const item = state.items.findIndex((item) => item.name === action.payload.id);

      if (action.payload.type === "INC") {
        let parsedMax: number = action.payload.quantityInfo.amount.max ?? Number.MAX_SAFE_INTEGER;

        if (state.items[item].quantity < parsedMax) {
          state.items[item].quantity += action.payload.quantityInfo.amount.step;
        }
      } else {
        if (state.items[item].quantity > action.payload.quantityInfo.amount.min) {
          state.items[item].quantity -= action.payload.quantityInfo.amount.step;
        }
      }
    },
  },
});

export const { toggleCartVisibility, addToCart, removeFromCart, updateQuantity } = basketSlice.actions;

export default basketSlice.reducer;
