import { Link } from "react-router-dom"
import styles from './Header.module.css'

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined'
import SearchIcon from '@mui/icons-material/Search'

export default function Header(){
 

  return (
    <header className={styles.nav}>
      <div className="container mx-auto px-4 py-8 flex items-center">
       
        <div className={styles.logo}>
          <img src="/logo.png" alt="" style={{height: 50}}/>
        </div>

        <nav>
          <Link className={styles.link} to="/">Home</Link>
          <Link className={styles.link} to="/products/all">Products</Link>
          <Link className={styles.link} to="/">Contact</Link>
          <Link className={styles.link} to="/login">Sign up</Link>
        </nav>
        
        <nav className="contents">
          <div className='max-w-md mx-auto'>
            <div className={styles.search}>
              <div className="grid place-items-center h-full w-12 text-gray-300">
                <SearchIcon />
              </div>

              <input
                className={styles.search__input}
                type="text"
                id="search"
                placeholder="What are you looking for?" 
              /> 
            </div>
          </div>
          <ul className="ml-4 xl:w-48 flex items-center justify-end">
            <li className={styles.icons}>
              <AccountCircleIcon />
            </li>
            <li className={styles.icons}>
              <FavoriteOutlinedIcon />
            </li>
            <li className={styles.icons}>
              <Link to="/cart"><ShoppingCartIcon /></Link>
            </li>
          </ul>
        </nav>
      </div>
      
      <hr/>
    </header>
  )
}