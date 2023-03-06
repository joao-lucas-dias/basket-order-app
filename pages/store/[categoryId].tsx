import ProductsList from "@/components/Products/ProductsList/ProductsList";
import Product from "@/models/product";
import { mongoDBConnectionString } from "@/secrets";
import { MongoClient } from "mongodb";
import { GetStaticPaths, GetStaticProps } from "next";
import Link from "next/link";
import { useRouter } from "next/router";

import classes from "@/styles/products.module.css";
import Basket from "@/components/Basket/Basket";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

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

	let collectionName: string = "";

	if (context.params!.categoryId) {
		collectionName = context.params!.categoryId.toString();
	}

	const dataCollection = db.collection(collectionName);

	const data = await dataCollection.find().toArray();

	const products: Product[] = data.map(({ _id, ...rest }) => {
		const { header, description, price, quantityInfo } = rest;

		const product: Product = {
			id: _id.toString(),
			header: header,
			description: description,
			price: price,
			quantityInfo: quantityInfo
		};

		return product;
	});

	client.close();

	return {
		props: {
			products: products
		},
		revalidate: 1
	};
};

export default ProductsPage;
