import ProductsList from "@/components/Products/ProductsList/ProductsList";
import Product from "@/models/product";
import { mongoDBConnectionString } from "@/secrets";
import { MongoClient } from "mongodb";
import { GetStaticPaths, GetStaticProps } from "next";
import Link from "next/link";
import { useRouter } from "next/router";

import classes from "@/styles/products.module.css";

const ProductsPage: React.FC<{ products: Product[] }> = (props) => {
	const router = useRouter();

	return (
		<>
			<div className={classes.header}>
				<Link href="/store">{`< Categories`}</Link>
				<h1>{router.query.categoryId}</h1>
			</div>
			<ProductsList products={props.products} />
		</>
	);
};

export const getStaticPaths: GetStaticPaths = async () => {
	return {
		fallback: true,
		paths: [
			{
				params: {
					categoryId: "vegetables"
				}
			},
			{
				params: {
					categoryId: "dairy"
				}
			},
			{
				params: {
					categoryId: "fruits"
				}
			}
		]
	};
};

export const getStaticProps: GetStaticProps = async (context) => {
	const client = await MongoClient.connect(mongoDBConnectionString);

	const db = client.db();

	const dataCollection = db.collection("data");

	const data = await dataCollection
		.find(
			{ name: { $eq: context.params!.categoryId } },
			{ projection: { _id: 0, name: 0 } }
		)
		.toArray();

	const products: Product[] = data[0].products;

	client.close();

	return {
		props: {
			products: products
		},
		revalidate: 1
	};
};

export default ProductsPage;
