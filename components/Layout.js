import styles from "../styles/Layout.module.scss";
import Nav from "./Nav";
import Footer from "./Footer";
import Meta from "./Meta";

const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <Meta />
      <Nav />
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
