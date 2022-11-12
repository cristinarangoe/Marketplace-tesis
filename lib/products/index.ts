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

export interface ProductsGenerated {
	name: string;
	description: string;
	characteristics: {
		type: string;
		value: string;
	}[];
	image?: FileList;
	price?: number;
}

export function generateVariants(variantsFields: VariantsFields) {
	const options = variantsFields.variantsFields.map((v) => ({
		type: v.type,
		options: parseOptions(v.options),
	}));
	const characteristics = optionsCombination(options);

	const variants: ProductsGenerated[] = [];

	characteristics.forEach((val, key) => {
		variants.push({
			name: `${variantsFields.name} ${key}`,
			characteristics: val.characteristics,
			description: variantsFields.description,
		});
	});

	return variants;
}

export function optionsCombination(
	v: {
		type: string;
		options: string[];
	}[]
) {
	const variantsCharacteristics = new Map<
		string,
		{ characteristics: { type: string; value: string }[] }
	>();
	v[0].options.forEach((option1) => {
		v[1].options.forEach((option2) => {
			variantsCharacteristics.set(`${option1}/${option2}`, {
				characteristics: [
					{ type: v[0].type, value: option1 },
					{ type: v[1].type, value: option2 },
				],
			});
		});
	});

	return variantsCharacteristics;
}

export function parseOptions(options: string): string[] {
	return options.replaceAll(' ', '').split(',');
}

