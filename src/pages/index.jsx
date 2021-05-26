import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/home.module.css'
import Typewriter from 'typewriter-effect';
import Layout from '../components/Layout';

export default function Home() {
	return (
		<Layout page="home">
			<div className={styles.hero}>
				<img src="/background.jpg" alt="Background Image" />
				<div className={styles.heroText}>
					<h1>
						<Typewriter 
							onInit={(typewriter) => {
								typewriter
									.typeString('Hi. ')
									.pauseFor(1000)
									.typeString('I\'m Brian Arthur.')
									.pauseFor(1000)
									.start();
							}}
						/>
					</h1>
				</div>
			</div>
			
		</Layout>
	);
}
