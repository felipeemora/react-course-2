import styles from '../styles/styles.module.css';
import { useContext } from "react";
import { ProductContext } from "./ProductCard";

export const ProductTitle = ({ title = ''}) => {

  const { product } = useContext(ProductContext);

  let titleToShow: string;

  if(title) {
    titleToShow = title;
  } else {
    titleToShow = product.title;
  }
  return (
    <span className={ styles.productDescription }> { titleToShow } </span>
  )
}
