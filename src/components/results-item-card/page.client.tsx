import React, { useState } from "react";
import styles from "./page.module.css";

import { updateBasket } from "@/app/basket/basketUtils";

export interface ResultsItemCardProps {
  uuid: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
}

export default function ResultsItemCard({
  uuid,
  name,
  description,
  price,
  imageUrl,
}: ResultsItemCardProps) {
  const [selectedQuantity, setSelectedQuantity] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);

  const handleAddToBasket = async () => {
    setLoading(true);
    try {
      const response = await updateBasket(uuid, selectedQuantity);
      console.log("Response from updateBasket:", response);
    } catch (error) {
      console.error("Error updating basket:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.itemCard}>
      <img className={styles.image} src={imageUrl} />
      <div className={styles.itemCardInfo}>
        <div className={styles.title}>{name}</div>
        <div className={styles.price}>£{price}</div>
        <div className={styles.description}>{description}</div>
        <div className={styles.controls}>
          <select
            value={selectedQuantity}
            onChange={(e) => setSelectedQuantity(Number(e.target.value))}
            className={styles.quantityDropdown}
          >
            {Array.from({ length: 10 }, (_, i) => i + 1).map((num) => (
              <option key={num} value={num}>
                {num}
              </option>
            ))}
          </select>
          <button
            className={styles.basketButton}
            onClick={handleAddToBasket}
            disabled={loading}
          >
            {loading ? "Adding..." : "Add to Basket"}
          </button>
        </div>
      </div>
    </div>
  );
}
