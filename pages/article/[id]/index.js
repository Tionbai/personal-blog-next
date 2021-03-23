import { server } from "../../../config/index";
import Meta from "../../../components/Layout/components/Meta";
import styles from "../../../styles/Articles/components/Article/Article.module.scss";
import Pagination from "../../../components/Articles/components/Pagination/Pagination";

const Article = ({ article }) => {
  return (
    <>
      <Meta
        title={`${article.title} - My blog`}
        description={article.description}
      />
      <div className={styles.article__header}>
        <h1 className="alt-font white">Articles</h1>
      </div>
      <article className={`${styles.article} text`}>
        <h1 className={styles.article__title}>{article.title}</h1>
        <p >{article.body}</p>
        <p>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum."
        </p>
      </article>
      <Pagination article={article} />
    </>
  );
};

export default Article;

export const getStaticProps = async (context) => {
  const res = await fetch(`${server}/api/articles/${context.params.id}`);
  const article = await res.json();

  return {
    props: {
      article,
    },
  };
};

export const getStaticPaths = async () => {
  const res = await fetch(`${server}/api/articles/`);
  const articles = await res.json();

  const ids = articles.map((article) => article.id);
  const paths = ids.map((id) => ({
    params: {
      id: id.toString(),
    },
  }));
  return {
    paths,
    fallback: false,
  };
};
