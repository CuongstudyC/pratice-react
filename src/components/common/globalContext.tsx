import { createContext, ReactNode, useCallback, useContext, useEffect, useState } from 'react'
import { DataUsers, getUserById, validateUser } from '../data/dataUser';
import { Tranlate as Trans } from '../data/Tranlate';
import { ProductHome, Products } from '../data/dataProduct';
import { deliveryData } from '../data/dataDelivery';
import { OrderType } from '../data/dataOrder';
import { OrderDetailType } from '../data/dataOrderDetail';

export interface UserData {
  email: string,
  password: string,
  avatar: string,
  name: string;
  phone: string;
  address: string
}


export interface GlobalContextType {
  language: "EN" | "VI";
  setLanguage: (language: "EN" | "VI") => void;
  user: UserData | undefined;
  setUser: (user: UserData | undefined) => void;
  activeModel: boolean,
  setActiveModel: (activeModel: boolean) => void;
  login: (email: string, password: string) => DataUsers | null;
  logout: () => void;
  cart: Record<number, number>;
  setCart: (cart: Record<number, number>) => void;
  deleteCart: (id: number) => void;
  changeNumberCart: (id: number, value: number) => void;
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
  const [cart, setCart] = useState<Record<number, number>>({});
  const [isCart, setIsCart] = useState<boolean>(false);
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




  useEffect(() => {
    setDelivery(deliveryData["UPS"]);
  }, [])


  useEffect(() => {
    setProduct(Products.filter(item => Object.keys(cart).find(c => c === item.id.toString())));
  }, [cart])


  useEffect(() => {
    const localCart = localStorage.getItem("cart");
    if (localCart) {
      setCart(JSON.parse(localCart));
    }
    setIsCart(true);
  }, [])


  useEffect(() => {
    if (isCart) {
      if (cart) {
        localStorage.setItem("cart", JSON.stringify(cart));
      }
    }
  }, [isCart, cart]);


  const login = (email: string, password: string) => {
    const user = validateUser(email, password);
    if (user) {
      localStorage.setItem("userId", user.id.toString());
      return user;
    }
    return null;
  }

  const logout = () => {
    const userid = localStorage.getItem("userId");
    if (userid) {
      localStorage.removeItem("userId");
    }
    setUser(undefined);
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

  useEffect(() => {
    const userid = localStorage.getItem("userId");
    if (userid) {
      setUser(getUserById(Number(userid)));
    }
  }, [])

  const deleteCart = (id: number) => {
    try {
      delete cart[id];
      const newCart = { ...cart };
      setCart(newCart);
      setProduct([...product].filter(item => item.id != id));
    } catch (e) {
      console.log(e);

    }
  }
  const changeNumberCart = (id: number, value: number) => {
    try {
      if (value < 1) value = 1;
      if (value > 100) value = 100;
      const newCart = { ...cart };
      setCart({ ...newCart, [id]: value });
    } catch (e) {
      console.log(e);
    }
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
        deleteCart,
        changeNumberCart,
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