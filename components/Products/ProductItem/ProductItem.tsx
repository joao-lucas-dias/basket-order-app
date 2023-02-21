import Product from "@/models/product";

import classes from "./ProductItem.module.css";

const ProductItem: React.FC<{ product: Product }> = (props) => {
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
					<div></div>
				</div>
			</div>
			<button className={classes.button} onClick={() => console.log("clicked")}>
				ADD TO BASKET
			</button>
		</li>
	);
};

export default ProductItem;
