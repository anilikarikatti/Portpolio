import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
// import additonal from '../styles/additional.css'
import Home from './components/home'
import Projects from './components/projects'
import About from './components/about'
import Link from 'next/link'
import Contact from './components/contact'



const inter = Inter({ subsets: ['latin'] })

 export function Main1() {
  return (
    <>
     <Head>
     <link rel="preconnect" href="https://fonts.googleapis.com"/><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
     <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />

        
     </Head>
      <main >
        <div className='headers'>
          <div className='sm:ml-20 ml-10'><Link href="/">Home</Link></div>
          <div className='sm:ml-20 ml-10'> <Link href="/components/about">About</Link></div>
          <div className='sm:ml-20 ml-10'> <Link href="/components/projects">Projects</Link></div>
          <div className='sm:ml-20 ml-10'><Link href="/components/contact">Contact</Link></div>
          {/* <div className='lef'>Anil IK</div> */}
        </div>
            
        </main>
    </>
  )
}

export default function Main(){
  return(
    <>
    {/* <Main1/> */}
    <div>
    <Home/>
    {/* <Projects/> */}
</div>
</>
    )
}