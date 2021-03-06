import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { gql } from "@apollo/client";
import client from "../apollo-client";

export default function Home(allPosts) {
  console.log(allPosts);
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Next Tests
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information about Next.js features and API.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn about Next.js in an interactive course with quizzes!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}


export async function getStaticProps() {
  const { data } = await client.query({
    query: gql`
      query getDublin {
        entries(site: "tnwDublin", section: "pages", slug: "all-components") {
          id
          title
          slug
          ... on pages_default_Entry {
            id
            pageBlocks {
              __typename
              ... on pageBlocks_blocks_BlockType {
                id
                title
              }
              ... on pageBlocks_challenges_BlockType {
                id
              }
              ... on pageBlocks_faq_BlockType {
                __typename
                id
                hasCta
                ctaLink
                ctaLabel
              }
              ... on pageBlocks_partners_BlockType {
                id
              }
              ... on pageBlocks_rewards_BlockType {
                id
              }
              ... on pageBlocks_sessions_BlockType {
                id
              }
              ... on pageBlocks_video_BlockType {
                __typename
                id
                title
                embedCode
              }
              ... on pageBlocks_tickets_BlockType {
                id
              }
              ... on pageBlocks_textVisual_BlockType {
                id
                title
                textVisualHeading
                textVisualCta {
                  ... on textVisualCta_BlockType {
                    id
                    tvCtaIsBlank
                    tvCtaLink
                    tvCtaText
                  }
                }
                textVisualContent
              }
              ... on pageBlocks_text_BlockType {
                id
                heading
                column1
                column2
              }
              ... on pageBlocks_stats_BlockType {
                __typename
                id
                title
                stats {
                  value
                  label
                  col2
                  col1
                }
              }
              ... on pageBlocks_sponsors_BlockType {
                id
              }
              ... on pageBlocks_speakers_BlockType {
                id
              }
              ... on pageBlocks_signup_BlockType {
                id
                signupHeading
                signupText
                hubspotEmbed
              }
            }
          }
        }
      }
    `,
  });

  return {
    props: {
      allPosts: data.entries
    },
 };
}