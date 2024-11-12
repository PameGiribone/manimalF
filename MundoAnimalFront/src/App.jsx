import { Route, Routes } from "react-router-dom";
import "../src/Style/header.css"
import "../src/Style/home.css"
import "../src/Style/footer.css"
import "../src/Style/weAre.css"
import "../src/Style/contact.css"
import "../src/Style/wpp.css"
import "../src/Style/productCategory.css"
import "../src/Style/cardProduct.css"
import "../src/Style/login.css"
import "../src/Style/Register.css"
import "../src/Style/popover.css"
import "../src/Style/productManagement.css"
import "../src/Style/mediasQuery.css"
import "../src/Style/changePassword.css"
import Header from './Components/Header'
import Home from "./Page/Home";
import Footer from "./Components/Footer";
import WeAre from "./Page/WeAre";
import Contact from "./Page/Contact";
import Wpp from "./Components/Wpp";
import ProductCategory from "./Page/ProductCategory";
import Login from "./Page/Login";
import Register from "./Page/Register";
import ProductManagement from "./Page/ProductManagement";
import ChangePassword from "./Page/ChangePassword";
// import CardTips from "./Components/CardTips";

function App() {
 

  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/ourcompany" element={<WeAre/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/product/categories/:id" element={<ProductCategory/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/productManagement" element={<ProductManagement/>}/>
        <Route path="/changePassword" element={<ChangePassword/>}/>
      </Routes>
      <Wpp  />
      <Footer/>
    </>
  )
}

export default App
