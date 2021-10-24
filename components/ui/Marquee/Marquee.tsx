import { ReactNode } from 'react';

import styles from './Marquee.module.css';

interface Props {
	children: ReactNode[] | ReactNode;
	variant?: 'primary' | 'secondary';
}

const cssStyle = (layout: string | undefined): string => {
	if (layout === 'secondary') return styles.secondary;
	return '';
};

export const Marquee = ({ children, variant = 'primary' }: Props) => {
	return (
		<div className={`${styles.root} ${cssStyle(variant)}`}>
			<div className={styles.container}>{children}</div>
		</div>
	);
};
