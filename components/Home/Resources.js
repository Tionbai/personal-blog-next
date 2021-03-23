import React from "react";
import styles from "../../styles/Home/components/Resources.module.scss";

const Resources = ({ YouTubeData }) => {
  const firstYouTubeVideo = YouTubeData
    ? YouTubeData.items[0]
    : { snippet: {} };
  const { title, resourceId = {} } = firstYouTubeVideo.snippet || "";
  return (
    <section className={`${styles.Resources} card`}>
      <div className={styles.Resources__wrapper}></div>
      <span>{new Date().toLocaleDateString()}</span>
      <iframe
        className={styles.Resources__video}
        src={`https://www.youtube.com/embed/${resourceId.videoId}`}
        frameBorder={0}
        allow="autoplay; encrypted-media"
        allowFullScreen
      ></iframe>
      <h4>{title}</h4>
      <span className={`${styles.articlePreview__link} btn-primary`}>
        <a
          target="_blank"
          rel="noreferrer noopener"
          href={`https://www.youtube.com/watch?v=${resourceId.videoId}`}
        >
          To YouTube
        </a>
      </span>
    </section>
  );
};

export default Resources;
