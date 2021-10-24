import Link from 'next/link';

import { Bag as Cart, Heart } from '@components/icons';

import { useUI } from '@components/ui/context';

import styles from './Usernav.module.css';

export const Usernav = () => {
	const { openSidebar } = useUI();

	return (
		<nav>
			<ul className={styles.list}>
				<li className={styles.item}>
					<Cart onClick={openSidebar} />
				</li>
				<li>
					<Link href='/wishlist'>
						<a className={styles.item}>
							<Heart />
						</a>
					</Link>
				</li>
			</ul>
		</nav>
	);
};
