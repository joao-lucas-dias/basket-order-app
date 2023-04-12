import { euro } from "@/store/utils";

import classes from "./PriceDisplay.module.css";

const PriceDisplay: React.FC<{ price: any }> = (props) => {
	return (
		<span className={classes.wrapper}>
			<p className={classes.price}>{euro.format(props.price.amount)}</p>
			<p className={classes.unit}>{`/ ${props.price.unit}`}</p>
		</span>
	);
};

export default PriceDisplay;
