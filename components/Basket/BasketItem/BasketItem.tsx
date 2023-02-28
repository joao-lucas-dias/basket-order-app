import Item from "@/models/basketItem";
import { removeFromCart } from "@/store/basketSlice";
import { useDispatch } from "react-redux";

import classes from "./BasketItem.module.css";

const BasketItem: React.FC<{ item: Item }> = (props) => {
	const dispatch = useDispatch();

	const removeItemHandler = () => {
		dispatch(removeFromCart(props.item.name));
	};

	return (
		<li className={classes.wrapper}>
			<span className={classes.image}></span>
			<div className={classes.body}>
				<div>
					<span className={classes.name}>
						{`${props.item.name} (${props.item.sellingUnit})`}
					</span>
					<span className={classes.quantity}>{`Quantity: ${props.item.quantity}`}</span>
				</div>
				<div>
					<button onClick={removeItemHandler} className={classes.button}>
						X
					</button>
					<div className={classes["price-info"]}>
						<span className={classes.info}>
							{props.item.priceInfo.amount} / {props.item.priceInfo.unit}
						</span>
						<span className={classes.price}>{props.item.price}</span>
					</div>
				</div>
			</div>
		</li>
	);
};

export default BasketItem;
