import React from "react";
import Navbar from "../../components/navbar/page";
import styles from "./page.module.css";
import ResultsItemCard from "../../components/results-item-card/page";

export default function Results() {
  return (
    <div>
      <Navbar />
      <div className={styles.results}>
        <div className={styles.title}>3 results for phone</div>
        <ResultsItemCard />
        <ResultsItemCard />
        <ResultsItemCard />
      </div>
      <footer>© Asher De Souza 2025</footer>
    </div>
  );
}
