import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>My blog</title>
      </Head>
      <h1 className={styles.title}>
        Welcome to my <a>personal blog</a>!
      </h1>
      <p className={styles.description}>
        This is where I share everything life related.
      </p>

      <div className={styles.grid}>
        <a href="/news" className={styles.card}>
          <h3>News &rarr;</h3>
          <p>See the newest posts I've shared!</p>
        </a>

        <a href="/archive" className={styles.card}>
          <h3>Archive &rarr;</h3>
          <p>Browse the archive of older posts!</p>
        </a>

        <a href="/about" className={styles.card}>
          <h3>About me &rarr;</h3>
          <p>Learn about me and my story!</p>
        </a>

        <a href="/contact" className={styles.card}>
          <h3>Contact &rarr;</h3>
          <p>Get in touch with me!</p>
        </a>
      </div>
    </>
  );
}
