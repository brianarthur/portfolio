import ProjectList from '../../components/ProjectList';
import Layout from '../../components/Layout';
import { getContentData } from '../../lib/content'

export default function Home({ projects }) {
	return (
		<Layout page="projects">
            <h1>Projects</h1>
            More content coming soon ...

            <ProjectList projects={projects} />
		</Layout>
	);
}

export async function getStaticProps() {
    const projects = getContentData('projects')
    return {
        props: {
            projects
        }
    }
}