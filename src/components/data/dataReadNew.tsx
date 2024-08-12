import { faker } from "@faker-js/faker";
import CallApi from "../../api/CallApi";

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


export const fetchDataReadNew = async () => {
  try {
    const data: ReadNewType[] | undefined = await CallApi.Get("readNew");
    if(data) {
      return data;
    }
  }catch(e) {
    return undefined;
  }
  return undefined;
}