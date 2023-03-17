import { RootState } from "@/store/store";
import { useSelector } from "react-redux";
import SummaryCategory from "./SummaryCategory/SummaryCategory";

import classes from "./SummaryBasket.module.css";

const SummaryBasket = () => {
	const categories = useSelector((state: RootState) => state.basket.categories);

	return (
		<div style={{display: "grid", gap: "1em"}}>
			<span className={classes.header}>My Basket</span>
			<ul className={classes["basket-container"]}>
				{categories.map((category) => (
					<SummaryCategory key={category.name} category={category} />
				))}
			</ul>
		</div>
	);
};

export default SummaryBasket;
