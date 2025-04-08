"use client";

import React from "react";
import Navbar from "../../components/navbar/page";
import styles from "./page.module.css";
import ResultsItemCard from "../../components/results-item-card/page";
import { ResultsItemCardProps } from "../../components/results-item-card/page";

interface ResultsProps {
  results: Array<ResultsItemCardProps>;
  query: string;
}

export default function Results({ results, query }: ResultsProps) {
  const itemData = {
    name: "PlayStation 5",
    description: "The latest gaming console from Sony.",
    price: 499.99,
    quantity: 5,
    category: ["Gaming", "Electronics"],
    imageUrl:
      "https://m.media-amazon.com/images/I/818zyNJnfLL._AC_UY436_FMwebp_QL65_.jpg",
  };

  // figger out how to map this so that all the results are displayed

  return (
    <div>
      <Navbar />
      <div className={styles.results}>
        <div className={styles.title}>
          {results.length != undefined ? results.length : `No`}{" "}
          {results.length != 1 ? `results` : `result`} for {query}
        </div>
        <div className={styles.resultsList}>
          {results.length > 0 ? (
            <ResultsItemCard data={itemData} />
          ) : (
            <div className={styles.noResults}>Try a different search term?</div>
          )}
        </div>
      </div>
      <footer>© Asher De Souza 2025</footer>
    </div>
  );
}
