import {useContext, useEffect, useState } from 'react'
import Typography from '@mui/material/Typography'
import Breadcrumbs from '@mui/material/Breadcrumbs'
import Link from '@mui/material/Link'

import styles from './Billing.module.css'
import { CartContext } from 'context/Cart'
import Input from 'components/Input'
import SuccessfulPurchase from 'components/SuccessfulPurchase'

export default function Billing(){
  const {cart, setCart} = useContext(CartContext)
  const [total, setTotal] = useState(0)
  const [billing, setBilling] = useState('bank')
  const [completedPurchase, setCompletedPurchase] = useState(false)

  useEffect(() => {
    const getTotalItems = () => {
      const value = cart.reduce(function(total,object){ 
        return total + object.price * object.qty
      },0); 

      setTotal(value)
    }

    getTotalItems()
  }, [])
  
  return (
    <section className={styles.cart}>
      

      {completedPurchase ? (
          <SuccessfulPurchase />
      ) : (
        <>
          <div role="presentation">
            <Breadcrumbs aria-label="breadcrumb">
              <Link underline="hover" color="inherit" href="/">
                Home
              </Link>
              <Link underline="hover" color="inherit" href="/cart">
                Cart
              </Link>
              <Typography color="text.primary">CheckOut</Typography>
            </Breadcrumbs>
          </div>
          
          <div className={styles.billing}>
            <div className='mr-3'>
              <Input type='text' label='Name'/>
              <Input type='text' label='Street Address'/>
              <Input type='text' label='Town/City'/>
              <Input type='text' label='Phone Number'/>
              <Input type='text' label='Emaill Address'/>
              <div className='mt-5'>
                <input type='checkbox' checked/>
                <span className='ml-5'>Save this information for faster check-out next time</span>        
              </div>
              
            </div>

            <div className={styles.resume}>
              <h1 className='mb-4'>Order Summary</h1>
              <hr />
              <div className={styles.resume_details}>
                <span className='text-gray-500'>Subtotal</span>
                <span className=''>${total}</span>
              </div>
              <div className={styles.resume_details}>
                <span className='text-gray-500'>Shipping</span>
                <span>Free</span>
              </div>
              <div className={styles.resume_details}>
                <span className='text-gray-500'>Total</span>
                <span>${total}</span>
              </div>          
              <hr className='mt-4'/>
              <div className='mt-4'>
                <input 
                  type="radio" 
                  name="billing" 
                  value="bank" 
                  className={styles.input_radius}
                  onClick={() => setBilling('bank')}  
                  checked            
                />
                <span for="billing">Bank</span>            
              </div>
              <div className='mt-4'>
                <input 
                  type="radio"
                  name="billing" 
                  value="cash" 
                  className={styles.input_radius}
                  onClick={() => setBilling('cash')}
                />
                <span for="billing">Cash on delivery</span>
              </div>
              {billing === 'bank' ? (
                <div>
                  <Input type='text' placeholder='Card Number' />
                  <Input type='text' placeholder="Cardholder's Name" />
                  <div className='flex mt-3'>
                    <input 
                      type='text' 
                      className={styles.input__payment}                   
                      placeholder='EXP. Date'
                      maxLength='4'
                      required
                    />
                    <input 
                      type='password' 
                      className={styles.input__payment}                    
                      placeholder='CVC Number'
                      maxLength='3'
                      required
                    />
                  </div>             
                  
                </div>

              ) : (
                <div></div>
              )}  
              <button 
                className={styles.process} 
                onClick={() => setCompletedPurchase(true)}
              >
                Place Order
              </button>
            </div>

          </div>  
        </>
      )}

          
    </section>
  )

}