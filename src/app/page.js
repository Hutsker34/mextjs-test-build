import Landing from './landing/page'
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import './globals.css'

export default function Page() {

  return (
    <div className='wrapper'>
        <Header />
        <Landing/>
        <Footer />
    </div>
    
    
  )
  

}
