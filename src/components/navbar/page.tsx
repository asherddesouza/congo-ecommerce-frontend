import React from "react";
import styles from "./page.module.css";

export default function Navbar() {
  return (
    <div>
      <ul className={styles.navbar}>
        <li className={`${styles.logo} ${styles.left}`}>
          <a href="/">Congo</a>
        </li>
        <li className={`${styles.center}`}>
          <input
            className={styles.searchBar}
            type="text"
            placeholder="Search Congo..."
          />
          <button type="submit" className={styles.searchButton}>
            <div className={styles.magnifyingGlass}></div>
          </button>
        </li>
        <li className={`${styles.right}`}>
          <a href="/basket" className={styles.basket}>
            Basket: <i className={`${styles.basketIcon}`}>0</i>
          </a>
          <div className={styles.divider} />
          <a className={`${styles.profile}`} href="/profile">
            <img
              className={`${styles.profileIcon}`}
              src="resources/profile-images/grey-profile-icon.png"
            />
          </a>
        </li>
      </ul>
    </div>
  );
}

// use CSS grid to organise the navbar so that the CONGO is in the middle, and the basket and profile are on the right
