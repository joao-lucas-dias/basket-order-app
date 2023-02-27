import { useState } from "react";
import { useDispatch } from "react-redux";

import Product from "@/models/product";
import classes from "./ProductItem.module.css";
import QuantitySelector from "./QuantitySelector/QuantitySelector";
import { addToCart } from "@/store/basketSlice";
import Header from "./Header/Header";
import PriceDisplay from "./PriceDisplay/PriceDisplay";

const ProductItem: React.FC<{ product: Product }> = (props) => {
	const { quantityInfo } = props.product;

	const [quantity, setQuantity] = useState(quantityInfo.amount.min);
	const dispatch = useDispatch();

	const incrementHandler = () => {
		const parsedMax: number = quantityInfo.amount.max ?? Number.MAX_SAFE_INTEGER;

		if (quantity < parsedMax) {
			setQuantity((oldValue) => (oldValue += quantityInfo.amount.step));
		}
	};

	const decrementHandler = () => {
		if (quantity > quantityInfo.amount.min) {
			setQuantity((oldValue) => (oldValue -= quantityInfo.amount.step));
		}
	};

	const addToCartHandler = () => {
		dispatch(
			addToCart({
				name: props.product.title.name,
				sellingUnit: props.product.title.sellingUnit,
				quantity: quantity,
				quantityInfo: {
					amount: {
						min: quantityInfo.amount.min,
						step: quantityInfo.amount.step,
						max: quantityInfo.amount.max
					},
					unit: quantityInfo.unit
				},
				price: 10,
				priceInfo: {
					amount: props.product.price.amount,
					currency: props.product.price.currency,
					unit: props.product.price.unit
				}
			})
		);

		setQuantity(quantityInfo.amount.min);
	};

	return (
		<li className={classes.wrapper}>
			<span className={classes.image}></span>
			<div className={classes.body}>
				<Header product={props.product} />
				<span className={classes.line}></span>
				<div className={classes["price-quantity"]}>
					<PriceDisplay price={props.product.price} />
					<QuantitySelector
						quantity={quantity}
						onIncrement={incrementHandler}
						onDecrement={decrementHandler}
					/>
				</div>
			</div>
			<button className={classes.button} onClick={addToCartHandler}>
				ADD TO BASKET
			</button>
		</li>
	);
};

export default ProductItem;
