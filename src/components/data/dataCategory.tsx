import CallApi from "../../api/CallApi";

export interface CategoryType {
  id: number;
  name: string;
}

export const fetchDataCategory = async () => {
  try {
    const data : CategoryType[] | undefined = await CallApi.Get("category");
    if(data) {
      return data;
    }
  }catch(e) {
    return undefined;
  }
  return undefined;
}