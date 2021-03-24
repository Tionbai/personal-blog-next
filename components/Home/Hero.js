import React from "react";
import styles from "../../styles/Home/components/Hero.module.scss";

const Hero = () => {
  return (
    <section className={styles.Hero}>
      <section className={`${styles.Hero__text} spacing`}>
        <h1 className="title white">Tinas blog</h1>
        <p className="subtitle white">
          This is where I share everything life related.
        </p>
      </section>
    </section>
  );
};

export default Hero;
