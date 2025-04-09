import React from "react";
import styles from "./page.module.css";
import Link from "next/link";

interface CarouselSlideProps {
  title: string;
  description: string;
  imagePath: string;
  getCurrentCarouselSelected: number;
  redirectRequest?: string;
}

export default function Carousel({
  title,
  description,
  imagePath,
  getCurrentCarouselSelected,
  redirectRequest,
}: CarouselSlideProps) {
  const content = (
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

  return redirectRequest ? (
    <Link className={styles.link} href={`/results?query=${redirectRequest}`}>
      {content}
    </Link>
  ) : (
    content
  );
}
