import Link from "next/link";
import Meta from "../components/Meta";
import styles from "../styles/News.module.scss";
import { server } from "../config/index";

const news = ({ articles }) => {
  return (
    <>
      <Meta title="News - My blog" />
      <h1>News</h1>
      <section className={styles.articles}>
        {articles.map((article) => {
          return (
            <article className={styles.articles__article} key={article.id}>
              <h3 className={styles.articles__article__title}>
                {article.title}
              </h3>
              <p>{article.body}</p>
              <span className={styles.articles__article__link}>
                <Link href={`/article/${article.id}`}>Read more</Link>
              </span>
            </article>
          );
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
