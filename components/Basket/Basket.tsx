import Item from "@/models/basketItem";
import BasketItem from "./BasketItem/BasketItem";

const ITEMS: Item[] = [
	{
		name: "Louro",
		sellingUnit: "bunch",
		price: 12.5,
		priceInfo: {
			amount: 0.5,
			currency: "EUR",
			unit: "unit"
		},
		quantity: 50,
		quantityInfo: {
			amount: {
				min: 1,
				step: 1,
				max: 10
			},
			unit: "gr"
		}
	},
	{
		name: "Oregãos",
		sellingUnit: "bunch",
		price: 12.5,
		priceInfo: {
			amount: 0.5,
			currency: "EUR",
			unit: "unit"
		},
		quantity: 50,
		quantityInfo: {
			amount: {
				min: 1,
				step: 1,
				max: 10
			},
			unit: "gr"
		}
	}
];

const Basket = () => {
	return (
		<ul>
			{ITEMS.map((item) => {
				return <BasketItem key={item.name} item={item} />;
			})}
		</ul>
	);
};

export default Basket;
