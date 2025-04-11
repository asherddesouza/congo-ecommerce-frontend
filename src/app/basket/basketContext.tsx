"use client";

import React, { createContext, useContext } from "react";
import { BasketItemCardProps } from "@/components/basket-item-card/page";

interface BasketContextProps {
  basketData: BasketItemCardProps[];
}

const BasketContext = createContext<BasketContextProps | undefined>(undefined);

export const BasketProvider = ({
  children,
  basketData,
}: {
  children: React.ReactNode;
  basketData: BasketItemCardProps[];
}) => {
  return (
    <BasketContext.Provider value={{ basketData }}>
      {children}
    </BasketContext.Provider>
  );
};

export const useBasket = () => {
  const context = useContext(BasketContext);
  if (!context) {
    throw new Error("useBasket must be used within a BasketProvider");
  }
  return context;
};
