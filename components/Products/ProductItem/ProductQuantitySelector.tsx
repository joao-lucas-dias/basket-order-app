import { QuantityInfo } from "@/models/product";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

import classes from "@/styles/components/Products/ProductQuantitySelector.module.css";

const ProductQuantitySelector: React.FC<{
	quantity: number;
	quantityInfo: QuantityInfo;
	onIncrement: () => void;
	onDecrement: () => void;
}> = (props) => {
	return (
		<div>
			<span>Quantity</span>
			<div className={classes.wrapper}>
				<span className={classes.display}>
					<p className={classes.display__quantity}>{props.quantity}</p>
					<p className={classes.display__unit}>{props.quantityInfo.unit}</p>
				</span>
				<div className={classes.buttons}>
					<button onClick={props.onIncrement}>
						<AddIcon />
					</button>
					<button onClick={props.onDecrement}>
						<RemoveIcon />
					</button>
				</div>
			</div>
		</div>
	);
};

export default ProductQuantitySelector;
