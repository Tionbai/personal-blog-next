import React from "react";
import styles from "../../styles/Home/components/Hero.module.scss";

const Hero = () => {
  return (
    <section className={styles.Hero}>
      <img
        className={styles.Hero__img}
        src="https://images.pexels.com/photos/1112048/pexels-photo-1112048.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        alt="Header image"
      />
      <section className={`${styles.Hero__text} spacing`}>
        <h1 className="title alt-font">Tinas blog</h1>
        <p className="subtitle">
          This is where I share everything life related.
        </p>
      </section>
    </section>
  );
};

export default Hero;
