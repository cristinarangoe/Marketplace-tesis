type VariantsFields = {
	name: string;
	description: string;
	hasVariants: string;
	variantsFields: {
		type: string;
		options: string;
	}[];
	image?: FileList;
	precio?: number;
};

interface Products {
	name: string;
	description: string;
	characteristics: {
		type: string;
		value: string;
	}[];
	image?: FileList;
	price: number;
}
export function generateVariants(variantsFields: VariantsFields) {
	const variants = variantsFields.variantsFields.map((v) => ({
		type: v.type,
		options: parseOptions(v.options),
	}));
}

function parseOptions(options: string): string[] {
	return options.trim().split(',');
}
