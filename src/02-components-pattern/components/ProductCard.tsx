import styles from '../styles/styles.module.css';
import { useProduct } from '../hooks/useProduct';
import { createContext } from 'react';
import { ProductContextProps, ProductCardProps } from '../interfaces/interfaces';

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

// Componente que recibe uno o varios hijos a renderizar y un producto a mostrar
// se una un Product Context para envolver los hijos allí dentro y que tengan acceso
// al producto que recibió este ProductCard
export const ProductCard = ({ children, product }: ProductCardProps) => {
  const {counter, increaseBy} = useProduct();

  return (
    <Provider value={{ counter, increaseBy, product }}>
      <div className={ styles.productCard }>
        { children }
      </div>  
    </Provider>
  )
}
