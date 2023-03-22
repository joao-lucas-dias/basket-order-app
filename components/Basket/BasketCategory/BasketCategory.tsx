import { BasketCategory } from "@/models/basket";
import { toggleCategoryVisibility } from "@/store/basketSlice";
import { useDispatch } from "react-redux";
import BasketItem from "../BasketItem/BasketItem";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

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
				{props.category.showCategory ? <ExpandLessIcon /> : <ExpandMoreIcon />}
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
