import React from "react";
import Navbar from "../../components/navbar/page";
import styles from "./page.module.css";
import BasketItemCard from "../../components/basket-item-card/page";

export default function Basket() {
  const count = 3;

  return (
    <div>
      <Navbar />
      <div className={styles.basket}>
        <div className={styles.title}>Basket</div>
        <div className={styles.basketLayout}>
          <div className={styles.productList}>
            <BasketItemCard />
            <BasketItemCard />
            <BasketItemCard />
          </div>
          <div className={styles.divider} />
          <div className={styles.checkout}>
            <div>There are currently {count} items in your basket. </div>
            <button className={styles.checkoutButton}>Buy Now</button>
          </div>
        </div>
      </div>
      <footer>© Asher De Souza 2025</footer>
    </div>
  );
}
