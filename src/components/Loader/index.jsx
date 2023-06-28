import styles from './Loader.module.css'

export default function Loader(){
  return(
    <div className={styles.loading}>
      <img className={styles.img} src="/loading.gif" alt=""/>
    </div>
  )
}