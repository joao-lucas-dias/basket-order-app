import ProductsList from "@/components/Products/ProductsList";
import Product from "@/models/product";
import Link from "next/link";
import { useRouter } from "next/router";

const PRODUCTS: Product[] = [
  {
    id: "product1",
    title: {
      name: "Louro",
      units: "un."
    },
    units: "molho 40 gr.",
    price: {
      value: 0.5,
      unit: "molho"
    },
    quantity: {
      unit: "unit",
      min: 1,
      step: 1,
      max: null
    }
  }
];

const ProductsPage = () => {
	const router = useRouter();

	return (
		<>
			<h1>Products Page!</h1>
      <Link href="/store">Categories</Link>
      <p>{router.query.categoryId}</p>
      <ProductsList products={PRODUCTS} />
		</>
	);
};

export default ProductsPage;
