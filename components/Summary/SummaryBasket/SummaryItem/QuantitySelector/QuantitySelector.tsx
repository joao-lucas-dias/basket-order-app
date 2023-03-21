import { BasketItem } from "@/models/basket";
import { updateQuantity } from "@/store/basketSlice";
import { useDispatch } from "react-redux";
import classes from "./QuantitySelector.module.css";

const QuantitySelector: React.FC<{
	item: BasketItem;
}> = (props) => {
	const dispatch = useDispatch();

	const quantityChangeHandler = (type: string) => {
		dispatch(
			updateQuantity({
				category: props.item.category,
				itemId: props.item.id,
				type: type,
				quantityInfo: props.item.quantityInfo
			})
		);
	};

	return (
		<div className={classes.container}>
			<button onClick={() => quantityChangeHandler("DEC")} className={classes.button}>
				-
			</button>
			<span className={classes.quantity}>
				<p className={classes.amount}>{props.item.quantity}</p>
        <p className={classes.unit}>{props.item.quantityInfo.unit}</p>
			</span>
			<button onClick={() => quantityChangeHandler("INC")} className={classes.button}>
				+
			</button>
		</div>
	);
};

export default QuantitySelector;