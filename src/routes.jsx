import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from "pages/Home"
import Products from "pages/Products"
import Cart from "pages/Cart"
import Base from "pages/Base"
import Login from "pages/Login"
import Billing from "pages/Billing"
import NotFound from "pages/NotFound"

import { UserProvider } from "context/User"
import { CategoriesProvider } from "context/Categories"
import { CartProvider } from "context/Cart"

export default function AppRoutes() {

  return (
    <BrowserRouter> 
      <UserProvider>  
        <Routes>                   
          <Route path="/" element={
            <CartProvider>
              <Base />
            </CartProvider>            
          }
        >
            <Route index element={<Home />}></Route>            
            <Route path="products/:category" element={
              <CategoriesProvider>
                <Products />
              </CategoriesProvider>              
            }>
            </Route>
            <Route path="cart" element={<Cart />}></Route>       
            <Route path="cart/billing" element={<Billing />}></Route>       
            <Route path="login" element={<Login />}></Route>                  
            <Route path="*" element={<NotFound />}></Route>
          </Route>
        </Routes>   
      </UserProvider>     
    </BrowserRouter>
  )
}