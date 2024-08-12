import CallApi from "../../api/CallApi";

export interface CartType {
  userId: number;
  productId: number;
  quantity: number;
}

export const fetchDataCreate = async ({ userId, productId }: { userId: number, productId: number }) => {
  try {
    const data: CartType | undefined = await CallApi.Post("cart", { userId, productId });
    if (data) {
      return data;
    }
  } catch (e) {
    return undefined;
  }
  return undefined;
}

export const fetchDataUpdate = async ({ userId, productId, quantity }: CartType) => {
  try {
    const data: CartType | undefined = await CallApi.Put("cart", { userId, productId, quantity });
    if (data) {
      return data;
    }
  } catch (e) {
    return undefined;
  }
  return undefined;
}

export const fetchDataDelete = async (userId: number) => {
  try {
    const data: CartType[] | undefined = await CallApi.Delete(`cart/${userId}`);
    if (data) {
      return data;
    }
  } catch (e) {
    return undefined;
  }
  return undefined;
}

export const fetchDataFindCart = async (userId: number) => {
  try {
    const data: CartType[] | undefined = await CallApi.Get(`cart/${userId}`);
    if (data) {
      return data;
    }
  } catch (e) {
    return undefined;
  }
  return undefined;
}

export const fetchDataDeleteOneCart = async (userId: number, productId: number) => {
  try {
    const data: CartType | undefined = await CallApi.Delete(`cart/${userId}/${productId}`);
    if (data) {
      return data;
    }
  } catch (e) {
    return undefined;
  }
  return undefined;
}

export const fetchDataTotalQuantityCart = async (userId: number) => {
  try {
    const data = await CallApi.Get(`cart/totalPrice/${userId}`);
    if (data) {
      return data.sum;
    }
  } catch (e) {
    return undefined;
  }
  return undefined;
}

export const fetchDataFindDetailCart = async (userId: number, productId: number) => {
  try {
    const data: CartType | undefined = await CallApi.Get(`cart/detailCart/${userId}/${productId}`);
    if (data) {
      return data;
    }
  } catch (e) {
    return undefined;
  }
  return undefined;
}

export const solveClickCart = async (userId: number, productId: number) => {
  try {
    const findCart = await fetchDataFindDetailCart(userId, productId);
    if (!findCart) {
      const dataCreate = await fetchDataCreate({ userId, productId });
      if (dataCreate) {
        return {create: dataCreate};
      }
    }
    const dataUpdate = await fetchDataUpdate({ userId, productId, quantity: findCart ? findCart.quantity + 1 : 1 });
    if (!dataUpdate) {
      return undefined;
    }
    const finalData = await fetchDataFindCart(userId);
    if (finalData) {
      return {update : finalData}
    }

  } catch (e) {
    const dataCreate = await fetchDataCreate({ userId, productId });
    if (dataCreate) {
      return {create: dataCreate};
    }
  }
  return undefined;
}