import styles from '../styles/Footer.module.scss';

const Footer = () => {
  return (
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
  );
}

export default Footer
