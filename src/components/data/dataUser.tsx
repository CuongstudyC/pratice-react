export interface DataUsers{
  id: number,
  email: string,
  password: string,
  name: string,
  role: string,
  avatar: string;
  phone: string;
  address: string;
}


export const Users: DataUsers[] = [
  {
    id: 1,
    email: "123@gmail.com",
    password: "123",
    name: "User1",
    role: "Customer",
    avatar: "A1.jpg",
    phone:"732-123-4567",
    address: "4706 Pooz Street, Bayville, New Jersey(NJ)"
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