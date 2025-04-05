import React from "react";
import styles from "./page.module.css";

interface CarouselSlideProps {
  title: string;
  description: string;
  imagePath: string;
  getCurrentCarouselSelected: number;
}

export default function Carousel({
  title,
  description,
  imagePath,
  getCurrentCarouselSelected,
}: CarouselSlideProps) {
  return (
    <div className={styles.carouselContainer}>
      <div
        className={`${styles.carousel} ${
          styles[`carouselSlide${getCurrentCarouselSelected}`]
        }
        }`}
      >
        <div className={styles.left}>
          <div className={`${styles.title}`}>{title}</div>
          <div className={styles.description}>{description}</div>
        </div>
        <div className={styles.right}>
          <img className={styles.image} src={imagePath} alt="Congo banner" />
        </div>
      </div>
    </div>
  );
}
