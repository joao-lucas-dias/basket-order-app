import { MongoClient } from "mongodb";
import { GetStaticProps } from "next";
import CategoriesList from "@/components/Categories/CategoriesList/CategoriesList";
import Category from "@/models/category";

import classes from "@/styles/StoreHomePage.module.css";

const StoreHomePage: React.FC<{ categories: Category[] }> = (props) => {
	return (
		<main className={classes.main}>
			<CategoriesList categories={props.categories} />
		</main>
	);
};

export const getStaticProps: GetStaticProps = async () => {
	const MONGODB_URI = process.env.MONGODB_URI!;

	const client = await MongoClient.connect(MONGODB_URI);

	const db = client.db();

	const dataCollection = db.collection("categories");

	const data = await dataCollection
		.find({}, { projection: { name: 1, image: 1 } })
		.toArray();

	const categories: Category[] = data.map((element) => {
		return {
			id: element._id.toString(),
			name: element.name,
			image: element.image
		};
	});

	client.close();

	return {
		props: {
			categories: categories
		}
	};
};

export default StoreHomePage;
