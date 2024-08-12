import { createContext, ReactNode, RefObject, useCallback, useContext, useEffect, useRef, useState } from 'react';
import { FindOneProduct, ProductHome } from '../data/dataProduct';
import { useParams } from 'react-router-dom';
import { Comment } from '../data/dataComment';

export interface ProductDetailGlobalType {
  product: ProductHome | undefined;
  setProduct: (product:  ProductHome  | undefined) => void;
  refBenefit: RefObject<HTMLDivElement>;
  refIngredient: RefObject<HTMLDivElement>;
  refHowToUse: RefObject<HTMLDivElement>;
  refReviewPage: RefObject<HTMLDivElement>;
  refFaqsPage: RefObject<HTMLDivElement>;
  page: number;
  setPage: (page: number) => void;
  avergeStar: number;
  setAvergeStar: (avergeStar: number) => void;
  percentEachStar: number[];
  setPercentEachStar: (percentEachStar: number[]) => void;
}


export const GlobalContextProductDetail = createContext<ProductDetailGlobalType | undefined>(undefined);

export const GlobalContextProductDetailProvides = ({ children }: { children: ReactNode }) => {
  const param = useParams();
  const [product, setProduct] = useState<ProductHome | undefined>(undefined);
  // const product = [...Products].find(item => item.id === Number(param.id));
  const refBenefit = useRef<HTMLDivElement>(null);
  const refIngredient = useRef<HTMLDivElement>(null);
  const refHowToUse = useRef<HTMLDivElement>(null);
  const refReviewPage = useRef<HTMLDivElement>(null);
  const refFaqsPage = useRef<HTMLDivElement>(null);
  const [page, setPage] = useState<number>(1);
  const [avergeStar, setAvergeStar] = useState<number>(0);
  const [percentEachStar, setPercentEachStar] = useState<number[]>([]);

  const fetchData = useCallback(async() => {
    setProduct(await FindOneProduct(param.id ? +param.id: 0));
  },[param.id]);


  useEffect(() => {
    fetchData();
  },[fetchData])

  useEffect(() => {
    let count = 0;
    for (const rate of Comment) {
      count += rate.rating;
    }
    const array = [];
    for (let i = 0; i < 5; i++) {
      const percent = [...Comment].reduce((acc, curr) => {
        if (curr.rating === (5 - i)) {
          return curr.rating + acc;
        }
        return acc;
      }, 0);
      array.push(Math.round((percent / count) * 100));

    }
    setPercentEachStar(array);

    count = Math.round((count / (Comment.length * 5)) * 100);

    setAvergeStar(Math.round(count / Comment.length));
  }, [])

  //function:

  return (
    <GlobalContextProductDetail.Provider value={{
      product,
      setProduct,
      refBenefit,
      refIngredient,
      refHowToUse,
      refReviewPage,
      refFaqsPage,
      page,
      setPage,
      avergeStar,
      setAvergeStar,
      percentEachStar,
      setPercentEachStar
    }}>{children}
    </GlobalContextProductDetail.Provider>
  )
}

export const useGlobalProductDetail = () => {
  const context = useContext(GlobalContextProductDetail);

  if (!context) {
    throw new Error("not exist contextProdiuctDetail");
  }

  return context;
}