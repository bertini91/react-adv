import { createContext, CSSProperties, ReactElement } from "react";
import { useProduct } from "../hooks/useProduct";
import {
  ProductContextProps,
  Product,
  onChangeArgs,
} from "../interfaces/interfaces";
import styles from "../styles/styles.module.css";

//Creamos un context para compartir info a componentes hijos
export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export interface Props {
  product: Product;
  children?: ReactElement | ReactElement[];
  className?: string;
  style?: CSSProperties;
  onChange?: (args: onChangeArgs) => void;
  value?: number;
}
export const ProductCard = ({
  product,
  children,
  className,
  style,
  onChange,
  value
}: Props) => {
  //el useProduct es el que esta manejando el estado
  const { counter, increaseBy } = useProduct({ onChange, product, value });

  return (
    <Provider value={{ counter, increaseBy, product }}>
      <div className={`${styles.productCard} ${className}`} style={style}>
        {children}
      </div>
    </Provider>
  );
};
