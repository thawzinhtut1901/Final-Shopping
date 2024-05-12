import { Route, Routes, useRoutes } from 'react-router-dom'

import { AdminRouter, UserRouter } from './routers'
import { Footer, Header, SideBar } from './components'

function App() {
  const UserRouting = useRoutes(UserRouter);
  const AdminRouting = useRoutes(AdminRouter);
  return (
     <div>
      <Routes>
        <Route path="/admin/*" element={AdminRouting}/>
      </Routes>
      <Header/>
      <Routes>
        <Route path="/*" element={UserRouting}/>
      </Routes>
      <SideBar/>
      <Footer/>

      
     </div>
    
  )
}

export default App
