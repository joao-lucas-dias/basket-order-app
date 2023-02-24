import Item from "@/models/basketItem";
import { removeFromCart } from "@/store/basketSlice";
import { useDispatch } from "react-redux";
import ItemQuantitySelector from "./ItemQuantitySelector/ItemQuantitySelector";

const BasketItem: React.FC<{ item: Item }> = (props) => {
	const dispatch = useDispatch();

	const removeItemHandler = () => {
		dispatch(removeFromCart(props.item.name));
	};

	return (
		<li>
			<h1>{props.item.name}</h1>
			<ItemQuantitySelector
				id={props.item.name}
				quantity={props.item.quantity}
				quantityInfo={props.item.quantityInfo}
			/>
			<button onClick={removeItemHandler}>Remove</button>
		</li>
	);
};

export default BasketItem;
