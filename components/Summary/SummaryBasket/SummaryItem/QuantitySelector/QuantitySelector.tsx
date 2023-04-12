import { useDispatch } from "react-redux";
import { BasketItem } from "@/models/basket";
import { updateQuantity } from "@/store/basketSlice";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

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
		<div className={classes.wrapper}>
			<button onClick={() => quantityChangeHandler("DEC")} className={classes.button}>
				<RemoveIcon />
			</button>
			<span className={classes.display}>
				<p className={classes.display__amount}>{props.item.quantity}</p>
				<p className={classes.display__unit}>{props.item.quantityInfo.unit}</p>
			</span>
			<button onClick={() => quantityChangeHandler("INC")} className={classes.button}>
				<AddIcon />
			</button>
		</div>
	);
};

export default QuantitySelector;
