import Basket from "./page.client";
// import { getBasket } from "@/app/basket/basketUtils";
import { BasketItemCardProps } from "@/components/basket-item-card/page";
const API_URL = process.env.NEXT_PUBLIC_API_URL;

export default async function BasketPage() {
  const getBasket = async (): Promise<BasketItemCardProps[]> => {
    try {
      console.log("Fetching basket from:", `${API_URL}/basket`);
      const response = await fetch(`${API_URL}/basket`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        cache: "no-store",
      });

      if (!response.ok) {
        throw new Error(`Failed to fetch basket. Status: ${response.status}`);
      }

      const data: BasketItemCardProps[] = await response.json();
      console.log("Basket data:", data);
      return data;
    } catch (error) {
      console.error("Error fetching basket:", error);
      return [];
    }
  };

  const basketData = await getBasket(); // Access the basket data from context

  return <Basket results={basketData} />;
}
