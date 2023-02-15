import Product from "@/models/product";
import ProductItem from "./ProductItem";

const ProductsList: React.FC<{ products: Product[] }> = (props) => {
	return (
		<ul>
			{props.products.map((product) => (
				<ProductItem key={product.id} product={product}/>
			))}
		</ul>
	);
};

export default ProductsList;
