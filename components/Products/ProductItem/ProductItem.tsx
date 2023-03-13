import { useState } from "react";
import { useDispatch } from "react-redux";

import Product from "@/models/product";
import classes from "./ProductItem.module.css";
import QuantitySelector from "./QuantitySelector/QuantitySelector";
import { addToCart } from "@/store/basketSlice";
import Header from "./Header/Header";
import PriceDisplay from "./PriceDisplay/PriceDisplay";
import Image from "next/image";

const ProductItem: React.FC<{ category: string; product: Product }> = (props) => {
	const { quantityInfo } = props.product;

	const [quantity, setQuantity] = useState(quantityInfo.amount.min);
	const dispatch = useDispatch();

	const incrementHandler = () => {
		setQuantity((oldValue) => (oldValue += quantityInfo.amount.step));
	};

	const decrementHandler = () => {
		if (quantity > quantityInfo.amount.min) {
			setQuantity((oldValue) => (oldValue -= quantityInfo.amount.step));
		}
	};

	const addToCartHandler = () => {
		dispatch(
			addToCart({
				id: `item-${props.product.id}`,
				category: props.category,
				image: props.product.image,
				name: props.product.header.name,
				sellingUnit: props.product.header.sellingUnit,
				quantity: quantity,
				quantityInfo: quantityInfo,
				priceInfo: {
					amount: props.product.price.amount,
					unit: props.product.price.unit
				}
			})
		);

		setQuantity(quantityInfo.amount.min);
	};

	return (
		<li className={classes.wrapper}>
			<Image
				src={`/images/products${props.product.image.url}`}
				alt={props.product.image.alt}
				className={classes.image}
				width={2000}
				height={2000}
				quality={100}
				priority
			/>
			<div className={classes.body}>
				<Header product={props.product} />
				<span className={classes.line}></span>
				<div className={classes["price-quantity"]}>
					<PriceDisplay price={props.product.price} />
					<QuantitySelector
						quantity={quantity}
						quantityInfo={quantityInfo}
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
