import { createContext, ReactNode, useCallback, useContext, useEffect, useState } from 'react'
import { DataUsers } from '../data/dataUser';
import { Tranlate as Trans } from '../data/Tranlate';
import { ProductHome } from '../data/dataProduct';
import { deliveryData } from '../data/dataDelivery';
import { OrderType } from '../data/dataOrder';
import { OrderDetailType } from '../data/dataOrderDetail';
import CallApi from '../../api/CallApi';
import { CartType, fetchDataDeleteOneCart, fetchDataFindCart, fetchDataUpdate, solveClickCart } from '../data/dataCart';

export interface UserData {
  id: number;
  email: string,
  password: string,
  avatar: string,
  name: string;
}


export interface GlobalContextType {
  language: "EN" | "VI";
  setLanguage: (language: "EN" | "VI") => void;
  user: UserData | undefined;
  setUser: (user: UserData | undefined) => void;
  activeModel: boolean,
  setActiveModel: (activeModel: boolean) => void;
  login: (email: string, password: string) => Promise<DataUsers | undefined>;
  logout: () => void;

  cart: CartType[] | undefined;
  setCart: (cart: CartType[] | undefined) => void;
  hangleClickCart: (productId: number) => Promise<void>;
  deleteCart: (productId: number) => Promise<void>;
  changeNumberCart: (productId: number, value: number) => Promise<void>;
  hangleCountLengthCart: () => Promise<number | undefined>


  product: ProductHome[];
  setProduct: (product: ProductHome[]) => void;
  delivery: Record<string, Record<string, number | Date | boolean>>,
  setDelivery: (delivery: Record<string, Record<string, number | Date | boolean>>) => void;
  order: OrderType[];
  setOrder: (order: OrderType[]) => void;
  orderDetail: OrderDetailType[];
  setOrderDetail: (orderDetail: OrderDetailType[]) => void;
  handleChangeSearch: (event: React.ChangeEvent<HTMLInputElement>) => void;
  search: string;
  setSearch: (search: string) => void;
}

export const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

function debounce<T extends (...args: React.ChangeEvent<HTMLInputElement>[]) => void>(func: T, delay: number): T {
  let timerId: ReturnType<typeof setTimeout>;
  return function (this: React.ChangeEvent<HTMLInputElement>[], ...args: Parameters<T>) {
    if (timerId) clearTimeout(timerId);
    timerId = setTimeout(() => func.apply(this, args), delay);
  } as T;
}

