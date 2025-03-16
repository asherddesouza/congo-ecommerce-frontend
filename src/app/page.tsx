import Navbar from "../components/navbar/page";
import Carousel from "../components/carousel/page";
import styles from "./page.module.css";

let currentCarouselSelected = 0;

export default function Home() {
  return (
    <div>
      <Navbar />
      {currentCarouselSelected === 0 && (
        <Carousel
          title="Congo"
          description="Your one-stop online shop!"
          imagePath="resources/images/congo-hero-banner.png"
        />
      )}
      {currentCarouselSelected === 1 && (
        <Carousel
          title="Perfumes"
          description="Browse our exclusive range here!"
          imagePath="resources/images/perfumes-banner.jpg"
        />
      )}
      {currentCarouselSelected === 2 && (
        <Carousel
          title="Phones"
          description="Find the perfect phone for you!"
          imagePath="resources/images/phones-banner.png"
        />
      )}
      <footer>© Asher De Souza 2025</footer>
    </div>
  );
}
