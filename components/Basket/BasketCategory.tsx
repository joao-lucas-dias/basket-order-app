import { BasketCategory } from "@/models/basket";
import { toggleCategoryVisibility } from "@/store/basketSlice";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useDispatch } from "react-redux";
import BasketItem from "./BasketItem";

import classes from "@/styles/components/Basket/BasketCategory.module.css";

const BasketCategory: React.FC<{ category: BasketCategory }> = (props) => {
	const dispatch = useDispatch();

	const toggleCategory = () => {
		dispatch(toggleCategoryVisibility(props.category.name));
	};

	return (
		<li className={classes.wrapper}>
			<button onClick={toggleCategory} className={classes.header}>
				<span
					className={classes.header__label}
				>{`${props.category.name} (${props.category.items.length})`}</span>
				{props.category.showCategory ? <ExpandLessIcon /> : <ExpandMoreIcon />}
			</button>
			{props.category.showCategory && (
				<ul className={classes.item__list}>
					{props.category.items.map((item) => (
						<BasketItem key={item.name} item={item} />
					))}
				</ul>
			)}
		</li>
	);
};

export default BasketCategory;
