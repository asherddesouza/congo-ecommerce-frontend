import Basket from "./page.client";
import { getBasket } from "@/app/basket/basketUtils";

export const dynamic = "force-dynamic";

export default async function BasketPage() {
  const basketData = await getBasket();

  return <Basket results={basketData} />;
}
