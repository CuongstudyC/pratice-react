import { createContext,  ReactNode, RefObject, useContext, useRef, useState } from "react";
import { ProductHome, Products } from "../data/dataProduct";

export interface GlobalProductType {
  products: ProductHome[];
  setProducts: (products: ProductHome[]) => void;
  page: number;
  setPage: (page: number) => void;
  sort: string;
  setSort: (sort: string) => void;
  refButton: RefObject<HTMLDivElement>;
  reverse: 'acs' | 'dec';
  setReverse: (reverse: 'acs' | 'dec') =>void;
}

export const GlobalContextProduct = createContext<GlobalProductType | undefined>(undefined);

export const GlobalContextProductProvides = ({ children }: { children: ReactNode }) => {
  const [products, setProducts] = useState<ProductHome[]>(Products);
  const [page, setPage] = useState<number>(1);
  const [sort, setSort] = useState<string>('');
  const [reverse, setReverse] = useState<'acs' | 'dec'>('acs');

  const refButton = useRef<HTMLDivElement>(null!);
  return (
    <GlobalContextProduct.Provider value={{
      products,
      setProducts,
      page,
      setPage,
      sort,
      setSort,
      refButton,
      reverse,
      setReverse
    }}>{children}
    </GlobalContextProduct.Provider>
  )
}

export const useGlobalProduct = () => {
  const context = useContext(GlobalContextProduct);

  if (!context) {
    throw new Error("not exist contextProduct");
  }

  return context;
}