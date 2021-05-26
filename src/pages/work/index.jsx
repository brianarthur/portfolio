import ExperienceTimeline from '../../components/experienceTimeline';
import Layout from '../../components/Layout';
import { getContentData } from '../../lib/content'

export default function Home({ work }) {
	return (
		<Layout page="work">
            <h1>Work experience</h1>
            Content coming soon ...

            {/* <ExperienceTimeline work={work} /> */}
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