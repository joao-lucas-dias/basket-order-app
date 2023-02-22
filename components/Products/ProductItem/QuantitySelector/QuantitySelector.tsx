import classes from "./QuantitySelector.module.css";

const QuantitySelector: React.FC<{
	quantity: number;
	onIncrement: () => void;
	onDecrement: () => void;
}> = (props) => {
	return (
		<div className={classes.wrapper}>
			QTY
			<div className={classes.container}>
				<div className={classes.display}>
					<span>{props.quantity}</span>
					<p>/ unit</p>
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
