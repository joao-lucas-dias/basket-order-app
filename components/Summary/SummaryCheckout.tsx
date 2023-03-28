import { useState, ChangeEvent, FormEvent } from "react";
import Order, { OrderItem } from "@/models/order";
import { RootState } from "@/store/store";
import { euro } from "@/store/utils";
import { useSelector } from "react-redux";
import TextField from "@mui/material/TextField";

import classes from "./SummaryCheckout.module.css";

const SummaryCheckout: React.FC<{ onOrderSubmit: (order: Order) => void }> = (props) => {
	const basket = useSelector((state: RootState) => state.basket);
	const [formName, setFormName] = useState("");
	const [formAddress, setFormAddress] = useState("");
	const [formPhoneNumber, setFormPhoneNumber] = useState("");
	const [formEmail, setFormEmail] = useState("");

	const nameChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
		setFormName(event.target.value);
	};

	const addressChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
		setFormAddress(event.target.value);
	};

	const phoneNumberChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
		setFormPhoneNumber(event.target.value);
	};

	const emailChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
		setFormEmail(event.target.value);
	};

	const submitHandler = (event: FormEvent) => {
		event.preventDefault();

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
			customerInfo: {
				name: formName,
				phoneNumber: formPhoneNumber,
				email: formEmail
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

				<form className={classes.form}>
					<TextField
						value={formName}
						onChange={nameChangeHandler}
						required
						label="Name"
						type="text"
						size="small"
					/>
					<TextField
						value={formAddress}
						onChange={addressChangeHandler}
						required
						label="Address"
						type="text"
						size="small"
					/>
					<TextField
						value={formPhoneNumber}
						onChange={phoneNumberChangeHandler}
						required
						label="Phone Number"
						type="tel"
						size="small"
					/>
					<TextField
						value={formEmail}
						onChange={emailChangeHandler}
						required
						label="E-mail"
						type="email"
						size="small"
					/>
					<button type="submit" onClick={submitHandler} className={classes.button}>
						PLACE ORDER
					</button>
				</form>
			</div>
		</div>
	);
};

export default SummaryCheckout;
