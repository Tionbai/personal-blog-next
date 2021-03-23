import React from "react";
import Link from "next/link";
import PropTypes from "prop-types";
import styles from "../../styles/Articles/ArticlePreview.module.scss";

const ArticlePreview = ({ article }) => {
  return (
    <article className={`${styles.articlePreview} card`}>
      <div className={styles.articlePreview__wrapper}></div>
      <span>{new Date().toLocaleDateString()}</span>
      <h3 className={styles.articlePreview__title}>{article.title}</h3>
      <p>{article.body}</p>
      <span className={`${styles.articlePreview__link} btn-primary`}>
        <Link href={`/article/${article.id}`}>To article</Link>
      </span>
    </article>
  );
};

ArticlePreview.propTypes = {
  article: Object(PropTypes.object).isRequired,
};

export default ArticlePreview;
