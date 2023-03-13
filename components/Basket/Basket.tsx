import { RootState } from "@/store/store";
import { useSelector } from "react-redux";

import classes from "./Basket.module.css";
import Checkout from "./Checkout/Checkout";
import BasketCategory from "./BasketCategory/BasketCategory";

const Basket = () => {
	const categories = useSelector((state: RootState) => state.basket.categories);

	const checkoutHandler = () => {
		console.log(categories);
	};

	return (
		<div className={classes.wrapper}>
			{categories.length === 0 ? (
				"Basket is Empty!"
			) : (
				<>
					<ul className={classes["category-list"]}>
						{categories.map((category) => {
							return <BasketCategory category={category}/>;
						})}
					</ul>
					<Checkout onCheckout={checkoutHandler} />
				</>
			)}
		</div>
	);
};

export default Basket;
