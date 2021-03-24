import styles from "../../../styles/Layout/components/Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <a href="/about" target="_blank" rel="noopener noreferrer">
        <span>Authored by</span>
        <img
          src="/assets/Footer/hamster-with-headphones.png"
          alt="Hamster"
          className={styles.logo}
        />
        <span>"The Tina"</span>
      </a>
    </footer>
  );
};

export default Footer;
