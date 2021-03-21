import React from "react";
import Link from "next/link";
import PropTypes from "prop-types";
import styles from "../../styles/Articles/ArticlePreview.module.scss";

const ArticlePreview = ({ article }) => {
  return (
    <article className={styles.articlePreview}>
      <div className={styles.articlePreview__wrapper}></div>
      <span>{new Date().toLocaleDateString()}</span>
      <h3 className={styles.articlePreview__title}>{article.title}</h3>
      <p>{article.body}</p>
      <span className={styles.articlePreview__link}>
        <Link href={`/article/${article.id}`}>Read more</Link>
      </span>
    </article>
  );
};

ArticlePreview.propTypes = {
  article: Object(PropTypes.object).isRequired,
};

export default ArticlePreview;
