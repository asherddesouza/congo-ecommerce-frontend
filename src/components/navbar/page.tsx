import React from "react";
import styles from "./page.module.css";
import Link from "next/link";
import Form from "next/form";
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
          <Form className={styles.form} action="/results">
            <label>
              <input
                className={styles.searchBar}
                type="text"
                name="query"
                placeholder="Search Congo..."
              />
            </label>
            <button type="submit" className={styles.searchButton}>
              <div className={styles.magnifyingGlass}></div>
            </button>
          </Form>
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
