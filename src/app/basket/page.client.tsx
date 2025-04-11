"use client";

import React, { useState } from "react";
import Navbar from "../../components/navbar/page";
import styles from "./page.module.css";
import BasketItemCard from "../../components/basket-item-card/page";
import { BasketItemCardProps } from "../../components/basket-item-card/page";
import BasketSuccessModal from "@/components/basket-success-modal/page";

interface BasketProps {
  results: BasketItemCardProps[];
}

export const getTotalItems = (results: BasketItemCardProps[]) => {
  return results.reduce((total: number, item: BasketItemCardProps) => {
    // console.log(total + item.quantity);
    return total + item.quantity;
  }, 0);
};

const getTotalPrice = (results: BasketItemCardProps[]) => {
  return results.reduce((total: number, item: BasketItemCardProps) => {
    const itemTotal = item.price * item.quantity; // Calculate total for the current item
    // console.log(
    //   `Item: ${item.name}, Price: ${item.price}, Quantity: ${item.quantity}, Item Total: ${itemTotal}`
    // );
    return total + itemTotal; // Add the item's total to the cumulative total
  }, 0);
};

export default function Basket({ results }: BasketProps) {
  const [showBasketSuccessModal, setShowBasketSuccessModal] =
    useState<boolean>(false);

  const completeOrder = async () => {
    setShowBasketSuccessModal(true);
  };

  return (
    <div>
      <Navbar />
      <div className={styles.basket}>
        <div className={styles.title}>Basket</div>
        <div className={styles.basketLayout}>
          <div className={styles.productList}>
            {results.length > 0 ? (
              results.map((item, index) => (
                <BasketItemCard
                  key={index}
                  uuid={item.uuid}
                  name={item.name}
                  price={item.price}
                  quantity={item.quantity}
                  imageUrl={item.imageUrl}
                />
              ))
            ) : (
              <div className={styles.noResults}>
                Your basket is empty. Try adding some items to it!
              </div>
            )}
          </div>
          <div className={styles.divider} />
          <div className={styles.checkout}>
            <div>
              {results.length !== 1
                ? `There are currently ${
                    results.length !== undefined ? getTotalItems(results) : "no"
                  } items in your basket.`
                : "There is 1 item in your basket."}
            </div>
            <div className={styles.totalPrice}>
              Total: £{getTotalPrice(results).toFixed(2)}
            </div>
            <button className={styles.checkoutButton} onClick={completeOrder}>
              Buy Now
            </button>
            {showBasketSuccessModal ? (
              <BasketSuccessModal
                subtotal={getTotalPrice(results)}
                setModal={setShowBasketSuccessModal}
              />
            ) : null}
          </div>
        </div>
      </div>
      <footer>© Asher De Souza 2025</footer>
    </div>
  );
}
