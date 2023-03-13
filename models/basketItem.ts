import { QuantityInfo } from "./product";

export default interface Item {
  id: string;
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