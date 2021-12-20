import { useEffect, useState } from "react";
import { onChangeArgs, Product } from "../interfaces/interfaces";

export interface useProductArgs {
  product: Product;
  onChange?: (args: onChangeArgs) => void;
  value?: number;
}

export const useProduct = ({
  onChange,
  product,
  value = 0,
}: useProductArgs) => {
  const [counter, setCounter] = useState(value);

  const increaseBy = (value: number) => {
    const newValue = Math.max(counter + value, 0);
    setCounter(newValue);
    onChange && onChange({ count: newValue, product }); //igual a if(onChange) onChange();
  };
  //Pondremos el useEffect asi este atento al cambio del value y actualice
  //el useState al agregar mas elemento al carrito
  useEffect(() => {
    setCounter(value);
  }, [value]);
  return {
    counter,
    increaseBy,
  };
};
