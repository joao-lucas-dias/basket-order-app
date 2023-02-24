import { RootState } from "@/store/store";
import { useSelector } from "react-redux";
import BasketItem from "./BasketItem/BasketItem";

const Basket = () => {
	const items = useSelector((state: RootState) => state.basket.items);

	return (
		<>
			<ul>
				{items.map((item) => {
					return <BasketItem key={item.name} item={item} />;
				})}
			</ul>
		</>
	);
};

export default Basket;
