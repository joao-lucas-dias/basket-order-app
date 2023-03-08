import { RootState } from "@/store/store";
import { euro } from "@/store/utils";
import { useSelector } from "react-redux";
import classes from "./Checkout.module.css";

const Checkout: React.FC<{ onCheckout: () => void }> = (props) => {
	const cost = useSelector((state: RootState) => state.basket.cost);

	return (
		<div className={classes.wrapper}>
			<div className={classes.section}>
				<span>Subtotal</span>
				<span>{euro.format(cost.subtotal)}</span>
			</div>
			<div className={classes.section}>
				<span>Delivery Cost</span>
				<span>{euro.format(cost.delivery)}</span>
			</div>
			<span className={classes.line}></span>
			<div className={`${classes.section} ${classes.total}`}>
				<span>Total</span>
				<span>{euro.format(cost.subtotal + cost.delivery)}</span>
			</div>
			<button onClick={props.onCheckout} className={classes.button}>
				FINISH ORDER
			</button>
		</div>
	);
};

export default Checkout;
