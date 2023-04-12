import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { euro } from "@/store/utils";

import classes from "./Checkout.module.css";

const Checkout: React.FC<{ onCheckout: () => void }> = (props) => {
	const basket = useSelector((state: RootState) => state.basket);
	const router = useRouter();

	const checkoutHandler = () => {
		props.onCheckout();
		router.push("/store/order-summary");
	};

	return (
		<div className={classes.wrapper}>
			<div className={classes.section}>
				<span>Subtotal</span>
				<span>{euro.format(basket.cost.subtotal)}</span>
			</div>
			<div className={classes.section}>
				<span className={classes.delivery__label}>
					<p>Delivery*</p>
					<p className={classes.delivery__info}>{"* (Free for orders over 15 €)"}</p>
				</span>
				<span>
					{basket.cost.subtotal >= 15 ? "FREE" : euro.format(basket.cost.delivery)}
				</span>
			</div>
			<span className={classes.line}></span>
			<div className={`${classes.section} ${classes.section__total}`}>
				<span>Total</span>
				<span>
					{euro.format(basket.cost.subtotal + (basket.cost.subtotal >= 15 ? 0 : 5))}
				</span>
			</div>
			<button onClick={checkoutHandler} className={classes.button}>
				FINISH ORDER
			</button>
		</div>
	);
};

export default Checkout;
