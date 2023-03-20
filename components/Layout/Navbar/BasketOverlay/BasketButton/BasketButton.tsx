import { useEffect, useState } from "react";

import classes from "./BasketButton.module.css";

const BasketButton: React.FC<{ numOfItems: number, onOpenModalHandler: () => void }> = (props) => {
	const [buttonAnimation, setButtonAnimation] = useState(false);

	const buttonClasses = `${classes.button} ${buttonAnimation ? classes.bump : ""}`;

	useEffect(() => {
		if (props.numOfItems === 0){
			return;
		}

		setButtonAnimation(true);

		const timer = setTimeout(() => {
      setButtonAnimation(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
	}, [props.numOfItems]);

	return (
		<button onClick={props.onOpenModalHandler} className={buttonClasses}>
			My Basket
			<span className={classes.badge}>{props.numOfItems}</span>
		</button>
	);
};

export default BasketButton;
