export default interface Product {
  id: string;
  title: {
    name: string;
    units: string;
  };
  units: string;
  price: {
    value: number;
    unit: string;
  }
  quantity: {
    unit: string;
    min: number;
    step: number;
    max: number | null;
  }
}