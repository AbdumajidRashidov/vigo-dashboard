export const typesAdapter = (types = []) => {
	return types.map((item) => ({
		type_name: item.type_name,
		products: [...item.products]
	}));
};
