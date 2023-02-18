import Category from "@/models/category";
import CategoryItem from "./CategoryItem";

const CategoriesList: React.FC<{ categories: Category[] }> = (props) => {
	return (
		<>
			<h1>Categories Page!</h1>
			<ul>
				{props.categories.map((category) => {
					return <CategoryItem key={category.id} categoryName={category.name} />;
				})}
			</ul>
		</>
	);
};

export default CategoriesList;
