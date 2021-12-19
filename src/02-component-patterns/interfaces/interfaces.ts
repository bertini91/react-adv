import { Props as ButtonProps } from "../components/ProductButtons";
import { Props as ProductCardProps } from "../components/ProductCard";
import { ImageProps } from "../components/ProductImage";
import { TitleProps } from "../components/ProductTitle";

export interface Product {
  id: string;
  title: string;
  img?: string;
}

export interface ProductContextProps {
  counter: number;
  increaseBy: (value: number) => void;
  product: Product;
}

export interface ProductCardHOCProps {
  ({ product, children }: ProductCardProps): JSX.Element;
  Title: (Props: TitleProps) => JSX.Element;
  Image: (Props: ImageProps) => JSX.Element;
  Buttons: ({ className }: ButtonProps) => JSX.Element;
}

export interface onChangeArgs {
  product: Product;
  count: number;
}


// se lo puede trabajar con clase o interfaz. Las clases son mas pesadas
export interface ProductInCard extends Product {
  count: number;
}