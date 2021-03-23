import Head from "next/head";
import { server } from "../config/index";
import styles from "../styles/Home/Home.module.scss";
import ArticlePreview from "../components/Articles/ArticlePreview";
import Hero from "../components/Home/Hero";
import Resources from "../components/Home/Resources";

const YOUTUBE_PLAYLIST_ITEMS_API =
  "https://www.googleapis.com/youtube/v3/playlistItems";
const YOUTUBE_PLAYLIST_ID = "PLx7blejRY2MRWp_uOb5TZS9PUzzEN1Yvi";

const getYouTubeData = async () => {
  const res = await fetch(
    `${YOUTUBE_PLAYLIST_ITEMS_API}?part=snippet&playlistId=${YOUTUBE_PLAYLIST_ID}&maxResults=50&key=${process.env.YOUTUBE_API_KEY}`
  );
  const data = await res.json();
  return data;
};

const getArticle = async () => {
  const res = await fetch(`${server}/api/articles/1`);
  const article = await res.json();
  return article;
};

export const getServerSideProps = async () => {
  const YouTubeData = await getYouTubeData();
  const article = await getArticle();
  return {
    props: {
      YouTubeData,
      article,
    },
  };
};

const Home = ({ article, YouTubeData }) => {
  return (
    <>
      <Head>
        <title>My blog</title>
      </Head>
      <Hero />
      <section className={styles.Home}>
        <div className={styles.Home__content}>
          <h1 className={styles.Home__content__title}>Latest article</h1>
          {article ? <ArticlePreview article={article} /> : null}
        </div>
        <div className={styles.Home__content}>
          <h1 className={styles.Home__content__title}>Worship playlist</h1>
          <Resources YouTubeData={YouTubeData} />
        </div>
      </section>
    </>
  );
};

export default Home;
