import { faker } from "@faker-js/faker";
import CallApi from "../../api/CallApi";

export interface ProductHome {
  id:number;
  isStatus: boolean
  img: string[]
  title: string;
  description: string;
  price: number;
  oldPrice?: number;
  quantity?: number;
}

export const Products: ProductHome[] = Array(50).fill(null).map((_,index) => ({
  id: index,
  isStatus: Math.random() < 0.5,
  img: [
    faker.image.url({width:276,height:334}),
    faker.image.url({width:276,height:334}),
    faker.image.url({width:276,height:334}),
    faker.image.url({width:276,height:334})
  ],
  title: faker.commerce.product(),
  description: faker.commerce.productDescription(),
  price: Number(faker.commerce.price({min:10,max:100})),
  oldPrice: Number(faker.commerce.price({min:10, max: 100})),
}))


export const Limit4 = async (isStatus?: boolean) => {
  try {
    const data: ProductHome[] = await CallApi.Get(`product/search?${isStatus? 'isStatus=true': '' }&limit=4&reverse=true`);
    if (data) {
      return data;
    }
  } catch (e) {
    return undefined;
  }
  return undefined;
}

export const FindOneProduct = async (id: number) => {
  try {
    const data: ProductHome | undefined = await CallApi.Get(`product/${id}`);
    if(data) {
      return data;
    }
  }catch(e) {
    return undefined;
  }
  return undefined;
}

export const ShowListProduct = async (
  {name, sortBy ,page, limit, categoryId ,reverse = false} : 
  {page?: number, name?: string, sortBy?: string, limit?: number,categoryId?: number ,reverse?: boolean}) => {
  try {

    const data : ProductHome[] = await CallApi.Get(`product/search?${name ? `name=${name}&`: ''}${sortBy ? `sortBy=${sortBy}&`: ''}${page ? `page=${page}&`: ''}${limit ? `limit=${limit}&`: ''}${categoryId ? `categoryId=${categoryId}&` :''}${reverse ? `reverse=${reverse}` : '' }`);
    if(data) {
      return data;
    }
  }catch(e) {
    return undefined;
  }
  return undefined;
}

