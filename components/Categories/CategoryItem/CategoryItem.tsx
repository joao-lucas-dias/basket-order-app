import Category from "@/models/category";
import { toggleCartVisibility } from "@/store/basketSlice";
import { RootState } from "@/store/store";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";

import classes from "./CategoryItem.module.css";

const CategoryItem: React.FC<{ category: Category }> = (props) => {
	const router = useRouter();
	const showBasket = useSelector((state: RootState) => state.basket.showBasket);
	const dispatch = useDispatch();

	const goToCategory = () => {
		router.push(`/store/${props.category.name.trim().toLowerCase()}`);
		showBasket && setTimeout(() => {
			dispatch(toggleCartVisibility());
		}, 500);
	};

	return (
		<li className={classes.wrapper}>
			<button onClick={goToCategory} className={`${classes.card} ${classes.button}`}>
			<Image
				src={`/images/categories/${props.category.name.trim().toLowerCase()}.jpg`}
				alt={props.category.image.alt}
				className={classes.image}
				width={2000}
				height={2000}
				quality={100}
				priority
			/>
				<p className={classes.label}>{props.category.name}</p>
			</button>
		</li>
	);
};

export default CategoryItem;
