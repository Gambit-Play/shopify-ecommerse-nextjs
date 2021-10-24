import Link from 'next/link';

import { Product } from '@common/types/products';
import { Simple, Slim } from './variants';

import styles from './ProductCard.module.css';

interface Props {
	product: Product;
	variant?: 'simple' | 'slim';
}

export const ProductCard = ({ product, variant = 'simple' }: Props) => {
	return (
		<Link href={`/products/${product.slug ?? 'not-found'}`}>
			<a className={styles.root}>
				{variant === 'slim' ? (
					<Slim product={product} />
				) : (
					<Simple product={product} />
				)}
			</a>
		</Link>
	);
};
