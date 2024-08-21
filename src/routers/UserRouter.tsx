import { RouteObject } from "react-router-dom";
import { Home, ProductDetails } from "../pages";
import TermOfUse from "../pages/Term";

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
    path: "/howtcuwork/terms",
    element: <TermOfUse/>
  }
  
]

export default UserRouter;
