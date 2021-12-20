import { useState } from "react";
import { Product, ProductInCard } from "../interfaces/interfaces";

interface onProductCountArgs {
  count: number;
  product: Product;
}

export const useShoppingCart = () => {
  const [shoppingCard, setShoppingCard] = useState<{
    [key: string]: ProductInCard;
  }>({});

  const onProductCountChange = ({ count, product }: onProductCountArgs) => {
    
    setShoppingCard((oldShoppingCart) => {
      if (count === 0) {
            const { [product.id]: toDelete, ...rest } = oldShoppingCart;
            return rest;
          }
          console.log(oldShoppingCart);
          return {
            ...oldShoppingCart,
            [product.id]: { ...product, count },
          };
    });
  };
  return {
    shoppingCard,
    onProductCountChange,
  };
};
