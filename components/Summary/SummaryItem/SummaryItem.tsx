import Image from "next/image";
import { useDispatch } from "react-redux";
import { BasketItem } from "@/models/basket";
import { removeFromCart } from "@/store/basketSlice";
import { euro } from "@/store/utils";
import QuantitySelector from "./QuantitySelector";
import DeleteIcon from "@mui/icons-material/Delete";

import classes from "@/styles/components/Summary/SummaryItem.module.css";

const SummaryItem: React.FC<{ item: BasketItem }> = (props) => {
	const dispatch = useDispatch();

	const removeItemHandler = () => {
		dispatch(
			removeFromCart({
				itemId: props.item.id,
				category: props.item.category
			})
		);
	};

	const parseUnit = (unit: string) => {
		const split = unit.split("-");

		return split[1] ?? split[0];
	};

	return (
		<li className={classes.wrapper}>
			<Image
				src={`/images/products${props.item.image.url}`}
				alt={props.item.image.alt}
				className={classes.image}
				width={2000}
				height={2000}
				quality={100}
			/>
			<div className={classes.body}>
				<div>
					<p className={classes.title}>
						{props.item.name}{" "}
						<span className={classes.unit_info}>{` (${parseUnit(
							props.item.sellingUnit
						)})`}</span>
					</p>
					<div className={classes.selector_wrapper}>
						<p className={classes.selector_label}>QTY</p>
						<QuantitySelector item={props.item} />
					</div>
				</div>
				<div>
					<button onClick={removeItemHandler} className={classes.delete_button}>
						<DeleteIcon />
					</button>
					<span className={classes.price_info__wrapper}>
						<p className={classes.price_info}>
							{euro.format(props.item.priceInfo.amount)} / {props.item.priceInfo.unit}
						</p>
						<p className={classes.price}>
							{euro.format(props.item.quantity * props.item.priceInfo.amount)}
						</p>
					</span>
				</div>
			</div>
		</li>
	);
};

export default SummaryItem;
