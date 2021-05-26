import Head from 'next/head'
import Image from 'next/image'
import styles from '../../styles/home.module.css'
import ExperienceTimeline from '../../components/experienceTimeline';

import Layout from '../../components/Layout';

import { getContentData } from '../../lib/content'

export default function Home({ work }) {
	return (
		<Layout page="work">
            <h1>Work experience</h1>

            <ExperienceTimeline work={work} />
		</Layout>
	);
}

export async function getStaticProps() {
    const work = getContentData('work')
    return {
        props: {
            work
        }
    }
}