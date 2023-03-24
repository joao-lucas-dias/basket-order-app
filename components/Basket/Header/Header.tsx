import CloseIcon from '@mui/icons-material/Close';

import classes from "./Header.module.css";

const Header: React.FC<{ numberOfItems: number; onCloseModal: () => void }> = (props) => {
	return (
		<div className={classes.container}>
			<span className={classes.label}>{`My Basket (${props.numberOfItems})`}</span>
			<button className={classes.button} onClick={props.onCloseModal}>
				<span className={classes.button__content}>close <CloseIcon /></span>
			</button>
		</div>
	);
};

export default Header;
