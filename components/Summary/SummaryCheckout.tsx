import { RootState } from "@/store/store";
import { useSelector } from "react-redux";

const SummaryCheckout = () => {
	const cost = useSelector((state: RootState) => state.basket.cost);

	return (
		<div>
			<p>Subtotal {cost.subtotal}</p>
			<p>Delivery</p>
			<p>Total: {cost.subtotal + cost.delivery}</p>
		</div>
	);
};

export default SummaryCheckout;
