import { QuantityInfo } from "./product";

export interface BasketCategory {
  name: string;
  items: BasketItem[];
}

export interface BasketItem {
  id: string;
  category: string;
  image: {
		url: string;
		alt: string;
	};
  name: string;
  sellingUnit: string;
  quantity: number;
  quantityInfo: QuantityInfo;
  priceInfo: {
    amount: number;
    unit: string;
  }
}