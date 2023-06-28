import styles from './Banner.module.css'

export default function Banner(){
  return(
    <div className={styles.banner}>      
      <img className='cursor-pointer' src='banner.png' alt=""/>        
    </div>
  )
}