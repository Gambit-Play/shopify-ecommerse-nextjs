import {
	ComponentType,
	FunctionComponent,
	HTMLAttributes,
	ReactNode,
} from 'react';

import styles from './Container.module.css';

interface Props {
	children: ReactNode[] | ReactNode;
	element?: ComponentType<HTMLAttributes<HTMLElement>>;
}

export const Container = ({
	children,
	element: Component = 'div' as any,
}: Props) => {
	return <Component className={styles.root}>{children}</Component>;
};
