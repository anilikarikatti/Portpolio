import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
// import additonal from '../styles/additional.css'
import Home from './components/home'
import About from './components/experiance'
import Skills from './components/skills'



const inter = Inter({ subsets: ['latin'] })

export default function Main() {
  return (
    <>
     <Head>
     <link rel="preconnect" href="https://fonts.googleapis.com"/><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/><link href="https://fonts.googleapis.com/css2?family=Oswald&family=Passions+Conflict&family=Sacramento&family=Satisfy&family=Tangerine&display=swap" rel="stylesheet"/>

     </Head>
      <main >
        <div className='headers'>
          <div>Home</div>
          <div>About</div>
          <div>Projects</div>
          <div>Contact</div>
          {/* <div className='lef'>Anil IK</div> */}
        </div>
          <Home/>
          <About/>
          <Skills/>
        </main>
    </>
  )
}
