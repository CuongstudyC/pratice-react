import { ReactElement } from "react";
import Cart from "../cart/Cart";
import Translation from "../classComponents/Translation";
import Home from "../home/Home";
import Product from "../product/Product";
import EventPage from "../event/EventPage";
import CheckOutPage from "../checkOut/CheckOutPage";
import ProductDetail from "../productDetail/ProductDetail";
import OfferPage from "../offer-history/OfferPage";



interface DataRoute {
  id: number;
  element: import("react").ReactElement;
  path: string;
  name?: ReactElement
}

 const DataRoutes: DataRoute[] = [
  {
    id: 1,
    element: <Home />,
    path: "/pratice-react/",
    name: <Translation>Home</Translation>
  },
  {
    id: 2,
    element: <Product />,
    path: "/pratice-react/Product",
    name: <Translation>Shop</Translation>
  },
  {
    id:3,
    element: <OfferPage></OfferPage>,
    path: "/pratice-react/Offers",
    name: <Translation>Offers</Translation>
  },
  {
    id:4,
    element: <Home></Home>,
    path: "/pratice-react/Story",
    name: <Translation>Story</Translation>
  },
  {
    id:5,
    element: <Home></Home>,
    path: "/pratice-react/Blog",
    name: <Translation>Blog</Translation>
  },
  {
    id:6,
    element: <Cart></Cart>,
    path: "/pratice-react/Cart",
    name: <Translation>Cart</Translation>
  },
  {
    id:7,
    element: <EventPage></EventPage>,
    path: "/pratice-react/Event",
    name: <Translation>Event</Translation>
  },
  {
    id:8,
    element: <CheckOutPage></CheckOutPage>,
    path: '/pratice-react/CheckOut',
  },
  {
    id:9,
    element: <ProductDetail></ProductDetail>,
    path: '/pratice-react/Product/:id'
  }
  
];

export default DataRoutes;
