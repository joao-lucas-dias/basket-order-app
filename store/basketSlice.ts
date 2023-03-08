import Item from "@/models/basketItem";
import { QuantityInfo } from "@/models/product";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type State = {
	showBasket: boolean;
	items: Item[];
	cost: {
		subtotal: number;
		delivery: number;
	};
};

const initialState: State = {
	showBasket: false,
	items: [],
	cost: {
		subtotal: 0,
		delivery: 5
	}
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
			state.showBasket = !state.showBasket;
		},
		addToCart: (state, action: PayloadAction<Item>) => {
			// Check if Item is already in the basket

			const item = state.items.find((item) => item.id === action.payload.id);
      const payloadItem = action.payload;

			if (item) {
				// If it is, update quantity and basket value accordingly

        const oldQuantity = item.quantity;
        const quantityToAdd = payloadItem.quantity;
        const newQuantity = oldQuantity + quantityToAdd;
        item.quantity = newQuantity;

        const oldSubtotal = state.cost.subtotal;
        const priceToAdd = payloadItem.quantity * payloadItem.priceInfo.amount;
        const newSubtotal = oldSubtotal + priceToAdd;
				state.cost.subtotal = newSubtotal;
			} else {
				// If it isn't, add the Item to the basket

				state.items.push(payloadItem);

				const oldSubtotal = state.cost.subtotal;
        const priceToAdd = payloadItem.quantity * payloadItem.priceInfo.amount;
        const newSubtotal = oldSubtotal + priceToAdd;
				state.cost.subtotal = newSubtotal;
			}
		},
		removeFromCart: (state, action: PayloadAction<string>) => {
			const item = state.items.findIndex((item) => item.name === action.payload);
			const deletedItem = state.items.splice(item, 1);
      state.cost.subtotal -= deletedItem[0].quantity * deletedItem[0].priceInfo.amount;
		},
		updateQuantity: (state, action: PayloadAction<QuantityUpdate>) => {
			const item = state.items.find((item) => item.name === action.payload.id);
			const quantityInfo = action.payload.quantityInfo;

			if (action.payload.type === "INC") {
				item!.quantity += quantityInfo.amount.step;
			} else {
				if (item!.quantity > quantityInfo.amount.min) {
					item!.quantity -= quantityInfo.amount.step;
				}
			}
		}
	}
});

export const { toggleCartVisibility, addToCart, removeFromCart, updateQuantity} =
	basketSlice.actions;

export default basketSlice.reducer;
