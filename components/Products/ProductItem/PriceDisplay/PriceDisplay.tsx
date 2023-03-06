import classes from "./PriceDisplay.module.css";

const PriceDisplay: React.FC<{ price: any }> = (props) => {
	return (
		<div className={classes.price}>
			<span className={classes.amount}>{`${props.price.amount} €`}</span>
			<span className={classes.unit}>{`/ ${props.price.unit}`}</span>
		</div>
	);
};

export default PriceDisplay;
