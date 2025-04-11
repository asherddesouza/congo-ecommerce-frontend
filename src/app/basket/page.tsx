import Basket from "./page.client";
import { getBasket } from "@/app/basket/basketUtils";

export default async function BasketPage() {
  const basketData = await getBasket();

  return <Basket results={basketData} />;
}
