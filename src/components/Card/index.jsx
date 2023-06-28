import { useState, useContext, useEffect } from 'react'

import styles from './Card.module.css'

import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined'
import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import { CartContext } from 'context/Cart'

export default function Card({product}){  
  const [amount, setAmount] = useState(0)  
  const {cart, setCart} = useContext(CartContext)

  useEffect(() => {
    const checkCart = () => {
      cart.forEach((item) => {
        if(item.id === product.id){
          setAmount(item.qty)
        }
      })
    }

    checkCart()
  }, [])

  const addProduct = (p) => {
    const hasProduct = cart.some(item => item.id === p.id)

    if(!hasProduct){
      const product = {
        id: p.id,
        title: p.title,
        img: p.image,
        price: p.price,
        qty: amount
      }
      
      toast.success('Product successfully added!', {
        position: toast.POSITION.TOP_RIGHT
      });
  
      return setCart( lastCart => 
        [...lastCart, product]
      )         

    }

    setCart(lastCart => lastCart.map(item => {
      if(item.id === p.id){
        item.qty = amount;
      }
      return item
    }))
    
  }

  const addQtde = () => {
    const total = amount + 1
    setAmount(total)
  }

  const removeQtde = () => {
    if(amount > 0){
      const total = amount - 1
      setAmount(total)
    }    
  }
  
  return(
    
    <div className={styles.card}>    
      <ToastContainer />
      <div
        className={styles.header_card}
        style={{
          backgroundImage: `url('${product.image}')`
        }}
      >
        <div className="flex justify-between">   
          <FavoriteBorderIcon className={styles.fav_icon}/>
        </div>
      </div>
      <div className="p-4 flex flex-col items-center pb-2">
        <h1 className={styles.title_product}>{product.title}</h1>
        <p className="text-center text-gray-800 font-bold mt-1">${product.price}</p>

        <div className="inline-flex items-center mt-2">          
          <button className={styles.btn_remove} onClick={() => removeQtde()}>
            <RemoveIcon sx={{ fontSize: 18}}/>
          </button>
          <div className={styles.qty}>
            {amount}
          </div>
          <button className={styles.btn_add} onClick={() => addQtde()}>
            <AddIcon sx={{ fontSize: 18}}/>
          </button>
        </div>

        <button 
          className={styles.btn_cart} 
          onClick={() => addProduct(product)}
          disabled={amount === 0}
        >
          Add to cart
          <AddShoppingCartOutlinedIcon className='ml-3'/>
        </button>
      </div>
    </div>
  )
}