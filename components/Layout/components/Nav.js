import React, { useState, useEffect } from "react";
import Link from "next/link";
import styles from "../../../styles/Layout/components/Nav.module.scss";

const Nav = () => {
  const [smallScreen, setSmallScreen] = useState(false);
  const [menuActive, setMenuActive] = useState(false);
  const pages = [
    {
      path: "/",
      pathName: "Home",
    },
    {
      path: "/articles",
      pathName: "Articles",
    },
    {
      path: "/about",
      pathName: "About",
    },
    {
      path: "/contact",
      pathName: "Contact",
    },
  ];

  const handleResize = () => {
    if (window.innerWidth <= 672 && smallScreen === false) setSmallScreen(true);
    if (window.innerWidth > 672 && smallScreen === true) setSmallScreen(false);
    menuActive && setMenuActive(false);
  };

  useEffect(() => {
    window.addEventListener("resize", () => handleResize());
    return () => window.removeEventListener("resize", () => handleResize);
  }, [menuActive]);

  const handleClick = (e) => {
    e.preventDefault();
    setMenuActive(!menuActive);
  };

  return (
    <nav className={styles.nav}>
      <ul className={`${styles.nav__list} ${menuActive && styles.active}`}>
        {pages.map((page) => {
          return (
            <li key={page.path} className={styles.nav__list__item}>
              <Link href={page.path}>{page.pathName}</Link>
            </li>
          );
        })}
      </ul>
      <div className={styles.nav__burger} onClick={handleClick}>
        <img
          src={menuActive ? "/assets/Nav/close-24px.svg" : "/assets/Nav/menu-24px.svg"}
          alt="Menu"
        />
      </div>
    </nav>
  );
};

export default Nav;
