import { BasketItem } from "./basket";

export default interface Order {
  contactInfo: {
    name: string;
    phoneNumber: string;
    email: string;
  },
  basket: {
    products: BasketItem[];
    cost: number;
  }
}