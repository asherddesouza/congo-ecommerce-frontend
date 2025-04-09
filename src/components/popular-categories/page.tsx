import React from "react";
import styles from "./page.module.css";
import Form from "next/form";
import Link from "next/link";

export default function PopularCategories() {
  return (
    <div className={styles.popularCategories}>
      <div className={styles.headers}>
        <div className={styles.title}>Popular Categories</div>
        <Link className={styles.showAll} href={`/results`}>
          Show all products
        </Link>
      </div>
      <div className={styles.form}>
        <Link className={styles.category} href={`/results?query=watches`}>
          Watches
        </Link>
        <Link className={styles.category} href={`/results?query=keyboards`}>
          Keyboards
        </Link>
        <Link className={styles.category} href={`/results?query=laptops`}>
          Laptops
        </Link>
        <Link className={styles.category} href={`/results?query=gaming`}>
          Gaming
        </Link>
      </div>
    </div>
  );
}
