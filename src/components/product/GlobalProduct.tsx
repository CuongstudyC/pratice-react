import { createContext,  ReactNode, RefObject, useContext, useRef, useState } from "react";
import {  ProductHome } from "../data/dataProduct";

export interface GlobalProductType {
  products: ProductHome[] | undefined;
  setProducts: (products: ProductHome[] | undefined) => void;
  page: number;
  setPage: (page: number) => void;
  sort: string;
  setSort: (sort: string) => void;
  refButton: RefObject<HTMLDivElement>;
  reverse: 'asc' | 'desc' ;
  setReverse: (reverse: 'asc' | 'desc') =>void;
  LengthPage: number;
  setLengthPage: (LengthPage : number) => void;
  loading: boolean;
  setLoading: (loading: boolean) => void;
  categoryType: number | undefined;
  setCategoryType: (categoryType: number | undefined) => void;
}

export const GlobalContextProduct = createContext<GlobalProductType | undefined>(undefined);

export const GlobalContextProductProvides = ({ children }: { children: ReactNode }) => {
  const [products, setProducts] = useState<ProductHome[] | undefined>(undefined);
  const [page, setPage] = useState<number>(1);
  const [sort, setSort] = useState<string>('');
  const [reverse, setReverse] = useState<'asc' | 'desc'>('asc');
  const [LengthPage, setLengthPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);
  const [categoryType, setCategoryType] = useState<number | undefined>(undefined);


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
      setReverse,
      LengthPage,
      setLengthPage,
      loading,
      setLoading,
      categoryType,
      setCategoryType
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