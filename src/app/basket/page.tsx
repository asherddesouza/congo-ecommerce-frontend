"use client";

import Basket from "./page.client";
import { useBasket } from "./basketContext";

export default function BasketPage() {
  const { basketData } = useBasket(); // Access the basket data from context

  return <Basket results={basketData} />;
}
