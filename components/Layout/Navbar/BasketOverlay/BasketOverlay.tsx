import Basket from "@/components/Basket/Basket";
import Modal from "@/components/UI/Modal";
import { RootState } from "@/store/store";
import { useState } from "react";
import { useSelector } from "react-redux";
import BasketButton from "./BasketButton/BasketButton";

import classes from "./BasketOverlay.module.css";

const BasketOverlay = () => {
	const basket = useSelector((state: RootState) => state.basket);
	const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);

	const handleOpenModal = () => {
		setModalIsOpen(true);
	};

	const handleCloseModal = () => {
		const overlay = document.getElementById("modal-overlay");
		overlay?.classList.replace(classes["overlay-opening"], classes["overlay-closing"]);

		const content = document.getElementById("modal-content");
		content?.classList.replace(classes["modal-opening"], classes["modal-closing"]);

		setTimeout(() => {
			setModalIsOpen(false);
		}, 250);
	};

	const getNumberOfBasketItems = () => {
		let counter: number = 0;

		for (var category of basket.categories) {
			counter += category.items.length;
		}

		return counter;
	};

	const overlayClasses = `${classes["modal-overlay"]} ${
		modalIsOpen && classes["overlay-opening"]
	}`;

	const contentClasses = `${classes["modal-content"]} 
		${modalIsOpen && classes["modal-opening"]} 
		${getNumberOfBasketItems() === 0 && classes["content-empty"]}
	`;

	return (
		<>
			<BasketButton
				numOfItems={getNumberOfBasketItems()}
				onOpenModalHandler={handleOpenModal}
			/>
			<Modal
				isOpen={modalIsOpen}
				onClose={handleCloseModal}
				overlayClasses={overlayClasses}
				contentClasses={contentClasses}
			>
				<Basket
					numberOfItems={getNumberOfBasketItems()}
					closeModalHandler={handleCloseModal}
				/>
			</Modal>
		</>
	);
};

export default BasketOverlay;
