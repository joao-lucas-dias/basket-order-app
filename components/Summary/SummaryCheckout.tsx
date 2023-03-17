import { RootState } from "@/store/store";
import { euro } from "@/store/utils";
import { useSelector } from "react-redux";

import classes from "./SummaryCheckout.module.css";

const SummaryCheckout = () => {
	const cost = useSelector((state: RootState) => state.basket.cost);

	return (
		<div style={{ display: "grid", gap: "1em" }}>
			<span className={classes.header}>Summary</span>
			<div className={classes["summary-container"]}>
				<div className={classes.section}>
					<span>Subtotal</span>
					<span>{euro.format(cost.subtotal)}</span>
				</div>
				<div className={classes.section}>
					<span className={classes.delivery}>
						<p>Delivery*</p>
						<p className={classes.info}>{"* (Free for orders over 15 €)"}</p>
					</span>
					<span>
						{cost.subtotal >= 15 ? "FREE" : euro.format(cost.delivery)}
					</span>
				</div>
				<span className={classes.line}></span>
				<div className={`${classes.section} ${classes.total}`}>
					<span>Total</span>
					<span>
						{euro.format(cost.subtotal + (cost.subtotal >= 15 ? 0 : 5))}
					</span>
				</div>
				<button className={classes.button}>ORDER</button>
			</div>
		</div>
	);
};

export default SummaryCheckout;
