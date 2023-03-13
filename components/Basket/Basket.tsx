import { RootState } from "@/store/store";
import { useSelector } from "react-redux";
import BasketItem from "./BasketItem/BasketItem";

import classes from "./Basket.module.css";
import Checkout from "./Checkout/Checkout";

const Basket = () => {
	const items = useSelector((state: RootState) => state.basket.items);

	const checkoutHandler = () => {
		console.log(items);
	};

	return (
		<div className={classes.wrapper}>
			{items.length === 0 ? (
				"Basket is Empty!"
			) : (
				<>
					<ul className={classes["item-list"]}>
						{items.map((item) => {
							return <BasketItem key={item.id} item={item} />;
						})}
					</ul>
					<Checkout onCheckout={checkoutHandler} />
				</>
			)}
		</div>
	);
};

export default Basket;
