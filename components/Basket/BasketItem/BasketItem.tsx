import Item from "@/models/basketItem";

const BasketItem: React.FC<{ item: Item }> = (props) => {
	return (
		<li>
			<h1>{props.item.name}</h1>
		</li>
	);
};

export default BasketItem;
