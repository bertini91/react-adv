import { useContext } from "react";
import { ProductContext } from "./ProductCard";
import noImage from "../assets/no-image.jpg";
import styles from "../styles/styles.module.css";

export interface ImageProps {
  img?: string;
  className?: string;
  style?: React.CSSProperties;
}

export const ProductImage = ({ img = "", className, style }: ImageProps) => {
  const { product } = useContext(ProductContext);
  let imgToShow: string;
  if (img) {
    imgToShow = img;
  } else {
    if (product.img) {
      imgToShow = product.img;
    } else {
      imgToShow = noImage;
    }
  }
  return (
    <img
      src={imgToShow}
      alt="Product Image"
      className={`${styles.productImg} ${className}`}
      style={style}
    />
  );
};
