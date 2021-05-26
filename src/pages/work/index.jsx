import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/home.module.css'
import List from '../../components/list';

import Layout from '../../components/Layout';

export default function Home() {
	return (
		<Layout page="work">
            <h1>Work experience</h1>

            <List />
		</Layout>
	);
}
