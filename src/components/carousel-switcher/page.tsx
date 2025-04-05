import React from "react";
import styles from "./page.module.css";

interface CarouselSwitcherProps {
  setCurrentCarouselSelected: React.Dispatch<React.SetStateAction<number>>;
  getCurrentCarouselSelected: number;
}

export default function CarouselSwitcher({
  setCurrentCarouselSelected,
  getCurrentCarouselSelected,
}: CarouselSwitcherProps) {
  return (
    <div className={styles.dots}>
      <button
        className={`${styles.dot} ${
          getCurrentCarouselSelected === 0 && styles.dotSelected
        }`}
        onClick={() => setCurrentCarouselSelected(0)}
      ></button>
      <button
        className={`${styles.dot} ${
          getCurrentCarouselSelected === 1 && styles.dotSelected
        }`}
        onClick={() => setCurrentCarouselSelected(1)}
      ></button>
      <button
        className={`${styles.dot} ${
          getCurrentCarouselSelected === 2 && styles.dotSelected
        }`}
        onClick={() => setCurrentCarouselSelected(2)}
      ></button>
    </div>
  );
}
