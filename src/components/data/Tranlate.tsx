
export type Language = "EN" | "VI";

export const DataLanguage :Record<string, Record<string,string>> = {
  HOME: {
    EN: "Home",
    VI: "Trang chủ"
  },
  SHOP:{
    EN:"Shop",
    VI:"Cửa Hàng"
  },
  OFFERS:{
    EN: "Offers",
    VI: "Dịch vụ"
  },
  STORY: {
    EN: "Our Story",
    VI: "Câu chuyện",
  },
  BLOG: {
    EN: "Blog",
    VI: "Blog"
  },
  CART: {
    EN: "Cart",
    VI: "Giỏ hàng"
  },
  "SEARCH PRODUCT":{
    EN: "Search Product...",
    VI: "Tìm kiếm sản phẩm..."
  },
  NOCART: {
    EN: "Empty Cart",
    VI: "Ko có hàng"
  },
  EVENT: {
    EN: "Event",
    VI: "Sự kiện"
  }
}


export  function Tranlate(code: string, language: string) {
  return DataLanguage[code][language];
}