"use client";

import { useState } from "react";
import styles from "./page.module.css";
import Navbar from "./components/navbar/page";
import CarouselSlide from "./components/carousel/page";
import CarouselSwitcher from "@/app/components/carousel-switcher/page";
import PopularCategories from "@/app/components/popular-categories/page";

export default function Home() {
  const [currentCarouselSelected, setCurrentCarouselSelected] = useState(0);

  return (
    <div>
      <Navbar />
      {currentCarouselSelected === 0 && (
        <CarouselSlide
          title="Congo"
          description="Your one-stop online shop!"
          imagePath="resources/images/congo-hero-banner.png"
          getCurrentCarouselSelected={currentCarouselSelected}
        />
      )}
      {currentCarouselSelected === 1 && (
        <CarouselSlide
          title="Perfumes"
          description="Browse our exclusive range here!"
          imagePath="resources/images/perfumes-banner.png"
          getCurrentCarouselSelected={currentCarouselSelected}
        />
      )}
      {currentCarouselSelected === 2 && (
        <CarouselSlide
          title="Phones"
          description="Find the phone that meets your needs!"
          imagePath="resources/images/phones-banner.png"
          getCurrentCarouselSelected={currentCarouselSelected}
        />
      )}
      <CarouselSwitcher
        setCurrentCarouselSelected={setCurrentCarouselSelected}
        getCurrentCarouselSelected={currentCarouselSelected}
      />

      <PopularCategories />
      <footer>© Asher De Souza 2025</footer>
    </div>
  );
}
