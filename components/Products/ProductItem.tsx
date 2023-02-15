import Product from "@/models/product";

const ProductItem: React.FC<{ product: Product }> = (props) => {
  return (
    <li>
      <p>{props.product.title.name}</p>
    </li>
  )
};

export default ProductItem;