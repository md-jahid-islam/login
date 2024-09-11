
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import { ToastContainer } from 'react-toastify'
import Register from './Pages/Register'
import ResetPass from './Pages/ResetPass'
import Login from './Pages/Login'
import LayoutsOne from './Layouts/LayoutsOne'
import database from './Firebase/Firebase.Config'
database
function App() {
  const route = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path='/' element = {<LayoutsOne/>} >
        <Route path='/Login' element =  {<Login/>} />
        <Route path='/register' element =  {<Register/>} />
        <Route path='/resetpass' element =  {<ResetPass/>} />
        
        
        </Route>


      </Route>
    )
  )

  return (
    <>
     <ToastContainer />

    <RouterProvider router={route} />

    </>
  )
}

export default App
