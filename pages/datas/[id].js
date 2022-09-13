import Layout from '../../components/layout';
import { getRandomDatas, getRandomDataID } from '../../lib/data';
import Head from 'next/head';
import Date from '../../components/date';

export default function User({ displayData }) {
	return (
		<Layout>
			<Head>
				<title>{displayData.title}</title>
			</Head>
			<h3 style={{ textAlign: 'center' }}>{displayData.title}</h3>
			<div className={utilStyles.lightText}>
				<Date dateString={displayData.date} />
			</div>
			<p>{displayData.text}</p>
		</Layout>
	);
}

export async function getStaticPaths() {
	const paths = getRandomDataID();
	return {
		paths,
		fallback: false,
	};
}

export async function getStaticProps({ params }) {
	const allData = getRandomDatas();
	const displayData = allData.find((data) => data.id === params.id);

	return {
		props: {
			displayData,
		},
	};
}
