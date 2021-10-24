import { Product } from '@common/types/products';
import { ImageEdge, MoneyV2, Product as ShopifyProduct } from '../schema';

export const normalizeImages = (edges: ImageEdge[]) => {
	const images = edges.map(({ node: { originalSrc, ...rest } }) => {
		return {
			url: `/images/${originalSrc}`,
			...rest,
		};
	});

	return images;
};

const normalizeProductPrice = ({ amount, currencyCode }: MoneyV2) => {
	return {
		value: +amount,
		currencyCode,
	};
};

export function normalizeProduct(productNode: ShopifyProduct): Product {
	const {
		id,
		title: name,
		handle,
		vendor,
		description,
		images: imageConnection,
		priceRange,
		...rest
	} = productNode;
	const product = {
		id,
		name,
		vendor,
		description,
		path: `/${handle}`,
		slug: handle.replace(/^\/+|\/+$/g, ''),
		images: normalizeImages(imageConnection.edges),
		price: normalizeProductPrice(priceRange.minVariantPrice),
		...rest,
	};

	return product;
}
