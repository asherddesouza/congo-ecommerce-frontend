import React from "react";
import styles from "./page.module.css";

export default function PopularCategories() {
  return (
    <div className={styles.popularCategories}>
      <div className={styles.headers}>
        <div className={styles.title}>Popular Categories</div>
        <div className={styles.showAll}>Show all products</div>
      </div>
      <div className={styles.category}>Watches</div>
      <div className={styles.category}>Keyboards</div>
      <div className={styles.category}>Laptops</div>
      <div className={styles.category}>Video Games</div>
    </div>
  );
}
