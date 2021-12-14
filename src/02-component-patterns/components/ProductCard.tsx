import { useProduct } from "../hooks/useProduct";
import { createContext} from "react";
import {
  ProductContextProps,
  ProductCardProps,
} from "../interfaces/interfaces";
import styles from "../styles/styles.module.css";

//Creamos un context para compartir info a componentes hijos
export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export const ProductCard = ({ product, children }: ProductCardProps) => {
  const { counter, increaseBy } = useProduct();

  return (
    <Provider value={{ counter, increaseBy, product }}>
      <div className={styles.productCard}>
        {children}
        {/* <ProductImage img={product.img} />

      <ProductTitle title={product.title} />

      <ProductButtons
        increaseBy={increaseBy}
        counter={counter}
      /> */}
      </div>
    </Provider>
  );
};

