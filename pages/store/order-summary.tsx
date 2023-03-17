import SummaryBasket from "@/components/Summary/SummaryBasket/SummaryBasket";
import SummaryCheckout from "@/components/Summary/SummaryCheckout";

import classes from "@/styles/SummaryPage.module.css";

const SummaryPage = () => {
	return (
		<main className={classes.main}>
			<SummaryBasket />
			<SummaryCheckout />
		</main>
	);
};

export default SummaryPage;
