import Item from "@/models/basketItem";
import { QuantityInfo } from "@/models/product";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type State = {
  showBasket: boolean;
  items: Item[];
  cost: {
    subtotal: number;
    delivery: number;
    total: number;
  }
};

const initialState: State = {
  showBasket: false,
  items: [],
  cost: {
    subtotal: 0,
    delivery: 5,
    total: 0
  }
};

interface QuantityUpdate {
  id: string;
  type: string;
  price: number;
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
          const parsedQty = parsedMax - item.quantity;

          item.quantity = parsedMax;
          item.price = parsedMax * item.priceInfo.amount;
          state.cost.subtotal += parsedQty * item.priceInfo.amount;
        } else {
          item.quantity += action.payload.quantity;
          item.price += action.payload.price;
          state.cost.subtotal += action.payload.price;
        }
      } else {
        state.items.push(action.payload);
        state.cost.subtotal += action.payload.price;
      }
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      const item = state.items.findIndex((item) => item.name === action.payload);
      const deletedItem = state.items.splice(item, 1);
      state.cost.subtotal -= deletedItem[0].price;
    },
    updateQuantity: (state, action: PayloadAction<QuantityUpdate>) => {
      const item = state.items.find((item) => item.name === action.payload.id);
      const quantityInfo = action.payload.quantityInfo;

      if (action.payload.type === "INC") {
        const parsedMax: number = quantityInfo.amount.max ?? Number.MAX_SAFE_INTEGER;

        if (item!.quantity < parsedMax) {
          item!.quantity += quantityInfo.amount.step;
          item!.price += action.payload.price * quantityInfo.amount.step;
        }
      } else {
        if (item!.quantity > quantityInfo.amount.min) {
          item!.quantity -= quantityInfo.amount.step;
          item!.price -= action.payload.price * quantityInfo.amount.step;
        }
      }
    },
  },
});

export const { toggleCartVisibility, addToCart, removeFromCart, updateQuantity } = basketSlice.actions;

export default basketSlice.reducer;
