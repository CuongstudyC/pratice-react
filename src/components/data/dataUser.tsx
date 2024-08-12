import { faker } from "@faker-js/faker";
import CallApi from "../../api/CallApi";

export interface DataUsers{
  id: number,
  email: string,
  password: string,
  name: string,
  avatar: string;
  token:  string;
}


export const Users: DataUsers[] = [
  {
    id: 6,
    email: "123@gmail.com",
    password: "123",
    name: "User1",
    avatar: "A1.jpg",
    token: ""
  }
]

export const validateUser = (email:string, password: string) => {
  const findUser = Users.find(item => item.email === email && item.password === password);
  if(findUser) {
    return findUser;
  }
  return null;
}

export const getUserById = (id: number) => {
    return Users.find(item => item.id === id);
}


export const fetchDataRegister = async ({name, password, email} :
   {name : string, password: string, email: string}) => {
  try {
    const avatar = faker.image.url({width:36,height:36});
    const data : DataUsers = await CallApi.Post("user/create",{name, password, email, avatar});
    if(data) {
      return data;
    }
  }catch(e) {
    return undefined;
  }
  return undefined;
}
