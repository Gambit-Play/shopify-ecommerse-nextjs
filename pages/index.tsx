import { InferGetStaticPropsType } from 'next';

import { getConfig } from '@framework/api/config';
import { getAllProducts } from '@framework/product/get-all-products';

import { Layout } from '@components/common';
import { ProductCard } from '@components/product';
import { Grid, Hero, Marquee } from '@components/ui';

export async function getStaticProps() {
	const config = getConfig();
	const products = await getAllProducts(config);

	return {
		props: {
			products,
		},
		revalidate: 4 * 60 * 60,
	};
}

export default function Home({
	products,
}: InferGetStaticPropsType<typeof getStaticProps>) {
	// TODO: Remove this later
	console.log('%c❗️❗️❗️ products: ', 'color: #52d4ff;', products);

	return (
		<Layout>
			<Grid layout='A'>
				{products.slice(0, 3).map((product, index) => (
					<ProductCard key={index} product={product} />
				))}
			</Grid>
			<Hero
				headline='This is a headline'
				description='Lorem ipsum dolor sit amet, consectetur, sed do eiusmod tempor inc tempor inc'
			/>
			<Marquee>
				{products.slice(0, 3).map((product, index) => (
					<ProductCard variant='slim' key={index} product={product} />
				))}
			</Marquee>
			<Grid layout='B'>
				{products.slice(0, 3).map((product, index) => (
					<ProductCard key={index} product={product} />
				))}
			</Grid>
			<Marquee variant='secondary'>
				{products.slice(0, 3).map((product, index) => (
					<ProductCard variant='slim' key={index} product={product} />
				))}
			</Marquee>
		</Layout>
	);
}
