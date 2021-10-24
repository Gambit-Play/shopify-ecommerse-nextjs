import Link from 'next/link';
import { Container } from '../Container';

import styles from './Hero.module.css';

interface Props {
	headline: string;
	description: string;
}

export const Hero = ({ headline, description }: Props) => {
	return (
		<div className='bg-black'>
			<Container element={'main' as any}>
				<div className={styles.root}>
					<h2 className={styles.headline}>{headline}</h2>
					<div className='flex-1 max-w-4xl'>
						<p className={styles.description}>{description}</p>
						<Link href='/'>
							<a className={styles.link}>Read it here</a>
						</Link>
					</div>
				</div>
			</Container>
		</div>
	);
};
