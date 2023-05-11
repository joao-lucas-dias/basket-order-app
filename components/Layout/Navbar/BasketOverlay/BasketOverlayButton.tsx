import { useEffect, useState } from "react";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";

import classes from "@/styles/components/Layout/BasketOverlayButton.module.css";

const BasketOverlayButton: React.FC<{ numOfItems: number; onOpenModalHandler: () => void }> = (
	props
) => {
	const [buttonAnimation, setButtonAnimation] = useState(false);

	const buttonClasses = `${classes.button} ${buttonAnimation && classes.button__bump}`;

	useEffect(() => {
		if (props.numOfItems === 0) {
			return;
		}

		setButtonAnimation(true);

		const timer = setTimeout(() => {
			setButtonAnimation(false);
		}, 300);

		return () => {
			clearTimeout(timer);
		};
	}, [props.numOfItems]);

	return (
		<button onClick={props.onOpenModalHandler} className={buttonClasses}>
			<span className={classes.button__label}>
				<ShoppingBasketIcon fontSize="large" /> My Basket
			</span>
			<span className={classes.button__badge}>{props.numOfItems}</span>
		</button>
	);
};

export default BasketOverlayButton;
