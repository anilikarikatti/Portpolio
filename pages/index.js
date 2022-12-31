import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
// import additonal from '../styles/additional.css'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
     <Head>
     <link rel="preconnect" href="https://fonts.googleapis.com"/><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/><link href="https://fonts.googleapis.com/css2?family=Oswald&family=Passions+Conflict&family=Sacramento&family=Satisfy&family=Tangerine&display=swap" rel="stylesheet"/>

     </Head>
      <main >
      <div className='headers'>
          <div>About</div>
          <div>Experiance</div>
          <div>Skills</div>
          <div>Education</div>
          <div>Contact</div>
          <div className='lef'>Anil IK</div>

          



        </div>
        <div className='about' >
            <div className='img'>
                <div className='margin-left-20 innerimg nameSizeother'>Hi</div>
                <div className='margin-left-23 margin-top-10 nameSizeother'>I am </div>
                <div className='margin-left-26 margin-top-10 nameSize '>
                  <p>
                    
                    ANIL IK</p></div>
                <div className='margin-left-30 margin-top-10 nameSizeother'>full stack developer</div>


            </div>
            <div className='img backimg'>
              
            </div>

        </div>
      </main>
    </>
  )
}
