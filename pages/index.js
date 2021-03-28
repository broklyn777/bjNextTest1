import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import Date from '../components/date'
import { getSortedPostsData } from '../lib/posts'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}


export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>BJ Web Blog</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hej, jag heter Björn. Jag är en Fullstack Developer och utvecklare av mjukvara. Du kan kontakta mig på <a href="https://twitter.com/bjrnjansson">Twitter</a>.</p>
        <p>
          (Det här är en exempelwebbplats - du kommer att bygga en webbplats så här i...{' '}
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
      </section>
    </Layout>
  )
}
 

