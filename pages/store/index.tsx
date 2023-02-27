import Basket from "@/components/Basket/Basket";
import CategoriesList from "@/components/Categories/CategoriesList/CategoriesList";
import Category from "@/models/category";
import { mongoDBConnectionString } from "@/secrets";
import { RootState } from "@/store/store";
import { MongoClient } from "mongodb";
import { GetStaticProps } from "next";
import { useSelector } from "react-redux";

const CategoriesPage: React.FC<{ categories: Category[] }> = (props) => {
	const showBasket = useSelector((state: RootState) => state.basket.showBasket);

	return (
		<>
			{showBasket && <Basket />}
			<CategoriesList categories={props.categories} />
		</>
	);
};

export const getStaticProps: GetStaticProps = async () => {
	const client = await MongoClient.connect(mongoDBConnectionString);

	const db = client.db();

	const dataCollection = db.collection("data");

	const data = await dataCollection.find({}, { projection: { name: 1 } }).toArray();

	const categories: Category[] = data.map((element) => {
		return {
			id: element._id.toString(),
			name: element.name
		};
	});

	client.close();

	return {
		props: {
			categories: categories
		}
	};
};

export default CategoriesPage;
