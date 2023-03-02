import Basket from "@/components/Basket/Basket";
import { RootState } from "@/store/store";
import { useSelector } from "react-redux";
import BasketButton from "./BasketButton/BasketButton";

const BasketOverlay = () => {
	const basket = useSelector((state: RootState) => state.basket);

	return (
		<>
			<BasketButton numOfItems={basket.items.length} />
			{basket.showBasket && <Basket />}
		</>
	);
};

export default BasketOverlay;
