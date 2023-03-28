export interface OrderItem {
  name: string;
  category: string;
  sellingUnit: string;
  quantity: number;
  priceInfo: {
    amount: number;
    unit: string;
  }
  totalPrice: string;
}

export default interface Order {
  contactInfo: {
    name: string;
    phoneNumber: string;
    email: string;
  },
  basket: {
    products: OrderItem[];
    totalCost: string;
  }
}