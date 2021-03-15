import React from 'react'

const Articles = () => {
  return (
    <article className={styles.articles__article} key={article.id}>
      <h3 className={styles.articles__article__title}>{article.title}</h3>
      <p>{article.body}</p>
      <a variant="contained" className={styles.articles__article__link}>
        Read more
      </a>
    </article>
  );
}

export default Articles
