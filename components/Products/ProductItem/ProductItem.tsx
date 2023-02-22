import { useState } from "react";

import Product from "@/models/product";
import classes from "./ProductItem.module.css";
import QuantitySelector from "./QuantitySelector/QuantitySelector";

const ProductItem: React.FC<{ product: Product }> = (props) => {
	const { quantityInfo } = props.product;

	const [quantity, setQuantity] = useState(quantityInfo.amount.min);

	const incrementHandler = () => {
		let parsedMax: number = quantityInfo.amount.max ?? Number.MAX_SAFE_INTEGER;

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
		//TODO: dispatch action to add to cart store
		console.log(quantity);
	};

	return (
		<li className={classes.wrapper}>
			<span className={classes.image}></span>
			<div className={classes.body}>
				<div className={classes.header}>
					<h5>{props.product.title.name}</h5>
					<h5>{props.product.title.sellingUnit}</h5>
					<p>{`1 ${props.product.title.extraInfo?.baseUnit} = ${props.product.title.extraInfo?.correspUnit.amount} ${props.product.title.extraInfo?.correspUnit.unit}`}</p>
				</div>
				<span className={classes.line}></span>
				<div className={classes["price-quantity"]}>
					<div className={classes.price}>
						<h4>{`${props.product.price.amount} ${props.product.price.currency}`}</h4>
						<p>{`/ ${props.product.price.unit}`}</p>
					</div>
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
