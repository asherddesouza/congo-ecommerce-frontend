import React from "react";
import styles from "./page.module.css";

export default function BasketItemCard() {
  return (
    <div className={styles.itemCard}>
      <img
        className={styles.image}
        src="resources/images/congo-hero-banner.png"
      />
      <div className={styles.itemCardInfo}>
        <div>Product Name</div>
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
          <button className={styles.confirmButton}>Confirm</button>
        </div>
        <div>£24.99</div>
        <button className={styles.deleteButton}>Delete</button>
      </div>
    </div>
  );
}
