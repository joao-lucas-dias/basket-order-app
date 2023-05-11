import { RootState } from "@/store/store";
import { useSelector } from "react-redux";
import BasketCheckout from "./BasketCheckout";
import BasketCategory from "./BasketCategory";
import BasketHeader from "./BasketHeader";

import classes from "@/styles/components/Basket/Basket.module.css";

const Basket: React.FC<{ numberOfItems: number; closeModalHandler: () => void }> = (
	props
) => {
	const categories = useSelector((state: RootState) => state.basket.categories);

	const modalBody =
		props.numberOfItems === 0 ? (
			<div className={classes.basket__empty}>
				<span>Your Basket is Empty!</span>
			</div>
		) : (
			<>
				<ul className={classes.basket__content}>
					{categories.map((category) => {
						return <BasketCategory key={category.name} category={category} />;
					})}
				</ul>
				<BasketCheckout onCheckout={props.closeModalHandler} />
			</>
		);

	return (
		<>
			<BasketHeader
				numberOfItems={props.numberOfItems}
				onCloseModal={props.closeModalHandler}
			/>
			{modalBody}
		</>
	);
};

export default Basket;
