import { getBasket } from "@/app/basket/basketUtils";
import { BasketProvider } from "./basketContext";

export default async function BasketLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const basketData = await getBasket(); // Fetch the basket data

  return (
    <BasketProvider basketData={basketData}>
      <main>{children}</main>
    </BasketProvider>
  );
}
