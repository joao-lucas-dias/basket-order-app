import { BasketCategory } from "@/models/basket";
import { toggleCategoryVisibility } from "@/store/basketSlice";
import { RootState } from "@/store/store";
import { useDispatch, useSelector } from "react-redux";
import BasketItem from "../BasketItem/BasketItem";

import classes from "./BasketCategory.module.css";

const BasketCategory: React.FC<{ category: BasketCategory }> = (props) => {
	const dispatch = useDispatch();

	const toggleCategory = () => {
		dispatch(toggleCategoryVisibility(props.category.name));
	};

	return (
		<li className={classes.wrapper}>
			<button onClick={toggleCategory} className={classes.header}>
				<span
					className={classes.label}
				>{`${props.category.name} (${props.category.items.length})`}</span>
				<span className={classes.toggle}></span>
			</button>
			{props.category.showCategory && (
				<ul className={classes["item-list"]}>
					{props.category.items.map((item) => (
						<BasketItem key={item.name} item={item} />
					))}
				</ul>
			)}
		</li>
	);
};

export default BasketCategory;
