import { RootState } from "@/store/store";
import { useSelector } from "react-redux";

import classes from "./Basket.module.css";
import Checkout from "./Checkout/Checkout";
import BasketCategory from "./BasketCategory/BasketCategory";
import Header from "./Header/Header";

const Basket: React.FC<{ numberOfItems: number; closeModalHandler: () => void }> = (
	props
) => {
	const categories = useSelector((state: RootState) => state.basket.categories);

	const modalBody =
		props.numberOfItems === 0 ? (
			<span>Basket is Empty!</span>
		) : (
			<>
				<ul className={classes["category-list"]}>
					{categories.map((category) => {
						return <BasketCategory key={category.name} category={category} />;
					})}
				</ul>
				<Checkout />
			</>
		);

	return (
		<>
			<Header
				numberOfItems={props.numberOfItems}
				onCloseModal={props.closeModalHandler}
			/>
			{modalBody}
		</>
	);
};

export default Basket;
