'use client'

import styles from './page.module.css'
import Link from 'next/link'
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import '../../globals.css'

export default function Page() {

    return (
        <div className='wrapper'>
            <Header />
            <main className={styles.text}>
                <Link href="/login">LOGIN</Link><br/>
                <Link href="/signup">SIGNUP</Link>
            </main>
            <Footer />
        </div>

    )


}
