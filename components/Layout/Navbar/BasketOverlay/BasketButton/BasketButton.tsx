import { toggleCartVisibility } from "@/store/basketSlice";
import { useDispatch } from "react-redux";

import classes from "./BasketButton.module.css";

const BasketButton: React.FC<{ numOfItems: number }> = (props) => {
	const dispatch = useDispatch();
  
  const toggleBasketHandler = () => {
		dispatch(toggleCartVisibility());
	};

	return (
		<button onClick={toggleBasketHandler} className={classes.button}>
			My Basket
			{<span className={classes.badge}>{props.numOfItems}</span>}
		</button>
	);
};

export default BasketButton;
