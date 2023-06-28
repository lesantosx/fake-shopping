
import { Outlet } from "react-router-dom"

import Footer from "components/Footer"
import Header from "components/Header"

import { ProductsProvider } from "context/Products"

export default function Base(){
  return (
    <main>
      <ProductsProvider>
        <Header />      
          <Outlet />
        <Footer />
      </ProductsProvider>     
    </main>
  )
}