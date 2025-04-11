import { BasketItemCardProps } from "../../components/basket-item-card/page";
const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const updateBasket = async (
  itemUUID: string,
  requestedQuantity: number
) => {
  try {
    const data = await fetch(`${API_URL}/basket/add`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        itemUUID,
        requestedQuantity,
      }),
    });
    console.log(
      `Successfully updated product with UUID: ${itemUUID}, Quantity: ${requestedQuantity}`
    );
    return data.json();
  } catch (error) {
    console.error("Error updating basket:", error);
  }
};

export const getBasket = async (): Promise<BasketItemCardProps[]> => {
  try {
    console.log("Fetching basket from:", `${API_URL}/basket`);
    const response = await fetch(`${API_URL}/basket`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
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

export const clearBasket = async () => {
  console.log(`API_URL: ${API_URL}`);
  try {
    const response = await fetch(`${API_URL}/basket/clear`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to clear basket. Status: ${response.status}`);
    }

    console.log("Successfully cleared basket");
  } catch (error) {
    console.error("Error clearing basket:", error);
  }
};
