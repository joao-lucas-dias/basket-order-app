import Category from "@/models/category";
import { useRouter } from "next/router";
import Image from "next/image";

import classes from "./CategoryItem.module.css";

const CategoryItem: React.FC<{ category: Category }> = (props) => {
	const router = useRouter();

	const goToCategory = () => {
		router.push(`/store/${props.category.name.trim().toLowerCase()}`);
	};

	return (
		<li>
			<button onClick={goToCategory} className={classes.category}>
				<Image
					src={`/images/categories/${props.category.name.trim().toLowerCase()}.jpg`}
					alt={props.category.image.alt}
					className={classes.category__image}
					width={2000}
					height={2000}
					quality={100}
					priority
				/>
				<span className={classes.category__label}>{props.category.name}</span>
			</button>
		</li>
	);
};

export default CategoryItem;
