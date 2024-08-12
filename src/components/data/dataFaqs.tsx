import { faker } from "@faker-js/faker";

export interface FaqsType {
  id: number;
  title: string;
  content: string;
}

export const FaqsLeft: FaqsType[] = Array(3).fill(null).map((_,index) => (
   {
    id:index,
    title: faker.lorem.words({min:1,max:10}),
    content: faker.word.words({count:50})
   }
)); 

export const FaqsRight: FaqsType[] = Array(4).fill(null).map((_,index) => (
  {
   id:index,
   title: faker.lorem.words({min:1,max:2}),
   content: faker.word.words({count:50})
  }
)); 