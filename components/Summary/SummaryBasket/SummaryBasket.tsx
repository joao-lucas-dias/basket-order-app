import { RootState } from "@/store/store";
import { useSelector } from "react-redux";
import SummaryCategory from "./SummaryCategory/SummaryCategory";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useRouter } from "next/router";

import classes from "./SummaryBasket.module.css";

const SummaryBasket = () => {
	const categories = useSelector((state: RootState) => state.basket.categories);
	const router = useRouter();

	const storeButtonHandler = () => {
		router.push("/store");
	};

	return (
		<div style={{ display: "grid", gap: "1em" }}>
			<div className={classes.header}>
				<span className={classes.label}>My Basket</span>
				<button className={classes.button} onClick={storeButtonHandler}>
					<ArrowBackIcon /> Keep Shopping
				</button>
			</div>
			<ul className={classes["basket-container"]}>
				{categories.map((category) => (
					<SummaryCategory key={category.name} category={category} />
				))}
			</ul>
		</div>
	);
};

export default SummaryBasket;
