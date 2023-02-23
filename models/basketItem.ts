import { QuantityInfo } from "./product";

export default interface Item {
  name: string;
  sellingUnit: string;
  quantity: number;
  quantityInfo: QuantityInfo;
  price: number;
  priceInfo: {
    amount: number;
    currency: string;
    unit: string;
  }
}