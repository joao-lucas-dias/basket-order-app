import { RootState } from "@/store/store";
import { useSelector } from "react-redux";

const SummaryBasket = () => {
	const categories = useSelector((state: RootState) => state.basket.categories);

	return (
		<ul>
			{categories.map((category) => (
				<li>
					<span>{category.name}</span>
					<ul>
						{category.items.map((item) => (
							<li>
								<span>{item.name}</span>
							</li>
						))}
					</ul>
				</li>
			))}
		</ul>
	);
};

export default SummaryBasket;
