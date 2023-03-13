import Basket from "@/components/Basket/Basket";
import { RootState } from "@/store/store";
import { useSelector } from "react-redux";
import BasketButton from "./BasketButton/BasketButton";

const BasketOverlay = () => {
	const basket = useSelector((state: RootState) => state.basket);

	const getNumberOfBasketItems = () => {
		let counter: number = 0;

		for (var category of basket.categories) {
			counter += category.items.length;
		}

		return counter;
	};

	return (
		<>
			<BasketButton numOfItems={getNumberOfBasketItems()} />
			{basket.showBasket && <Basket />}
		</>
	);
};

export default BasketOverlay;
