import { BasketCategory } from "@/models/basket";
import BasketItem from "../BasketItem/BasketItem";

import classes from "./BasketCategory.module.css";

const BasketCategory: React.FC<{ category: BasketCategory }> = (props) => {
	return (
		<li>
			<span className={classes.label}>{props.category.name}</span>
			<ul className={classes["item-list"]}>
				{props.category.items.map((item) => (
					<BasketItem key={item.name} item={item} />
				))}
			</ul>
		</li>
	);
};

export default BasketCategory;
