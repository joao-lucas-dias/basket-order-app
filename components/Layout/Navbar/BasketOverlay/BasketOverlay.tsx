import Basket from "@/components/Basket/Basket";
import { RootState } from "@/store/store";
import { useSelector } from "react-redux";
import BasketButton from "./BasketButton/BasketButton";

const BasketOverlay = () => {
	const showBasket = useSelector((state: RootState) => state.basket.showBasket);

	return (
		<>
			<BasketButton />
			{showBasket && <Basket />}
		</>
	);
};

export default BasketOverlay;