export const GlobalContextProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<"EN" | "VI">("EN");
  const [user, setUser] = useState<UserData | undefined>(undefined);
  const [activeModel, setActiveModel] = useState<boolean>(false);

  const [intifiLanguage, setInfifiLanguage] = useState<boolean>(false);

  const [cart, setCart] = useState<CartType[] | undefined>(undefined);

  // const [isCart, setIsCart] = useState<boolean>(false);
  const [product, setProduct] = useState<ProductHome[]>([]);
  const [delivery, setDelivery] = useState<Record<string, Record<string, number | Date | boolean>>>({});


  const [order, setOrder] = useState<OrderType[]>([]);
  const [orderDetail, setOrderDetail] = useState<OrderDetailType[]>([]);

  const [search, setSearch] = useState<string>('');

  // function: 

  // phần search:
  const handleChangeSearch = useCallback(
    debounce((event: React.ChangeEvent<HTMLInputElement>) => {
      setSearch(event.target.value);
    }, 500), []);

  //Cart:

  const intialCart = useCallback(async () => {

    if (user) {
      setCart(await fetchDataFindCart(user.id));
    } else {
      setCart(undefined);
    }


  }, [user]);

  useEffect(() => {
    intialCart();
  }, [intialCart]);


  useEffect(() => {
    setDelivery(deliveryData["UPS"]);
  }, [])


  const findProductCart = useCallback(async () => {
    if (user) {
      try {
        const data: ProductHome[] | undefined = await CallApi.Get(`cart/findProductByCart/${user.id}`);
        if (data) {
          setProduct(data);
          return data;
        }

      } catch (e) {
        return undefined;
      }
    }


    return undefined;
  }, [user])

  useEffect(() => {
    findProductCart();
  }, [findProductCart, cart])


  const login = async (email: string, password: string) => {
    try {
      const user: DataUsers = await CallApi.Post("user/login", { email, password });
      if (user) {
        localStorage.setItem("auth", user.token);
        return user;
      }
    } catch (e) {
      return undefined;
    }
    return undefined;
  }

  const logout = () => {
    const token = localStorage.getItem("auth");
    if (token) {
      localStorage.getItem("userId");
      localStorage.removeItem("auth");
    }
    setUser(undefined);
    setCart(undefined);
  }

  useEffect(() => {
    const lang = localStorage.getItem("language");
    if (lang) {
      setLanguage(lang === "EN" ? "EN" : "VI");
    }
    setInfifiLanguage(true);
  }, [])

  useEffect(() => {
    if (intifiLanguage) {
      localStorage.setItem("language", language.toString());
    }

  }, [intifiLanguage, language])


  const fetchData = async () => {

    try {
      const token = localStorage.getItem("auth");
      if (!token) {
        return;
      }
      const data = await CallApi.Get("user/me");
      if (!data) {
        if (token) {
          localStorage.removeItem("auth");
        }
        setUser(undefined);
        return;
      }
      setUser(data);
    } catch (e) {
      return;
    }
    return;
  }

  useEffect(() => {
    fetchData();
  }, [])


  const deleteCart = async (productId: number) => {
    const token = localStorage.getItem("auth");
    if (!user || !token) {
      setActiveModel(true);
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
      return;
    } else {
      setActiveModel(false);
    }
    try {
      const data = await fetchDataDeleteOneCart(user.id, productId);
      if (data) {
        setProduct(product.filter(item => item.id !== data.productId));
        return;
      }

      if (token) {
        localStorage.removeItem("auth");
        setUser(undefined);
      }
    } catch (e) {
      console.log(e);
    }
  }
  const changeNumberCart = async (productId: number, value: number) => {
    const token = localStorage.getItem("auth");
    if (!user || !token) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
      setActiveModel(true);
      return;
    } else {
      setActiveModel(false);
    }

    try {
      if (value < 1) value = 1;
      if (value > 1000) value = 1000;
      const data = await fetchDataUpdate({ userId: user.id, productId, quantity: value });
      if (data) {
        setProduct(product.map(item => {
          if (item.id === data.productId) {
            return { ...item, quantity: data.quantity };
          }
          return { ...item };
        }))
        return;
      }
      if (token) {
        localStorage.removeItem("auth");
        setUser(undefined);
      }
    } catch (e) {
      console.log(e);
    }
  }

  const hangleClickCart = async (productId: number) => {
    const token = localStorage.getItem("auth");
    if (!user || !token) {
      localStorage.removeItem("auth");
      setActiveModel(true);
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
      return;
    } else {
      setActiveModel(false);
    }
    const data = await solveClickCart(user.id, productId);
    if (data) {
      if (data.create) {
        setCart(cart ? [...cart, data.create] : undefined);
      } else {
        setCart(data.update);
      }
      return;
    }
    if (token) {
      localStorage.removeItem("auth");
      setUser(undefined);
    }
  }

  const hangleCountLengthCart = async () => {
    const token = localStorage.getItem("auth");
    if (!user || !token) {
      setActiveModel(true);
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
      return;
    } else {
      setActiveModel(false);
    }
    try {
      const data = await fetchDataFindCart(user.id);
      if (data) {
        return data.length;
      }
    } catch (e) {
      return undefined;
    }

    if (token) {
      localStorage.removeItem("auth");
      setUser(undefined);
    }
    return undefined;
  }
  return (
    <GlobalContext.Provider value=
      {{
        language,
        setLanguage,
        user,
        setUser,
        activeModel,
        setActiveModel,
        login,
        logout,
        cart,
        setCart,
        hangleClickCart,
        deleteCart,
        changeNumberCart,
        hangleCountLengthCart,
        product,
        setProduct,
        delivery,
        setDelivery,
        order,
        setOrder,
        orderDetail,
        setOrderDetail,
        handleChangeSearch,
        search,
        setSearch,

      }}>
      {children}
    </GlobalContext.Provider>
  )
}

export const useGlobal = () => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error("useGlobal is not exist");
  }

  const Translate = (code: string) => {
    const { language } = context;
    try {
      return Trans(code.toUpperCase(), language);
    } catch (e) {
      return code;
    }

  }

  return { ...context, Translate }
}