import ProductsList from "@/components/Products/ProductsList/ProductsList";
import Product from "@/models/product";
import { mongoDBConnectionString } from "@/secrets";
import { MongoClient } from "mongodb";
import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";

import classes from "@/styles/products.module.css";
import { useDispatch, useSelector } from "react-redux";
import { toggleCartVisibility } from "@/store/basketSlice";
import { RootState } from "@/store/store";

const ProductsPage: React.FC<{ products: Product[] }> = (props) => {
	const router = useRouter();
	const showBasket = useSelector((state: RootState) => state.basket.showBasket);
	const dispatch = useDispatch();

	const goBack = () => {
		router.push("/store");
		showBasket && setTimeout(() => {
			dispatch(toggleCartVisibility());
		}, 500);
	};

	return (
		<>
			<div className={classes.header}>
				<button onClick={goBack}>{`< Categories`}</button>
				<h1>{router.query.categoryId}</h1>
			</div>
			<ProductsList category={router.query.categoryId!.toString()} products={props.products} />
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
			},
			{
				params: {
					categoryId: "aromatics"
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
		const { image, header, description, price, quantityInfo } = rest;

		const product: Product = {
			id: _id.toString(),
			image: image,
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
