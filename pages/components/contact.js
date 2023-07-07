import React from 'react'
// import { useState } from 'react'
import "aos/dist/aos.css";
import Link from 'next/link';    
import  Links  from '../ links';  
import { useEffect, useState } from "react";


import AOS from "aos";
const Contact = () => {

  useEffect(() => {
    
    AOS.init({
      duration : 3000
    });    
    AOS.refresh();
  }, [])


  // let [names,setNames]=useState(["home","resume","project"])

  //   let [links,setLinks] = useState(["/components/home" ,"https://anilikarikatti.github.io/resume/", "/components/project2" ])
    

  
       
  return (
    <div className='bg-white h-screen h-fit background'>
        <h1 className="text-black text-center  text-4xl  mx-auto flex  items-center justify-center capitalize ">get in touch with</h1>
        <div className='logo relative '>
          
          </div>
        
        <div className='flex justify-center'>
          <div className='sm:h-[350px] h-[250px] border-2 border-blue-400 w-[700px] rounded-lg flex flex-col sm:space-y-0 space-y-10 ' >
            <div className='grid grid-cols-6 justify-center relative sm:top-0 top-4 space-x-10'>
              <div className='sm:col-start-3 sm:col-end-4 col-start-2 col-end-3 call sm:h-[120px] h-[60px] '></div>
              <div className='relative sm:top-14  top-6 text-black'><a href='tel:7795549800'>7795549800</a> </div>

            </div>
            <div className='grid grid-cols-6 '>
              <div className='sm:col-start-3 sm:col-end-4 col-start-2 col-end-3 email sm:h-[100px]  h-[30px]' ></div>
              <div className='relative sm:top-10  text-black' ><a href="mailto:anilkarikatti333@gmail.com"> anilkarikatti333@gmail.com</a></div>

            </div>
            <div className='grid grid-cols-6 justify-center items-center'>
              <div className='sm:col-start-3 sm:col-end-4 col-start-2 col-end-2 github sm:h-[100px] h-[30px] sm:w-[50px] w-[10px]'>
             
              </div>
              <div className='relative sm:top-2 text-black'><a href='https://github.com/anilikarikatti'>https://github.com/anilikarikatti</a></div>

            </div>
          </div>
        </div>


                   
          <div className='relative sm:-left-[450px]'>
              <div className="links flex relative sm:left-[75%] left-5" id="headrs">

              <div className=" h-20 w-20  bg-green-400 l1 text-center project sm:project capitalize" data-aos = "fade-right"><Link href="/components/home"><p className="data">home</p></Link></div>

              {/* <div className="h-20 w-20  bg-red-400 text-center l1 resume capitalize" data-aos = "fade-down"><a href= "https://anilikarikatti.github.io/resume/"><p className="data">resume</p></a></div> */}

              <div className="h-20 w-20  bg-red-400 text-center l1 resume capitalize flex items-center justify-center " data-aos = "fade-down"><a href="../AnilKarikatti .pdf"  download = "anil Karikatti Resume" className="">
                    <p className="">resume</p> 
                    </a>
                    
                    </div>

              <div className="h-20 w-20  bg-orange-400 text-center l1 contacts capitalize" data-aos = "fade-left"><Link href="/components/project2" ><p className="data" >projects</p></Link></div>

              </div>

              {/* <Links names={names} links={links}/> */}
          </div>


    </div>
  )
}
export default Contact
