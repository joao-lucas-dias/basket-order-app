import classes from "./Header.module.css";

const Header: React.FC<{ numberOfItems: number; onCloseModal: () => void }> = (props) => {
	return (
		<div className={classes.container}>
			<span className={classes.label}>{`My Basket (${props.numberOfItems})`}</span>
			<button className={classes.button} onClick={props.onCloseModal}>
				X close
			</button>
		</div>
	);
};

export default Header;
