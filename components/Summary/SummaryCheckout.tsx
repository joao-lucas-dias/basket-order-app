import Order, { OrderItem } from "@/models/order";
import { RootState } from "@/store/store";
import { euro } from "@/store/utils";
import { useSelector } from "react-redux";

import classes from "./SummaryCheckout.module.css";

const SummaryCheckout: React.FC<{ onOrderSubmit: (order: Order) => void }> = (props) => {
	const basket = useSelector((state: RootState) => state.basket);

	const submitHandler = () => {
		const products: OrderItem[] = [];

		for (var category of basket.categories) {
			category.items.map((item) =>
				products.push({
					name: item.name,
					category: item.category,
					sellingUnit: item.sellingUnit,
					quantity: item.quantity,
					priceInfo: item.priceInfo,
					totalPrice: euro.format(item.quantity * item.priceInfo.amount)
				})
			);
		}

		const order: Order = {
			contactInfo: {
				name: "John Doe",
				phoneNumber: "+351123456789",
				email: "john.doe@email.com"
			},
			basket: {
				products: products,
				totalCost: euro.format(
					basket.cost.subtotal + (basket.cost.subtotal >= 15 ? 0 : 5)
				)
			}
		};

		props.onOrderSubmit(order);
	};

	return (
		<div className={classes.wrapper}>
			<span className={classes.header}>Summary</span>
			<div className={classes["summary-container"]}>
				<div className={classes.section}>
					<span>Subtotal</span>
					<span>{euro.format(basket.cost.subtotal)}</span>
				</div>
				<div className={classes.section}>
					<span className={classes.delivery}>
						<p>Delivery*</p>
						<p className={classes.info}>{"* (Free for orders over 15 €)"}</p>
					</span>
					<span>
						{basket.cost.subtotal >= 15 ? "FREE" : euro.format(basket.cost.delivery)}
					</span>
				</div>
				<span className={classes.line}></span>
				<div className={`${classes.section} ${classes.total}`}>
					<span>Total</span>
					<span>
						{euro.format(basket.cost.subtotal + (basket.cost.subtotal >= 15 ? 0 : 5))}
					</span>
				</div>
				<button onClick={submitHandler} className={classes.button}>
					ORDER
				</button>
			</div>
		</div>
	);
};

export default SummaryCheckout;
