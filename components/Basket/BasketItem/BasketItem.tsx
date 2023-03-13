import Item from "@/models/basketItem";
import { removeFromCart } from "@/store/basketSlice";
import { euro } from "@/store/utils";
import Image from "next/image";
import { useDispatch } from "react-redux";

import classes from "./BasketItem.module.css";

const BasketItem: React.FC<{ item: Item }> = (props) => {
	const dispatch = useDispatch();

	const removeItemHandler = () => {
		dispatch(removeFromCart(props.item.name));
	};

	const parseUnit = (unit: string) => {
		const split = unit.split("-");

		return split[1] ?? split[0];
	};

	return (
		<li className={classes.wrapper}>
			<Image
				src={`/images/products/${""}/${props.item.image.url}`}
				alt={props.item.image.alt}
				className={classes.image}
				width={2000}
				height={2000}
				quality={100}
			/>
			<div className={classes.body}>
				<div>
					<span className={classes.header}>
						<span className={classes.name}>{props.item.name}</span>
						<span className={classes["unit-info"]}>{` (${parseUnit(
							props.item.sellingUnit
						)})`}</span>
					</span>
					<span className={classes.quantity}>{`Quantity: ${props.item.quantity}`}</span>
				</div>
				<div>
					<button onClick={removeItemHandler} className={classes.button}>
						X
					</button>
					<div className={classes["price-info"]}>
						<span className={classes.info}>
							{euro.format(props.item.priceInfo.amount)} / {props.item.priceInfo.unit}
						</span>
						<span className={classes.price}>
							{euro.format(props.item.quantity * props.item.priceInfo.amount)}
						</span>
					</div>
				</div>
			</div>
		</li>
	);
};

export default BasketItem;
