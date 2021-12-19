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
      const productInCart: ProductInCard = oldShoppingCart[product.id] || {
        ...product,
        count: 0,
      };
      if (Math.max(productInCart.count + count, 0) > 0) {
        productInCart.count += count;
        return {
          ...oldShoppingCart,
          [product.id]: productInCart,
        };
      }
      //hay que borrar el producto.
      const { [product.id]: toDelete, ...rest } = oldShoppingCart;
      return rest;

      /* if (count === 0) {
            const { [product.id]: toDelete, ...rest } = oldShoppingCart;
            return rest;
          }
          console.log(oldShoppingCart);
          return {
            ...oldShoppingCart,
            [product.id]: { ...product, count },
          }; */
    });
  };
  return {
    shoppingCard,
    onProductCountChange,
  };
};
