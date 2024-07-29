import styles from '../styles/styles.module.css';
import { useProduct } from '../hooks/useProduct';
import { createContext, CSSProperties, ReactElement } from 'react';
import { ProductContextProps, Product } from '../interfaces/interfaces';

export interface Props {
  product: Product;  
  children?: ReactElement | ReactElement[],
  className?: string;
  style?: CSSProperties;
}

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

// Componente que recibe uno o varios hijos a renderizar y un producto a mostrar
// se una un Product Context para envolver los hijos allí dentro y que tengan acceso
// al producto que recibió este ProductCard
export const ProductCard = ({ children, product, className, style }: Props) => {
  const {counter, increaseBy} = useProduct();

  return (
    <Provider value={{ counter, increaseBy, product }}>
      <div className={ `${styles.productCard} ${className}` } style={ style }>
        { children }
      </div>  
    </Provider>
  )
}
