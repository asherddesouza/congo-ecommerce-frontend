"use client";

import React, { useState } from "react";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";

import { updateBasket } from "@/app/basket/page";

export interface BasketItemCardProps {
  uuid: string;
  name: string;
  description: string;
  price: number;
  quantity: number;
  category: string;
  imageUrl: string;
}

export default function BasketItemCard({
  uuid,
  name,
  description,
  price,
  quantity,
  category,
  imageUrl,
}: BasketItemCardProps) {
  console.log("category", category);
  console.log("description", description);

  const router = useRouter();
  const [selectedQuantity, setSelectedQuantity] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);

  const handleAddToBasket = async () => {
    try {
      const response = await updateBasket(uuid, selectedQuantity);
      console.log("Response from updateBasket:", response);
      router.push("/basket");
    } catch (error) {
      console.error("Error updating basket:", error);
    }
  };

  const handleDeleteFromBasket = async () => {
    try {
      setLoading(true);
      const response = await updateBasket(uuid, 0);
      console.log("Response from updateBasket:", response);
      router.push("/basket");
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
        <div className={styles.name}>{name}</div>
        <div className={styles.quantityContainer}>
          <div>Change quantity?</div>
          <div className={styles.quantity}>
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
              className={styles.confirmButton}
              onClick={handleAddToBasket}
              disabled={loading}
            >
              {loading ? "Confirming..." : "Confirm"}
            </button>
          </div>
        </div>

        <div className={styles.info}>
          <div className={styles.price}>£{price}</div>
          <div className={styles.basketQuantity}>x{quantity}</div>
        </div>

        <button
          className={styles.deleteButton}
          onClick={handleDeleteFromBasket}
          disabled={loading}
        >
          {loading ? "Removing..." : "Remove from Basket"}
        </button>
      </div>
    </div>
  );
}
