import CloseIcon from "@mui/icons-material/Close";

import classes from "@/styles/components/Basket/BasketHeader.module.css";

const BasketHeader: React.FC<{ numberOfItems: number; onCloseModal: () => void }> = (
	props
) => {
	return (
		<div className={classes.container}>
			<span className={classes.label}>{`My Basket (${props.numberOfItems})`}</span>
			<button className={classes.close__button} onClick={props.onCloseModal}>
				<span className={classes.close__button__content}>
					close <CloseIcon />
				</span>
			</button>
		</div>
	);
};

export default BasketHeader;
