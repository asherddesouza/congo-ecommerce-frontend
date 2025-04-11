const API_URL = process.env.NEXT_PUBLIC_API_URL;
import { BasketItemCardProps } from "../../components/basket-item-card/page";

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
    console.log("Successfully fetched basket:", data);
    return data;
  } catch (error) {
    console.error("Error fetching basket:", error);
    return []; // Return an empty array as a fallback
  }
};

export const clearBasket = async () => {
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
