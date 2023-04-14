import { MongoClient } from "mongodb";
import { GetStaticPaths, GetStaticProps } from "next";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import ProductsList from "@/components/Products/ProductsList/ProductsList";
import Product from "@/models/product";
import { toggleCartVisibility } from "@/store/basketSlice";
import { RootState } from "@/store/store";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import classes from "@/styles/ProductsPage.module.css";

const ProductsPage: React.FC<{ products: Product[] }> = (props) => {
	const router = useRouter();
	const showBasket = useSelector((state: RootState) => state.basket.showBasket);
	const dispatch = useDispatch();

	var categoryId: string = "";

	useEffect(() => {
		if (!router.isReady) return;

		categoryId = router.query.categoryId![0];
	}, [router.isReady]);

	const goBack = () => {
		router.push("/store");
		showBasket &&
			setTimeout(() => {
				dispatch(toggleCartVisibility());
			}, 500);
	};

	return (
		<main className={classes.main}>
			<div className={classes.header}>
				<button className={classes.return_button} onClick={goBack}>
					<ArrowBackIcon fontSize="large" /> <span>Categories</span>
				</button>
				<h1>{categoryId}</h1>
			</div>
			<ProductsList category={categoryId.toString()} products={props.products} />
		</main>
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
			},
			{
				params: {
					categoryId: "groceries"
				}
			}
		]
	};
};

export const getStaticProps: GetStaticProps = async (context) => {
	const MONGODB_URI = process.env.MONGODB_URI!;

	const client = await MongoClient.connect(MONGODB_URI);

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
