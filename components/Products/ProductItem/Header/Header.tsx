import Product from "@/models/product";
import classes from "./Header.module.css";

const Header: React.FC<{ product: Product }> = (props) => {
  const title = props.product.title;
  const extraInfo = title.extraInfo;

	return (
		<div className={classes.header}>
			<span className={classes.name}>{`${title.name} (${title.sellingUnit})`}</span>
			{Object.keys(title.extraInfo!).length > 0 && (
				<span className={classes.info}>
          {`1 ${extraInfo?.baseUnit} = ${extraInfo?.correspUnit.amount} ${extraInfo?.correspUnit.unit}`}
        </span>
			)}
		</div>
	);
};

export default Header;
