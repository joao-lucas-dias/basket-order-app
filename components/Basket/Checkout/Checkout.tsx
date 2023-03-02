import classes from "./Checkout.module.css";

const Checkout: React.FC<{ onCheckout: () => void }> = (props) => {
	return (
		<div className={classes.wrapper}>
			<div className={classes.section}>
				<span>Subtotal</span>
				<span>20.00 €</span>
			</div>
			<div className={classes.section}>
				<span>Delivery Cost</span>
				<span>20.00 €</span>
			</div>
			<span className={classes.line}></span>
			<div className={`${classes.section} ${classes.total}`}>
				<span>Total</span>
				<span>20.00 €</span>
			</div>
			<button onClick={props.onCheckout} className={classes.button}>
				FINISH ORDER
			</button>
		</div>
	);
};

export default Checkout;
