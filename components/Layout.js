import styles from "../styles/Layout.module.css";
import Nav from './Nav';

import React from "react";

const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <Nav />
      <main className={styles.main}>{children}</main>
      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Authored by{" "}
          <img
            src="/assets/hamster-with-headphones.png"
            alt="Hamster"
            className={styles.logo}
          />
          "The Tina"
        </a>
      </footer>
    </div>
  );
};

export default Layout;