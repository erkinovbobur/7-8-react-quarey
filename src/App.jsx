import { Routes,Route } from "react-router-dom"
import Nav from "./components/Nav"
import Products from "./routes/product/Products"
import Login from "./routes/login/Login"

function App() {

  return (
    <>
    <Nav/>
   <Routes>
  <Route path="/"  element={<Products/>} />
  <Route path="/login"  element={<Login/>} />
   </Routes>
    </>
  )
}

export default App
