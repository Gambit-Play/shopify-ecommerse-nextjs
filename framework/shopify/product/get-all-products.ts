import { ProductConnection } from '../schema';
import { getAllProductsQuery, normalizeProduct } from '../utils';
import { Product } from '@common/types/products';
import { ApiConfig } from '@common/types/api';

type ReturnType = { products: ProductConnection };

export const getAllProducts = async (config: ApiConfig): Promise<Product[]> => {
	const url = config.apiUrl;
	const fetchApi = config.fetch;

	const { data } = await fetchApi<ReturnType>({
		url,
		query: getAllProductsQuery,
	});

	const products =
		data.products.edges.map(({ node: product }) =>
			normalizeProduct(product)
		) ?? [];

	return products;
};
