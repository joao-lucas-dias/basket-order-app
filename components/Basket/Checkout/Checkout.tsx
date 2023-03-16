import { toggleCartVisibility } from "@/store/basketSlice";
import { RootState } from "@/store/store";
import { euro } from "@/store/utils";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import classes from "./Checkout.module.css";

const Checkout = () => {
	const basket = useSelector((state: RootState) => state.basket);
	const router = useRouter();
	const dispatch = useDispatch();

	const checkoutHandler = () => {
		router.push("/store/order-summary");
		dispatch(toggleCartVisibility());
	};

	return (
		<div className={classes.wrapper}>
			<div className={classes.section}>
				<span>Subtotal</span>
				<span>{euro.format(basket.cost.subtotal)}</span>
			</div>
			<div className={classes.section}>
				<span className={classes.delivery}>
					<p>Delivery*</p>
					<p className={classes.info}>{"* (Free for orders over 15 €)"}</p>
				</span>
				<span>{basket.cost.subtotal >= 15 ? "FREE" : euro.format(basket.cost.delivery)}</span>
			</div>
			<span className={classes.line}></span>
			<div className={`${classes.section} ${classes.total}`}>
				<span>Total</span>
				<span>{euro.format(basket.cost.subtotal + (basket.cost.subtotal >= 15 ? 0 : 5))}</span>
			</div>
			<button onClick={checkoutHandler} className={classes.button}>
				FINISH ORDER
			</button>
		</div>
	);
};

export default Checkout;
