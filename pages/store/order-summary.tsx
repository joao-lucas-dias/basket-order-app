import SummaryBasket from "@/components/Summary/SummaryBasket";
import SummaryCheckout from "@/components/Summary/SummaryCheckout";
import Modal from "@/components/UI/Modal";
import Order from "@/models/order";
import { resetBasket } from "@/store/basketSlice";
import HomeIcon from "@mui/icons-material/Home";
import Button from "@mui/material/Button";
import { useRouter } from "next/router";
import { useState } from "react";
import { useDispatch } from "react-redux";

import classes from "@/styles/pages/SummaryPage.module.css";

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

		handleOpenModal();
	};

	let body: HTMLBodyElement;

	const handleOpenModal = () => {
		body = document.getElementsByTagName("body")[0];
		body.classList.toggle(classes.modal__open);
		setModalIsOpen(true);
	};

	const backgroundClasses = `${classes.modal__background} ${
		modalIsOpen && classes.background__opening
	}`;

	const contentClasses = `${classes.modal__wrapper} 
		${modalIsOpen && classes.modal__opening}`;

	const goToHomePage = () => {
		router.push("/");
		dispatch(resetBasket());
		body = document.getElementsByTagName("body")[0];
		body.classList.toggle(classes.modal__open);
	};

	return (
		<main className={classes.main}>
			<SummaryBasket />
			<SummaryCheckout onOrderSubmit={orderSubmitHandler} />
			<Modal
				isOpen={modalIsOpen}
				backgroundClasses={backgroundClasses}
				contentClasses={contentClasses}
			>
				<div className={classes.modal__content}>
					<h1 className={classes.modal__heading}>Thank you for your order!</h1>
					<p className={classes.normal_text}>
						You will receive information about your order status on the provided e-mail.
					</p>
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
