import styles from '../../../styles/Layout/components/Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <a
        href="/about"
        target="_blank"
        rel="noopener noreferrer"
      >
        Authored by{" "}
        <img
          src="/assets/Footer/hamster-with-headphones.png"
          alt="Hamster"
          className={styles.logo}
        />
        "The Tina"
      </a>
    </footer>
  );
}

export default Footer
