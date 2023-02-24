import { QuantityInfo } from "@/models/product";
import { updateQuantity } from "@/store/basketSlice";
import { useDispatch } from "react-redux";

const ItemQuantitySelector: React.FC<{
	id: string;
	quantity: number;
	quantityInfo: QuantityInfo;
}> = (props) => {
	const dispatch = useDispatch();

	const quantityUpdateHandler = (type: string) => {
		dispatch(
			updateQuantity({
				id: props.id,
				type: type,
				quantityInfo: props.quantityInfo
			})
		);
	};

	return (
		<>
			<span>{props.quantity}</span>
			<button onClick={() => quantityUpdateHandler("INC")}>+</button>
			<button onClick={() => quantityUpdateHandler("DEC")}>-</button>
		</>
	);
};

export default ItemQuantitySelector;
