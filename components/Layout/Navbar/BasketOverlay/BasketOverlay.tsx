import Basket from "@/components/Basket/Basket";
import Modal from "@/components/UI/Modal";
import { RootState } from "@/store/store";
import { useState } from "react";
import { useSelector } from "react-redux";
import BasketOverlayButton from "./BasketOverlayButton";

import classes from "@/styles/components/Layout/BasketOverlay.module.css";

const BasketOverlay = () => {
	const basket = useSelector((state: RootState) => state.basket);
	const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);

	let body: HTMLBodyElement;

	const handleOpenModal = () => {
		body = document.getElementsByTagName("body")[0];
		body.classList.toggle(classes.modal__open);
		setModalIsOpen(true);
	};

	const handleCloseModal = () => {
		const overlay = document.getElementById("modal-background");
		overlay?.classList.replace(classes.background__opening, classes.background__closing);

		const content = document.getElementById("modal-content");
		content?.classList.replace(classes.modal__opening, classes.modal__closing);

		body = document.getElementsByTagName("body")[0];
		body.classList.toggle(classes.modal__open);

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

	const backgroundClasses = `${classes.modal__background} ${
		modalIsOpen && classes.background__opening
	}`;

	const contentClasses = `${classes.modal__content} 
		${modalIsOpen && classes.modal__opening} 
		${getNumberOfBasketItems() === 0 && classes.modal__content__empty}
	`;

	return (
		<>
			<BasketOverlayButton
				numOfItems={getNumberOfBasketItems()}
				onOpenModalHandler={handleOpenModal}
			/>
			<Modal
				isOpen={modalIsOpen}
				onClose={handleCloseModal}
				backgroundClasses={backgroundClasses}
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
