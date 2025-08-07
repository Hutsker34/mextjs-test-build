"use client";

import styles from './footer.module.css'



export default function footer() {
    function getLogs(id){
        console.log(id)
        alert(id)
    }

  return (
    <footer  className={styles.footer}>
        <h1>footer</h1>
        <span  onClick={() => getLogs(1)} className={styles.span}>1</span>
        <span  onClick={() => getLogs(2)} className={styles.span}>2</span>
        <span  onClick={() => getLogs(3)} className={styles.span}>3</span>
        <span  onClick={() => getLogs(4)} className={styles.span}>4</span>
    </footer>
    
  )
  

}
