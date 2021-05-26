import Layout from '../../components/Layout';
import { getData, getPaths } from '../../lib/content';
import Post from '../../components/post';

const ProjectPost = ({ data }) => {
    return (
        <Layout page='projects' id={data.id}>
            <Post data={data} />
        </Layout>
    );
}


export async function getStaticPaths() {
	const paths = getPaths('projects');
	return {
		paths,
		fallback: false
	};
}

export async function getStaticProps({ params }) {
	const data = await getData('projects', params.id)

	return {
		props: {
			data
		}
	};
}

export default ProjectPost;