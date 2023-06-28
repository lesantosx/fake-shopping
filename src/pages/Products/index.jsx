import {useEffect, useContext, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { API_BASE } from 'api'

import Typography from '@mui/material/Typography'
import Breadcrumbs from '@mui/material/Breadcrumbs'
import Link from '@mui/material/Link'

import styles from './Products.module.css'
import Showcase from 'components/Showcase'
import Loader from 'components/Loader'

import { ProductsContext } from 'context/Products'
import { CategoriesContext } from 'context/Categories'

export default function Products(){
  const { category } = useParams()

  const { products, setProducts } = useContext(ProductsContext)
  const { categories, setCategories } = useContext(CategoriesContext)

  useEffect(() => {
    const getCategories = async () => {
      await axios.get(`${API_BASE}/products/categories`).then((res) => {
        setCategories(res.data)
      })
    }

    const getProducts = async () => {
      const param = category === 'all' ? '' : `/category/${category}`

      await axios.get(`${API_BASE}/products${param}`).then((res) => {
        setProducts(res.data)
      })      
    } 

    getCategories()
    getProducts()
  },[])

  return (    
    <center>    
      {products.length <= 0 ? (
         <Loader />
      ) 
      : (
        <>
          <div role="presentation" className={styles.bread}>
            <Breadcrumbs aria-label="breadcrumb">
              <Link underline="hover" color="inherit" href="/">
                Home
              </Link>
              <Typography color="text.primary">Products</Typography>
            </Breadcrumbs>
          </div>
          
          <div className={styles.products}>
            
            <div className={styles.filters}>
              <div>
                  <h6 className="font-bold text-black mb-5 text-left mr-3">Category</h6>
                  {categories.map((category) =>{
                    return(
                      <div key={category} className="flex mb-2 items-center">
                        <Link 
                          underline="none"
                          className='text-gray-500 hover:text-black capitalize cursor-pointer' 
                          color="text-gray-500" 
                          href={`/products/${category}`}
                        >
                          {category}
                        </Link>
                      </div>
                    )
                  })}
                </div>
            </div>
            <div>
              <Showcase products={products} showBtn={false}/>
            </div>
          </div> 
        </> 
      )}
    </center>    
  )

}