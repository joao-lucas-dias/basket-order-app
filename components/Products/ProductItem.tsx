import Product from "@/models/product";

const ProductItem: React.FC<{ product: Product }> = (props) => {
	return (
		<li>
			<div>
				<h5>{props.product.title.name}</h5>
        <h5>{props.product.title.sellingUnit}</h5>
        <p>{`1 ${props.product.title.extraInfo?.baseUnit} = ${props.product.title.extraInfo?.correspUnit.amount} ${props.product.title.extraInfo?.correspUnit.unit}`}</p>
			</div>
      <div>
        <h4>{`${props.product.price.amount} ${props.product.price.currency}`}</h4>
        <p>{`/ ${props.product.price.unit}`}</p>
      </div>
		</li>
	);
};

export default ProductItem;
