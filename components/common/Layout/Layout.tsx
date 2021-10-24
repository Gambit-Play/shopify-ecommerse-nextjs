import { FunctionComponent } from 'react';

import { Footer, Navbar } from '@components/common';
import { Sidebar } from '@components/ui';
import { CartSidebar } from '@components/cart';

import { useUI } from '@components/ui/context';

import styles from './Layout.module.css';

export const Layout: FunctionComponent = ({ children }) => {
	const { isSidebarOpen, closeSidebar } = useUI();
	console.log('%c❗️❗️❗️ useUI(): ', 'color: greenyellow;', useUI());

	return (
		<div className={styles.root}>
			<Navbar />
			<Sidebar onClose={closeSidebar} isOpen={isSidebarOpen}>
				<CartSidebar />
			</Sidebar>
			<main className='fit'>{children}</main>
			<Footer />
		</div>
	);
};
