'use client'
import Link from "next/link"


export default function Page() {

  return (
    <main >
       <input placeholder='login'/>
       <input placeholder='password'/>
       <Link href="/login">LOGIN</Link>
    </main>
  )
  

}
