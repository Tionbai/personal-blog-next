import Meta from "../components/Layout/components/Meta";
import styles from "../styles/About.module.scss";

const about = () => {
  return (
    <div className="grid spacing">
      <Meta title="About - My blog" />
      <h1 className="title">Tina</h1>
      <h3 className="subtitle">
        A fullstack JavaScript web developer with a strong passion for Jesus
        Christ.
      </h3>
      <p className="text">
        Hi. I am so happy that you found your way to my personal blog. This is
        where I write about my faith in Jesus Christ, web development, politics
        and what life may bring.
        <br />
        <br />
        My goal is to spread the truth of Christ to the nations, document and
        share my experience as a web developer, and share my thoughts to
        whomever it will benefit.
        <br />
        <br />
        If you have any questions or want to get in touch with me, feel free to{" "}
        <a className={styles.about__link} href="/contact">
          contact me.
        </a>
      </p>
      <section className={styles.map}>
        <img
          className={styles.map__large}
          src="https://api.mapbox.com/styles/v1/mapbox/light-v10/static/10.7521,59.9125,3/650x500?access_token=pk.eyJ1IjoidGlvbmJhaSIsImEiOiJja21ocnExbWowYTRvMnBtdGV6eDlzdDA5In0.VR0ar-9RwKePVW8_2zgMKg"
          alt="Map of Oslo, Norway, zoomed out"
        />
        <img
          className={styles.map__small}
          src="https://api.mapbox.com/styles/v1/mapbox/light-v10/static/10.7521,59.9125,4/300x200?access_token=pk.eyJ1IjoidGlvbmJhaSIsImEiOiJja21ocnExbWowYTRvMnBtdGV6eDlzdDA5In0.VR0ar-9RwKePVW8_2zgMKg"
          alt="Map of Oslo, Norway, zoomed in"
        />
      </section>
    </div>
  );
};

export default about;
