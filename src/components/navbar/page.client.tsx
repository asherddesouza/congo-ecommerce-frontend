"use client";

import React, { useState } from "react";
import styles from "./page.module.css";
import Link from "next/link";
import Form from "next/form";
import { Kablammo } from "next/font/google";

const kablammo = Kablammo({ subsets: ["latin"] });

export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

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
            Basket
          </Link>
          <div className={styles.divider} />
          <button onClick={() => setIsLoggedIn(!isLoggedIn)} />

          <div>
            {isLoggedIn ? (
              <div className={styles.user}>
                <div>Welcome, Asher</div>
                <Link className={`${styles.profile}`} href="/profile">
                  <img
                    className={`${styles.profileIcon}`}
                    src="../resources/profile-images/grey-profile-icon.png"
                  />
                </Link>
              </div>
            ) : (
              <Link href="/login">
                <div className={styles.login}>Login/Register</div>
              </Link>
            )}
          </div>
        </li>
      </ul>
    </div>
  );
}
