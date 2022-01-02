import { useEffect, useRef, useState } from "react";
import { onChangeArgs, Product, InitialValues } from '../interfaces/interfaces';

export interface useProductArgs {
  product: Product;
  onChange?: (args: onChangeArgs) => void;
  value?: number;
  initialValues?: InitialValues;
}

export const useProduct = ({
  onChange,
  product,
  value = 0,
  initialValues,
}: useProductArgs) => {
  //InitialValues?.count || value    si viene un valor en initialValue usarlo,
  //de lo contrario usar el valor de value
  const [counter, setCounter] = useState<number>(initialValues?.count || value);
  const isMounted = useRef(false); //useRef sobrevivira con los renderizados

  const increaseBy = (value: number) => {
    let newValue = Math.max(counter + value, 0);
    if(initialValues?.maxCount){
      newValue = Math.min(newValue, initialValues.maxCount);
    }
    setCounter(newValue);
    onChange && onChange({ count: newValue, product }); //igual a if(onChange) onChange();
  };

  const reset = ()=>{
    setCounter(initialValues?.count || value);
  }

  //Pondremos el useEffect asi este atento al cambio del value y actualice
  //el useState al agregar mas elemento al carrito
  useEffect(() => {
    if (!isMounted.current) return; //Asi no se cambie 2 veces el value
    setCounter(value);
  }, [value]);
  
  useEffect(() => {
    isMounted.current = true;
  }, []);
  return {
    counter,
    isMaxCountReached: !!initialValues?.count && initialValues.maxCount === counter,
    maxCount: initialValues?.maxCount,
    increaseBy,
    reset,
  };
};
