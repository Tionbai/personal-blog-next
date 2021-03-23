import styles from "../../styles/Layout/Layout.module.scss";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Meta from "./components/Meta";

const Layout = ({ children }) => {
  return (
    <div className={styles.app}>
      <Meta />
      <Nav />
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
