import { articles } from "../../../../../data";
import styles from "./styles/Pagination.module.scss";

const Pagination = ({ article }) => {
  const firstArticle = article.id === articles[0].id;
  const lastArticle = article.id === articles[articles.length - 1].id;

  const arrowForward = (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path d="M0 0h24v24H0V0z" fill="none" />
      <path
        fill="currentColor"
        d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8z"
      />
    </svg>
  );
  const arrowBackward = (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path d="M0 0h24v24H0V0z" fill="none" />
      <path
        fill="currentColor"
        d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"
      />
    </svg>
  );
  return (
    <section className={styles.pagination}>
      <a
        className={`${styles.pagination__link} ${
          firstArticle && styles.disabled
        }`}
        href={!firstArticle ? `/article/${parseInt(article.id) - 1}` : null}
      >
        <span className={styles.pagination__link__icon}>{arrowBackward}</span>
        <span className={styles.pagination__link__text}>Previous article</span>
      </a>
      <a
        className={`${styles.pagination__link} ${
          lastArticle && styles.disabled
        }`}
        href={!lastArticle ? `/article/${parseInt(article.id) + 1}` : null}
      >
        <span className={styles.pagination__link__text}>Next article</span>
        <span className={styles.pagination__link__icon}>{arrowForward}</span>
      </a>
    </section>
  );
};

export default Pagination;
