import Basket from "./page.client";
import { getBasket } from "@/app/basket/basketUtils";

export default async function Index() {
  const data = await getBasket();
  console.log("Basket data:", data);

  return (
    <div>
      <Basket results={data} />
    </div>
  );
}
