import { RouteObject } from "react-router-dom";
import { Home, ProductDetails } from "../pages";


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
    element: <TermOfUse/>
  }
  
]

export default UserRouter;
