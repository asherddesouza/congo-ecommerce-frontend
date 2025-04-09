"use client";

import React from "react";
import Navbar from "../../components/navbar/page";
import styles from "./page.module.css";
import ResultsItemCard from "../../components/results-item-card/page";
import { ResultsItemCardProps } from "../../components/results-item-card/page";

interface ResultsProps {
  results: ResultsItemCardProps[];
  searchQuery: string;
}

export default function Results({ results, searchQuery }: ResultsProps) {
  return (
    <div>
      <Navbar />
      <div className={styles.results}>
        <div className={styles.title}>
          {results.length !== undefined ? results.length : `No`}{" "}
          {results.length !== 1 ? `results` : `result`} for{" "}
          {searchQuery ? `"${searchQuery}"` : `all items`}
        </div>
        <div className={styles.resultsList}>
          {results.length > 0 ? (
            results.map((item, index) => (
              <ResultsItemCard
                key={index}
                name={item.name}
                description={item.description}
                price={item.price}
                quantity={item.quantity}
                category={item.category}
                imageUrl={item.imageUrl}
              />
            ))
          ) : (
            <div className={styles.noResults}>Try a different search term?</div>
          )}
        </div>
      </div>
      <footer>© Asher De Souza 2025</footer>
    </div>
  );
}
