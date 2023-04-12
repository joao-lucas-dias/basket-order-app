import { BasketCategory } from "@/models/basket";
import SummaryItem from "../SummaryItem/SummaryItem";

import classes from "./SummaryCategory.module.css";

const SummaryCategory: React.FC<{ category: BasketCategory }> = (props) => {
	return (
		<li className={classes.container}>
			<span className={classes.label}>{props.category.name}</span>
			<ul className={classes.item_list}>
				{props.category.items.map((item) => (
					<SummaryItem key={item.id} item={item} />
				))}
			</ul>
		</li>
	);
};

export default SummaryCategory;
