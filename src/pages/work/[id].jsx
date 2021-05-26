import Layout from '../../components/Layout';
import { getData, getPaths } from '../../lib/content';
import Post from '../../components/post';

const WorkPost = ({ data }) => {
    return (
        <Layout page='work' id={data.id}>
            <Post data={data} />
        </Layout>
    );
}


export async function getStaticPaths() {
	const paths = getPaths('work');
	return {
		paths,
		fallback: false
	};
}

export async function getStaticProps({ params }) {
	const data = await getData('work', params.id)

	return {
		props: {
			data
		}
	};
}

export default WorkPost;