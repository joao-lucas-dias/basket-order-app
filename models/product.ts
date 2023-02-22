export interface QuantityInfo {
	amount: {
		min: number;
		step: number;
		max?: number;
	};
	unit: string; // "unit", "bunch", "bag", "weight-kg"
}

export default interface Product {
	id: string;
	sellingType: string; // "unit", "group-bunch", "group-bag", "weight-unit", "weight-weight", "volume-liter"
	title: {
		name: string;
		description?: string;
		sellingUnit: string; // "unit", "bunch", "bag", "weight-kg"
		extraInfo?: {
			baseUnit: string; // "unit", "molho", "bag"
			correspUnit: {
				amount: number;
				unit: string; // "gr", "kg"
			};
		};
	};
	price: {
		amount: number;
		currency: string;
		unit: string; // "unit", "bunch", "bag", "weight-kg"
	};
	quantityInfo: QuantityInfo;
}
