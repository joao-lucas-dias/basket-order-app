import Category from "@/models/category";
import Image from "next/image";
import Link from "next/link";

import classes from "@/styles/components/Categories/CategoryItem.module.css";

const CategoryItem: React.FC<{ category: Category }> = (props) => {
	const category = props.category.name.trim().toLowerCase();

	return (
		<li>
			<Link className={classes.wrapper} href={`/store/${category}`}>
				<Image
					src={`/images/categories/${category}.jpg`}
					alt={props.category.image.alt}
					className={classes.image}
					width={2000}
					height={2000}
					quality={100}
					priority
				/>
				<span className={classes.label}>{props.category.name}</span>
			</Link>
		</li>
	);
};

export default CategoryItem;
