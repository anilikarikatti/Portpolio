import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
// import additonal from '../styles/additional.css'
import Home from './components/home'
import Projects from './components/projects'
import About from './components/about'
import Link from 'next/link'



const inter = Inter({ subsets: ['latin'] })

 export function Main1() {
  return (
    <>
     <Head>
     <link rel="preconnect" href="https://fonts.googleapis.com"/><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/><link href="https://fonts.googleapis.com/css2?family=Oswald&family=Passions+Conflict&family=Sacramento&family=Satisfy&family=Tangerine&display=swap" rel="stylesheet"/>

     </Head>
      <main >
        <div className='headers'>
          <div className='margin-left-30px'><Link href="/">Home</Link></div>
          <div className='margin-left-30px'> <Link href="/components/about">About</Link></div>
          <div className='margin-left-30px'> <Link href="/components/projects">Projects</Link></div>
          <div className='margin-left-30px'><Link href="/components/home">Contact</Link></div>
          {/* <div className='lef'>Anil IK</div> */}
        </div>
            
        </main>
    </>
  )
}

export default function Main(){
  return(
    <>
    <Main1/>
    <div>
    <Home/>
    <Projects/>
</div>
</>
    )
}