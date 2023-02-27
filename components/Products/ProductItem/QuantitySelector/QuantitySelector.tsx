import classes from "./QuantitySelector.module.css";

const QuantitySelector: React.FC<{
	quantity: number;
	onIncrement: () => void;
	onDecrement: () => void;
}> = (props) => {
	return (
		<div className={classes.wrapper}>
			<span>QTY</span>
			<div className={classes.container}>
				<div className={classes.display}>
					<span className={classes.quantity}>{props.quantity}</span>
					<span className={classes.unit}>/ unit</span>
				</div>
				<div className={classes.buttons}>
					<button onClick={props.onIncrement} className={classes.increment}>
						+
					</button>
					<button onClick={props.onDecrement} className={classes.decrement}>
						-
					</button>
				</div>
			</div>
		</div>
	);
};

export default QuantitySelector;
