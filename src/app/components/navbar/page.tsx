import React from "react";
import styles from "./page.module.css";
import Link from "next/link";
import { Kablammo } from "next/font/google";

const kablammo = Kablammo({ subsets: ["latin"] });

export default function Navbar() {
  return (
    <div>
      <ul className={styles.navbar}>
        <li className={`${styles.logo} ${styles.left} ${kablammo.className}`}>
          <Link href="/">Congo</Link>
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
          <Link href="/basket" className={styles.basket}>
            Basket: <i className={`${styles.basketIcon}`}>0</i>
          </Link>
          <div className={styles.divider} />
          <Link className={`${styles.profile}`} href="/profile">
            <img
              className={`${styles.profileIcon}`}
              src="../resources/profile-images/grey-profile-icon.png"
            />
          </Link>
        </li>
      </ul>
    </div>
  );
}
