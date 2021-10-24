import Image from 'next/image';

import { Product } from '@common/types/products';

import styles from '../ProductCard.module.css';

interface Props {
	product: Product;
}

const imagePlaceholder = '/product-image-placeholder.svg';

export const Slim = ({ product }: Props) => {
	return (
		<>
			<div className='inset-0 flex items-center justify-center absolute z-20'>
				<span className='bg-black text-white p-3 font-bold text-xl'>
					{product.name}
				</span>
			</div>
			{product.images && (
				<Image
					className={styles.productImage}
					alt={product.name ?? 'Product image'}
					src={product.images[0].url ?? imagePlaceholder}
					height={320}
					width={320}
					quality='85'
					layout='fixed'
				/>
			)}
		</>
	);
};
