import ExperienceTimeline from '../../components/ExperienceTimeline';
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