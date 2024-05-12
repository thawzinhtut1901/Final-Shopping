import { RouteObject } from "react-router-dom"
import { AdminDashboard } from "../components"


const AdminRouter: RouteObject[] = [
  {
    path: "/admin",
    element: <AdminDashboard/>
  }
]

export default AdminRouter