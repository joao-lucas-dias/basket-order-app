export interface UnitInfo {
	base: string;
	comp: {
		amount: number | string;
		unit: string;
	};
}

export interface Header {
	name: string;
	sellingUnit: string;
	unitInfo: UnitInfo;
}

export interface QuantityInfo {
	amount: {
		min: number;
		step: number;
		max: number;
	};
	unit: string;
}

export default interface Product {
	id: string;
	header: Header;
	description: string;
	price: {
		amount: number;
		unit: string;
	};
	quantityInfo: QuantityInfo;
}
