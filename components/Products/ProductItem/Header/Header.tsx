import Product from "@/models/product";
import classes from "./Header.module.css";

const Header: React.FC<{ product: Product }> = (props) => {
  const header = props.product.header;
  const unitInfo = header.unitInfo;

	const parseUnit = (unit: string) => {
		const split = unit.split("-");

		return split[1] ?? split[0];
	};

	return (
		<div className={classes.header}>
			<span>
				<span className={classes.name}>{header.name}</span>
				<span className={classes["unit-info"]}>{` (${parseUnit(header.sellingUnit)})`}</span>
			</span>
			{Object.values(unitInfo)[0] !== "" && (
				<span className={classes.info}>
          {`1 ${unitInfo.base} ≈ ${unitInfo.comp.amount} ${unitInfo.comp.unit}`}
        </span>
			)}
		</div>
	);
};

export default Header;
