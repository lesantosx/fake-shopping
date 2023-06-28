import { Link } from 'react-router-dom'

import styles from './Showcase.module.css'
import Card from "components/Card"

export default function Showcase({title, products, showBtn = true}) {

  return(
    <section id="showcase" className={styles.showcase}>
      <h2 className={styles.title}>{title}</h2>

      <div className={styles.cards}>
        {products.map((p) => {
          return (
            <Card key={p.id} product={p}/>
          )
        })}
      </div>

      {showBtn &&
        <div className='mt-14'>
          <Link to="/products/all" className={styles.btn__view}>View All Products</Link>
        </div>        
      }           

    </section>
  )
}