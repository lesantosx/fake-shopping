import {useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import Typography from '@mui/material/Typography'
import Breadcrumbs from '@mui/material/Breadcrumbs'
import Link from '@mui/material/Link'
import ClearIcon from '@mui/icons-material/Clear'
import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'

import styles from './Cart.module.css'
import { CartContext } from 'context/Cart'

export default function Cart(){
  const navigate = useNavigate()
  const {cart, setCart} = useContext(CartContext)
  const [total, setTotal] = useState(0)
  const [cupon, setCupon] = useState(false)

  useEffect(() => {
    const getTotalItems = () => {
      const value = cart.reduce(function(total,object){ 
        return total + object.price * object.qty
      },0); 

      setTotal(value)
    }

    getTotalItems()
  }, [])

  const removeProduct = (productId) => {
    const newCart = cart.filter(item => item.id !== productId)
    setCart(newCart)    

    if(newCart.length === 0){
      setTotal(0)
      return
    }

    const value = newCart.reduce(function(total,object){ 
      return total + object.price * object.qty
    },0); 

    setTotal(value)
  }

  const updateQty = (product, update) => {
    if(product.qty > 0) {
      setCart(lastCart => lastCart.map(item => {
        if(item.id === product.id){
          item.qty = update === 'add' ? item.qty + 1 : item.qty - 1
        }
        return item
      }))
      
      const value = cart.reduce(function(total,object){ 
        return total + object.price * object.qty
      },0); 
  
      setTotal(value)
    }    
  }
  
  return (
    <section className={styles.cart}>
      <div role="presentation">
        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" color="inherit" href="/">
            Home
          </Link>
          <Typography color="text.primary">Cart</Typography>
        </Breadcrumbs>
      </div>

      <div className='mt-10 flex'>
        <div className='mr-3'>
          <div className={styles.head}>
            <span className='font-normal'>Product</span>
            <span className='font-normal'>Price</span>
            <span className='font-normal'>Quantity</span>
            <span className='font-normal'>Total</span>
            <span className='font-normal'></span>
          </div>          
          {cart.map((item) => {
            return(
              <div key={item.id}  className={styles.body}>
                <span className={styles.product__name}>
                  <img src={item.img} alt="" className={styles.products__img}/>
                  <span className='ml-4 mt-4'>{item.title}</span>
                </span>
                <span className='font-normal'>${item.price}</span>
                <div className={styles.product__qty}>
                  <RemoveIcon 
                    sx={{ fontSize: 16}} 
                    className='cursor-pointer' 
                    onClick={() => updateQty(item, 'remove')}
                  />
                  <span className='ml-2 mr-2'>{item.qty}</span>
                  <AddIcon 
                    sx={{ fontSize: 16}} 
                    className='cursor-pointer'
                    onClick={() => updateQty(item, 'add')}
                  />                 
                </div>                
                <span className='font-normal'>${item.price * item.qty}</span>
                <ClearIcon className={styles.delete_btn} onClick={() => removeProduct(item.id)}/>
              </div>
            )
          })}         
          
          
        </div>

        <div className={styles.resume}>
          <h1 className='mb-4'>Order Summary</h1>
          <hr />
          <div className={styles.resume_details}>
            <span className='text-gray-500'>Subtotal</span>
            <span>${total}</span>
          </div>
          <div className={styles.resume_details}>
            <span className='text-gray-500'>Shipping</span>
            <span>Free</span>
          </div>
          <div className={styles.resume_details}>
            <span className='text-gray-500'>Total</span>
            <span>${total}</span>
          </div>
          <div className='mt-4 mb-4'>            
            <button 
              className={styles.coupon__btn} 
              onClick={() => setCupon(!cupon)}
            >
              Add cupon code {cupon ?  '-' : '+'}
            </button>
            <input type='text' className={cupon ? styles.show : styles.hidden} />
          </div>
          <hr />
          <button 
            className={styles.process} 
            onClick={() => navigate('billing')}
            disabled={cart.length === 0}
          >
            Process to checkout
          </button>
        </div>

      </div>      
    </section>
  )

}