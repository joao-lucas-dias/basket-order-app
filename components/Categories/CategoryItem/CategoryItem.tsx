import { toggleCartVisibility } from "@/store/basketSlice";
import { RootState } from "@/store/store";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";

import classes from "./CategoryItem.module.css";

const CategoryItem: React.FC<{ categoryName: string }> = (props) => {
	const router = useRouter();
	const showBasket = useSelector((state: RootState) => state.basket.showBasket);
	const dispatch = useDispatch();

	const goToCategory = () => {
		router.push(`/store/${props.categoryName.trim().toLowerCase()}`);
		showBasket && setTimeout(() => {
			dispatch(toggleCartVisibility());
		}, 500);
	};

	return (
		<li className={classes.wrapper}>
			<button onClick={goToCategory} className={`${classes.card} ${classes.button}`}>
				<span className={classes.image}></span>
				<p className={classes.label}>{props.categoryName}</p>
			</button>
		</li>
	);
};

export default CategoryItem;
