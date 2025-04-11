// import { getBasket } from "@/app/basket/basketUtils";

export default function BasketLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <main>{children}</main>
    </div>
  );
}
