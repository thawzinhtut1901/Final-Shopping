import { RouteObject } from "react-router-dom";
import { Home, ProductDetails } from "../pages";
import PrivancyPolicy from "../pages/Term";

const UserRouter: RouteObject[] = [
    
  {
      path: "/",
      element: <Home sort={""} categories={""}/>,
  },

  {
    path: "/product/:id",
    element: <ProductDetails sort={""} categories={""}/>
  },  
      {
    path: "/policy",
    element: <PrivancyPolicy/>
  }
]

export default UserRouter;
