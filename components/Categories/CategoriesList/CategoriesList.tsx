import Category from "@/models/category";
import CategoryItem from "../CategoryItem/CategoryItem";

import classes from "./CategoriesList.module.css";

const CategoriesList: React.FC<{ categories: Category[] }> = (props) => {
	return (
		<ul className={classes.grid}>
			{props.categories.map((category) => {
				return <CategoryItem key={category.id} category={category} />;
			})}
		</ul>
	);
};

export default CategoriesList;
