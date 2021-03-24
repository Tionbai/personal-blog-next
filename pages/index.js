import Head from "next/head";
// import { server } from "../config/index";
import styles from "../styles/Home/Home.module.scss";
import ArticlePreview from "../components/Articles/ArticlePreview";
import Hero from "../components/Home/Hero";
import Resources from "../components/Home/Resources";
import { articles } from '../data';

const YOUTUBE_PLAYLIST_ITEMS_API =
  "https://www.googleapis.com/youtube/v3/playlistItems";
const YOUTUBE_WORSHIP_PLAYLIST_ID = "PLx7blejRY2MRWp_uOb5TZS9PUzzEN1Yvi";
const YOUTUBE_BIBLE_STUDY_PLAYLIST_ID = "PLx7blejRY2MROZDOJc0Q2E5n4QDyO89Ux";

const getWorshipPlaylistData = async () => {
  const res = await fetch(
    `${YOUTUBE_PLAYLIST_ITEMS_API}?part=snippet&playlistId=${YOUTUBE_WORSHIP_PLAYLIST_ID}&maxResults=3&key=${process.env.YOUTUBE_API_KEY}`
  );
  const data = await res.json();
  return data;
};

const getBibleStudyPlaylistData = async () => {
  const res = await fetch(
    `${YOUTUBE_PLAYLIST_ITEMS_API}?part=snippet&playlistId=${YOUTUBE_BIBLE_STUDY_PLAYLIST_ID}&maxResults=3&key=${process.env.YOUTUBE_API_KEY}`
  );
  const data = await res.json();
  return data;
};

// const getArticles = async () => {
//   const res = await fetch(`${server}/api/articles`);
//   const articles = await res.json();
//   const threeArticles = articles.slice(0, 3);
//   return threeArticles;
// };

export const getStaticProps = async () => {
  const worshipPlaylistData = await getWorshipPlaylistData();
  const bibleStudyPlaylistData = await getBibleStudyPlaylistData();
  // const articles = await getArticles();
  return {
    props: {
      worshipPlaylistData,
      bibleStudyPlaylistData,
      articles,
    },
  };
};

const Home = ({ articles, worshipPlaylistData, bibleStudyPlaylistData }) => {
  return (
    <>
      <Head>
        <title>My blog</title>
      </Head>
      <Hero />
      <section className={styles.Home}>
        <div className={styles.Home__content}>
          <h1 className={styles.Home__content__title}>Latest articles</h1>
          {articles && articles.map((article) => {
            return <ArticlePreview article={article} />
          })}
          <a href="/articles" className="btn-text">
            To articles
          </a>
        </div>
        {worshipPlaylistData ? (
          <div className={styles.Home__content}>
            <h1 className={styles.Home__content__title}>Worship playlist</h1>
            {worshipPlaylistData.items.map((dataItem) => {
              return <Resources key={dataItem.id} dataItem={dataItem} />;
            })}
            <a href="/articles" className="btn-text">
              To playlist
            </a>
          </div>
        ) : null}
        {bibleStudyPlaylistData ? (
          <div className={styles.Home__content}>
            <h1 className={styles.Home__content__title}>
              Bible study playlist
            </h1>
            {bibleStudyPlaylistData.items.map((dataItem) => {
              return <Resources key={dataItem.id} dataItem={dataItem} />;
            })}
            <a href="/articles" className="btn-text">
              To playlist
            </a>
          </div>
        ) : null}
      </section>
    </>
  );
};

export default Home;
