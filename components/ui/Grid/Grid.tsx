import { ReactNode } from 'react';

import styles from './Grid.module.css';

interface Props {
	children?: ReactNode[] | ReactNode;
	layout?: 'A' | 'B';
}

const cssStyle = (layout: string | undefined): string => {
	if (layout === 'A') return ` ${styles.layoutA}`;
	if (layout === 'B') return ` ${styles.layoutB}`;
	return '';
};

export const Grid = ({ children, layout }: Props) => {
	return (
		<div className={`${styles.root}${cssStyle(layout)}`}>{children}</div>
	);
};
