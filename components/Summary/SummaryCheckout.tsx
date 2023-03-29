import { useState, ChangeEvent, FormEvent } from "react";
import Order, { OrderItem } from "@/models/order";
import { RootState } from "@/store/store";
import { euro } from "@/store/utils";
import { useSelector } from "react-redux";
import TextField from "@mui/material/TextField";

import classes from "./SummaryCheckout.module.css";
import { Button } from "@mui/material";

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

	const validateForm = () => {
		return (
			formName.length > 0 &&
			formAddress.length > 0 &&
			formPhoneNumber.length > 0 &&
			formEmail.length > 0
		);
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
				address: formAddress,
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
				<div className={classes.basket__price}>
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
				</div>

				<form className={classes.form}>
					<TextField
						value={formName}
						onChange={nameChangeHandler}
						required
						color="success"
						label="Name"
						type="text"
						size="small"
					/>
					<TextField
						value={formAddress}
						onChange={addressChangeHandler}
						required
						color="success"
						label="Address"
						type="text"
						size="small"
					/>
					<TextField
						value={formPhoneNumber}
						onChange={phoneNumberChangeHandler}
						required
						color="success"
						label="Phone Number"
						type="tel"
						size="small"
					/>
					<TextField
						value={formEmail}
						onChange={emailChangeHandler}
						required
						color="success"
						label="E-mail"
						type="email"
						size="small"
					/>
					<Button
						disabled={!validateForm()}
						type="submit"
						onClick={submitHandler}
						variant="contained"
						size="medium"
						className={classes.button}
					>
						PLACE ORDER
					</Button>
				</form>
			</div>
		</div>
	);
};

export default SummaryCheckout;
