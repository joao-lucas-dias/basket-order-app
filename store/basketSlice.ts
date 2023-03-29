import { BasketItem } from "@/models/basket";
import { BasketCategory } from "@/models/basket";
import { QuantityInfo } from "@/models/product";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type State = {
	showBasket: boolean;
	categories: BasketCategory[];
	cost: {
		subtotal: number;
		delivery: number;
	};
};

const initialState: State = {
	showBasket: false,
	categories: [],
	cost: {
		subtotal: 0,
		delivery: 5
	}
};

interface QuantityUpdate {
	category: string;
	itemId: string;
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
		toggleCategoryVisibility: (state, action: PayloadAction<string>) => {
			const category = state.categories.find((category) => category.name === action.payload);
			category!.showCategory = !category!.showCategory;
		},
		addToCart: (state, action: PayloadAction<BasketItem>) => {
			const payloadCategory = action.payload.category;
			const payloadItem = action.payload;
			const category = state.categories.find(
				(category) => category.name === payloadCategory
			);

			if (!category) {
				const newItems: BasketItem[] = [action.payload];

				const newCategory: BasketCategory = {
					showCategory: true,
					name: payloadCategory,
					items: newItems
				};

				state.categories.push(newCategory);
			} else {
				// Check if Item is already in the basket

				const item = category.items.find((item) => item.id === payloadItem.id);

				if (item) {
					// If it is, update quantity and basket value accordingly

					const oldQuantity = item.quantity;
					const quantityToAdd = payloadItem.quantity;
					const newQuantity = oldQuantity + quantityToAdd;
					item.quantity = newQuantity;
				} else {
					// If it isn't, add the Item to the basket

					category.items.push(payloadItem);
				}
			}

			const oldSubtotal = state.cost.subtotal;
			const priceToAdd = payloadItem.quantity * payloadItem.priceInfo.amount;
			const newSubtotal = oldSubtotal + priceToAdd;
			state.cost.subtotal = newSubtotal;
		},
		removeFromCart: (
			state,
			action: PayloadAction<{ category: string; itemId: string }>
		) => {
			const category = state.categories.findIndex(
				(category) => category.name === action.payload.category
			);
			const item = state.categories[category].items.findIndex(
				(item) => item.id === action.payload.itemId
			);

			const deletedItem = state.categories[category].items.splice(item, 1);
			state.cost.subtotal -= deletedItem[0].quantity * deletedItem[0].priceInfo.amount;

			if (state.categories[category].items.length === 0) {
				state.categories.splice(category, 1);
			}
		},
		updateQuantity: (state, action: PayloadAction<QuantityUpdate>) => {
			const category = state.categories.findIndex(
				(category) => category.name === action.payload.category
			);
			const item = state.categories[category].items.find(
				(item) => item.id === action.payload.itemId
			);
			const quantityInfo = action.payload.quantityInfo;

			const oldSubtotal = state.cost.subtotal;
			const priceToChange = item!.quantityInfo.amount.step * item!.priceInfo.amount;
			let newSubtotal: number = oldSubtotal;
			
			if (action.payload.type === "INC") {
				item!.quantity += quantityInfo.amount.step;
				newSubtotal = oldSubtotal + priceToChange;
			} else {
				if (item!.quantity > quantityInfo.amount.min) {
					item!.quantity -= quantityInfo.amount.step;
					newSubtotal = oldSubtotal - priceToChange;
				}
			}

			state.cost.subtotal = newSubtotal;
		},
		resetBasket: () => {
			return initialState
		}
	}
});

export const { toggleCartVisibility, toggleCategoryVisibility, addToCart, removeFromCart, updateQuantity, resetBasket } =
	basketSlice.actions;

export default basketSlice.reducer;
