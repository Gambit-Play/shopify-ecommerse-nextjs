import Image from 'next/image';

import { Product } from '@common/types/products';

import styles from '../ProductCard.module.css';

interface Props {
	product: Product;
}

const imagePlaceholder = '/product-image-placeholder.svg';

export const Simple = ({ product }: Props) => {
	return (
		<>
			<div className={styles.productBg} />
			<div className={styles.productTag}>
				<h3 className={styles.productTitle}>
					<span>{product.name}</span>
				</h3>
				<span className={styles.productPrice}>
					{product.price.value} {product.price.currencyCode}
				</span>
			</div>
			{product.images && (
				<Image
					className={styles.productImage}
					alt={product.name ?? 'Product image'}
					src={product.images[0].url ?? imagePlaceholder}
					height={540}
					width={540}
					quality='85'
					layout='responsive'
				/>
			)}
		</>
	);
};
