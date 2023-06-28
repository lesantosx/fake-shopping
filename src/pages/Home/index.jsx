import { useEffect, useContext } from 'react'
import axios from 'axios'
import { API_BASE } from 'api'

import styles from './Home.module.css'
import Showcase from 'components/Showcase'
import Loader from 'components/Loader'
import Banner from 'components/Banner'

import { ProductsContext } from 'context/Products'

export default function Home(){
  const { products, setProducts } = useContext(ProductsContext)

  useEffect(() => {
    const getProducts = async () => {      
      await axios.get(`${API_BASE}/products?limit=8`).then((res) => {
        setProducts(res.data)
      }) 
    }    
    
    getProducts()    
  },[])

  return (
    <center className={styles.home}>
      {products.length <= 0 ? (
        <Loader />
      ) 
      : (
        <>
          <Banner />      
          <div className={styles.banner_title}>
            <div className={styles.bloco}></div>
            <h3 className={styles.subtitle}>This Month</h3>
          </div>
          <Showcase title="Best Selling Products" products={products}/>
        </>
        
      )}
      
    </center>
  )
}