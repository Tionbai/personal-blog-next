import Meta from "../components/Layout/components/Meta";
import styles from "../styles/Articles/Articles.module.scss";
import { server } from "../config/index";
import ArticlePreview from "../components/Articles/ArticlePreview";

const news = ({ articles }) => {
  return (
    <>
      <Meta title="Articles - My blog" />
      <div className={`${styles.articles__header} bg-gradient-img`}></div>
      <section className={`${styles.articles} grid spacing`}>
        <h1 className="title white">Articles</h1>
        {articles.map((article) => {
          return <ArticlePreview key={article.id} article={article} />;
        })}
      </section>
    </>
  );
};

export default news;

export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/articles`);
  const articles = await res.json();

  return {
    props: {
      articles,
    },
  };
};
