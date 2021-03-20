import Meta from "../components/Layout/components/Meta";
import styles from "../styles/About/About.module.scss";
import Map from "../components/About/Map";

const about = () => {
  return (
    <div className={`${styles.about}`}>
      <section className="grid spacing">
        <Meta title="About - My blog" />
        <h1 className="title">Tina</h1>
        <h3 className="subtitle">
          A fullstack JavaScript web developer with a strong passion for Jesus
          Christ.
        </h3>
        <p className="text">
          Hi. I am so happy that you found your way to my personal blog. This is
          where I write about my faith in Jesus Christ, web development,
          politics and what life may bring.
          <br />
          <br />
          My goal is to spread the truth of Christ to the nations, document and
          share my experience as a web developer, and share my thoughts to
          whomever it will benefit.
          <br />
          <br />
          If you have any questions or want to get in touch with me, feel free
          to
          <br />
          <br />
          <a className={styles.about__link} href="/contact">
            contact me.
          </a>
        </p>
      </section>
      <Map />
    </div>
  );
};

export default about;
