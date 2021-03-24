import { articles } from "../../../data";
import styles from "../../../styles/Articles/components/Article/components/Pagination.module.scss";
import { arrowForwardIcon, arrowBackwardIcon } from "../../Icons";

const Pagination = ({ article }) => {
  const firstArticle = article.id === articles[0].id;
  const lastArticle = article.id === articles[articles.length - 1].id;

  return (
    <section className={`${styles.pagination} grid`}>
      <a
        className={`${styles.pagination__link} ${
          firstArticle && styles.disabled
        }`}
        href={!firstArticle ? `/article/${parseInt(article.id) - 1}` : null}
      >
        {arrowBackwardIcon}
        <span className={styles.pagination__link__text}>Previous article</span>
      </a>
      <a
        className={`${styles.pagination__link} ${
          lastArticle && styles.disabled
        }`}
        href={!lastArticle ? `/article/${parseInt(article.id) + 1}` : null}
      >
        <span className={styles.pagination__link__text}>Next article</span>
        {arrowForwardIcon}
      </a>
    </section>
  );
};

export default Pagination;
