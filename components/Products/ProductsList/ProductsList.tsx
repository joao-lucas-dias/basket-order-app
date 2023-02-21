import Product from "@/models/product";
import ProductItem from "../ProductItem/ProductItem";

import classes from "./ProductsList.module.css";

const ProductsList: React.FC<{ products: Product[] }> = (props) => {
	return (
		<ul className={classes.grid}>
			{props.products.map((product) => (
				<ProductItem key={product.id} product={product} />
			))}
		</ul>
	);
};

export default ProductsList;
