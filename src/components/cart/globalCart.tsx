import { createContext, ReactNode, useContext, useEffect, useState } from 'react';

export interface CartGlobalType {
  name: string;
  setName: (name: string) => void;
  phone: string;
  setPhone: (phone: string) => void;
  address: string;
  setAddress: (address: string) => void;
  error: string;
  setError: (error: string) => void;
  checkActive: boolean;
  setCheckActive: (checkActive: boolean) => void;
}


export const GlobalContextCart = createContext<CartGlobalType | undefined>(undefined);

export const GlobalContextCartProvides = ({ children }: { children: ReactNode }) => {
  const [name, setName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [address, setAddress] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [checkActive, setCheckActive] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  //function:
  useEffect(() => {
    const saveInformation = localStorage.getItem("information");
    if (saveInformation) {
      const info = JSON.parse(saveInformation);
      if(info['active']) {
        setName(info["name"]);
        setPhone(info["phone"]);
        setAddress(info["address"]);
        setCheckActive(true);
      }
    }
    setLoading(true);

  }, [])

  useEffect(() => {
    if (loading) {
      const info = localStorage.getItem("information");
      if (info && !checkActive) {
        localStorage.removeItem("information");
      }
    }
  }, [checkActive, loading])

  return (
    <GlobalContextCart.Provider value={{
      name,
      setName,
      phone,
      setPhone,
      address,
      setAddress,
      error,
      setError,
      checkActive,
      setCheckActive
    }}>{children}
    </GlobalContextCart.Provider>
  )
}

export const useGlobalCart = () => {
  const context = useContext(GlobalContextCart);

  if (!context) {
    throw new Error("not exist contextCart");
  }

  return context;
}