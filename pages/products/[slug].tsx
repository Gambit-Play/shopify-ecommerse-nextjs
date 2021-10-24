import {
	GetStaticPaths,
	GetStaticPropsContext,
	InferGetStaticPropsType,
} from 'next';
import { Layout } from '@components/common';
import { getConfig } from '@framework/api/config';
import { getAllProductsPaths } from '@framework/product/get-all-products-paths';

// fetch all of the products slugs
export const getStaticPaths: GetStaticPaths = async () => {
	const config = getConfig();
	const { products } = await getAllProductsPaths(config);

	return {
		paths: products.map(path => ({ params: { slug: path.slug } })),
		fallback: false,
	};
};

// provide product specific data to the page
export const getStaticProps = async ({
	params,
}: GetStaticPropsContext<{ slug: string }>) => {
	return {
		props: {
			product: {
				slug: params?.slug,
			},
		},
	};
};

export default function ProductSlug({
	product,
}: InferGetStaticPropsType<typeof getStaticProps>) {
	return <Layout>{product.slug}</Layout>;
}
