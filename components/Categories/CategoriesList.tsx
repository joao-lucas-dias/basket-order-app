import Category from "@/models/category";
import CategoryItem from "./CategoryItem";

const CATEGORIES: Category[] = [
	{
		id: "category1",
		name: "Aromatic Herbs",
		products: []
	},
	{
		id: "category2",
		name: "Vegetables",
		products: []
	},
	{
		id: "category3",
		name: "Fruits",
		products: []
	},
	{
		id: "category4",
		name: "Other",
		products: []
	}
];

const CategoriesList = () => {
	return (
		<>
			<h1>Categories Page!</h1>
			<ul>
				{CATEGORIES.map((category) => {
					return <CategoryItem key={category.id} categoryName={category.name} />;
				})}
			</ul>
		</>
	);
};

export default CategoriesList;
