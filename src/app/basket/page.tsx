import Basket from "./page.client";
import { getBasket } from "@/app/basket/basketUtils";

export default async function BasketPage() {
  const basketData = await getBasket(); // Access the basket data from context

  return <Basket results={basketData} />;
}
