import { faker } from "@faker-js/faker";

export interface ReadNewType {
  id: number;
  title: string;
  content: string;
  fullContent: string;
}

export const ReadNew: ReadNewType[] = Array(20).fill(null).map((_,index) => ({
    id:index,
    title: faker.lorem.words( {min: 1, max: 2}),
    content: faker.word.words({count:10}),
    fullContent: faker.word.words({count:100})
}))