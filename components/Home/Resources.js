import React from "react";
import styles from "../../styles/Home/components/Resources.module.scss";

const Resources = ({ dataItem }) => {
  const { title, resourceId = {} } = dataItem.snippet || "";
  return (
    <section className={`${styles.Resources} card`}>
      <iframe
        className={styles.Resources__video}
        src={`https://www.youtube.com/embed/${resourceId.videoId}`}
        frameBorder={0}
        allow="autoplay; encrypted-media"
        allowFullScreen
      ></iframe>
      <p>{title}</p>
      <span className={`${styles.articlePreview__link} btn-primary`}>
        <a
          target="_blank"
          rel="noreferrer noopener"
          href={`https://www.youtube.com/watch?v=${resourceId.videoId}`}
        >
          Watch on YouTube
        </a>
      </span>
    </section>
  );
};

export default Resources;
