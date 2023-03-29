import SummaryBasket from "@/components/Summary/SummaryBasket/SummaryBasket";
import SummaryCheckout from "@/components/Summary/SummaryCheckout";
import Modal from "@/components/UI/Modal";
import Order from "@/models/order";
import { useState } from "react";
import { useRouter } from "next/router";

import classes from "@/styles/SummaryPage.module.css";
import Button from "@mui/material/Button";
import HomeIcon from '@mui/icons-material/Home';
import { useDispatch } from "react-redux";
import { resetBasket } from "@/store/basketSlice";

const SummaryPage = () => {
	const router = useRouter();
	const dispatch = useDispatch();
	const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);

	const orderSubmitHandler = async (order: Order) => {
		const response = await fetch("/api/orders", {
			method: "POST",
			body: JSON.stringify(order),
			headers: {
				"Content-Type": "application/json"
			}
		});

		const data = await response.json();
		console.log(data);

		handleOpenModal();
	};

	let body: HTMLBodyElement;

	const handleOpenModal = () => {
		body = document.getElementsByTagName("body")[0];
		body.classList.toggle(classes["modal-open"]);
		setModalIsOpen(true);
	};

	const overlayClasses = `${classes["modal-overlay"]} ${
		modalIsOpen && classes["overlay-opening"]
	}`;

	const contentClasses = `${classes["modal-container"]} 
		${modalIsOpen && classes["modal-opening"]}`;

	const goToHomePage = () => {
		router.push("/");
		dispatch(resetBasket());
	};

	return (
		<main className={classes.main}>
			<SummaryBasket />
			<SummaryCheckout onOrderSubmit={orderSubmitHandler} />
			<Modal
				isOpen={modalIsOpen}
				overlayClasses={overlayClasses}
				contentClasses={contentClasses}
			>
				<div className={classes.modal__content}>
					<h1 className={classes.modal__heading}>Thank you for your order!</h1>
					<Button
						type="button"
						onClick={goToHomePage}
						variant="contained"
						size="medium"
						startIcon={<HomeIcon />}
						className={classes.modal__button}
					>
						Return to Home Page
					</Button>
				</div>
			</Modal>
		</main>
	);
};

export default SummaryPage;
