import React from "react";
import styles from "./page.module.css";

export interface ResultsItemCardProps {
  name: string;
  description: string;
  price: number;
  quantity: number;
  category: string[];
  imageUrl: string;
}

export default function ResultsItemCard({
  name,
  description,
  price,
  quantity,
  category,
  imageUrl,
}: ResultsItemCardProps) {
  return (
    <div className={styles.itemCard}>
      <img className={styles.image} src={imageUrl} />
      <div className={styles.itemCardInfo}>
        <div className={styles.title}>{name}</div>
        <div className={styles.price}>£{price}</div>
        <div className={styles.description}>{description}</div>
        <div className={styles.quantity}>
          <select
            name="quantity"
            id="quantity"
            className={styles.quantityDropdown}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
          <button className={styles.basketButton}>Add to basket</button>
        </div>
      </div>
    </div>
  );
}
