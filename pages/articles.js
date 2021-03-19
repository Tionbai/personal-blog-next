import Meta from "../components/Layout/components/Meta";
import styles from "../styles/Articles/Articles.module.scss";
import { server } from "../config/index";
import Article from "../components/Articles/ArticlePreview";

const news = ({ articles }) => {
  return (
    <>
      <Meta title="Articles - My blog" />
      <section className={`${styles.articles} grid spacing`}>
        {articles.map((article) => {
          return <Article key={article.id} article={article} />;
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
