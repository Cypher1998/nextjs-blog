import Head from 'next/head';
import Link from 'next/link';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';
import Date from '../components/date';
import { getRandomDatas } from '../lib/data';

export async function getStaticProps() {
	const allPostsData = getSortedPostsData();
	const allDataComments = getRandomDatas();
	// const data = await fetch('https://jsonplaceholder.typicode.com/users');
	// const result = await data.json();
	return {
		props: {
			allPostsData,
			allDataComments,
			// result,
		},
	};
}

export default function Home({ allPostsData, allDataComments }) {
	return (
		<Layout home>
			<Head>
				<title>{siteTitle}</title>
			</Head>
			<section className={utilStyles.headingMd}>
				<p>
					I'm a junior frontend developer with knowledge of Javascript, React
					and Typescript.
				</p>
				<p>
					(This is a sample website - you’ll be building a site like this on{' '}
					<a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
				</p>
			</section>
			<section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
				<h2 className={utilStyles.headingLg}>Blog</h2>
				<ul className={utilStyles.list}>
					{allPostsData.map(({ id, date, title }) => (
						<li className={utilStyles.listItem} key={id}>
							<Link href={`/posts/${id}`}>
								<a>{title}</a>
							</Link>
							<br />
							<small className={utilStyles.lightText}>
								<Date dateString={date} />
							</small>
						</li>
					))}
				</ul>

				{allDataComments?.map((data) => (
					<p className={utilStyles.listItem} key={data.id}>
						<Link href={`/datas/${data.id}`}>{data.title}</Link>
						<br />
						<small className={utilStyles.lightText}>
							<Date dateString={data.date} />
						</small>
					</p>
				))}
			</section>
		</Layout>
	);
}
