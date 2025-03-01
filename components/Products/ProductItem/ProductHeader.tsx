import Product from "@/models/product";

import classes from "@/styles/components/Products/ProductHeader.module.css";

const ProductHeader: React.FC<{ product: Product }> = (props) => {
	const header = props.product.header;
	const unitInfo = header.unitInfo;

	const parseUnit = (unit: string) => {
		const split = unit.split("-");

		return split[1] ?? split[0];
	};

	return (
		<div className={classes.wrapper}>
			<p className={classes.title}>
				{header.name}
				<span>{` (${parseUnit(header.sellingUnit)})`}</span>
			</p>
			{Object.values(unitInfo)[0] !== "" && (
				<p className={classes.info}>
					{`1 ${unitInfo.base} ≈ ${unitInfo.comp.amount} ${unitInfo.comp.unit}`}
				</p>
			)}
		</div>
	);
};

export default ProductHeader;
