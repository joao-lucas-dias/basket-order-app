import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import { RootState } from "@/store/store";
import SummaryCategory from "./SummaryCategory/SummaryCategory";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

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
				<span className={classes.header__label}>My Basket</span>
				<button className={classes.header__return_button} onClick={storeButtonHandler}>
					<ArrowBackIcon /> Back to Store
				</button>
			</div>
			<ul className={classes.content}>
				{categories.map((category) => (
					<SummaryCategory key={category.name} category={category} />
				))}
			</ul>
		</div>
	);
};

export default SummaryBasket;
