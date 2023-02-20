import Link from "next/link";

import classes from "./CategoryItem.module.css";

const CategoryItem: React.FC<{ categoryName: string }> = (props) => {
	return (
		<li className={classes.wrapper}>
			<Link
				href={`/store/${props.categoryName.trim().toLowerCase()}`}
				className={`${classes.card} ${classes.link}`}
			>
				<span className={classes.image}></span>
				<p className={classes.label}>{props.categoryName}</p>
			</Link>
		</li>
	);
};

export default CategoryItem;
