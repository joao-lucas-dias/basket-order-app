import classes from "./PriceDisplay.module.css";

const PriceDisplay: React.FC<{ price: any }> = (props) => {
  const getCurrencySymbol = (currency: string) => {
    if (currency === "EUR") {
      return "€";
    }
  };

	return (
		<div className={classes.price}>
			<span className={classes.amount}>{`${props.price.amount} ${getCurrencySymbol(props.price.currency)}`}</span>
			<span className={classes.unit}>{`/ ${props.price.unit}`}</span>
		</div>
	);
};

export default PriceDisplay;
