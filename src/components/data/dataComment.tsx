import { faker } from "@faker-js/faker";

export interface CommentType {
  id: number;
  name: string;
  rating: number;
  avartar: string;
  content: string;
  date: Date;
}


export const Comment: CommentType[] = Array(20).fill(null).map((_,index) => (
  {
    id: index,
    name: faker.lorem.words({min:1, max:3}),
    rating: Math.floor(Math.random()*5) +1,
    avartar: faker.image.url({width:44,height:44}),
    content: faker.word.words({count:30}),
    date: new Date()
  }
))
