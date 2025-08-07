"use client";
import styles from './header.module.css'
import Link from 'next/link'; 


export default function header() {

  return (
    <header  className={styles.header}>
        <h1>header</h1>
        <Link href="/account" className={styles.Link}>account</Link>
        <Link href="/1" className={styles.Link}>2</Link>
        <Link href="/2" className={styles.Link}>3</Link>
        <Link href="/3" className={styles.Link}>4</Link>
    </header>
    
  )
  

}
