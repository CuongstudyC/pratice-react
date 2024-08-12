import { faker } from "@faker-js/faker";

export interface ProductHome {
  id:number;
  isStatus: boolean
  img: string[]
  title: string;
  description: string;
  price: number;
  oldPrice?: number;
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