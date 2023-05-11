import Product from "@/models/product";
import ProductItem from "./ProductItem/ProductItem";

import classes from "@/styles/components/Products/ProductsList.module.css";

const ProductsList: React.FC<{ category: string; products: Product[] }> = (props) => {
	return (
		<ul className={classes.grid}>
			{props.products.map((product) => (
				<ProductItem key={product.id} category={props.category} product={product} />
			))}
		</ul>
	);
};

export default ProductsList;
