import SummaryBasket from "@/components/Summary/SummaryBasket/SummaryBasket";
import SummaryCheckout from "@/components/Summary/SummaryCheckout";
import Order from "@/models/order";

import classes from "@/styles/SummaryPage.module.css";

const SummaryPage = () => {
	const orderSubmitHandler = async (order: Order) => {
		const response = await fetch('/api/orders', {
			method: 'POST',
			body: JSON.stringify(order),
			headers: {
				'Content-Type': 'application/json'
			}
		});

		const data = await response.json();

		console.log(data);
	};

	return (
		<main className={classes.main}>
			<SummaryBasket />
			<SummaryCheckout onOrderSubmit={orderSubmitHandler} />
		</main>
	);
};

export default SummaryPage;
