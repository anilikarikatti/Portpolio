import React from 'react'
import AOS from 'aos'

import 'aos/dist/aos.css';
import { useEffect, useState } from "react";
export default function ProjectBlock(props) {
  let [index,setIndex] = useState(0)

    let [data,setData] = useState(props)



    // let p="",images=[],link="" 
    let {p,images,link,tech}  = data

    console.log(data , "anil"); 
      function move(){
        setTimeout(()=>{
          if(index < images.length-1){
              setIndex(index+1)
          }
          else{
              setIndex(0)
          }
        },2200)
        }
  
        move()
    
    useEffect(() => {
    
        AOS.init({
          duration : 3000
        });    
        AOS.refresh();
      }, [])

       
     
  return (
    <>
        { Object.keys(data).length != 0 ? <div className="grid sm:grid-cols-2 relative   border-2  w-[90%] imgs shad  left-[5%]  ">

             <div className={" bg-contain  sm:h-[450px] h-[250px] w-[90%] relative top-[22%] left-[5%]  hov  sm:clipimg  " + (images[index])} >

            </div>


            <div className="w-full flex justify-center items-center text-justify sm:top-10 h-full top-0 mb-10">
                {/* <div className="text-black  " id="scroll" data-aos = "fade-left"> */}
                    
                    <p className="textColor capitalize  relative sm:top-0  right flex flex-col items-center text-black">
                        {p}
                        <p className='top-5 relative'>technologies used</p>

                        <div className='flex space-x-2 top-5 relative flex-wrap gap-y-4'> 
                        {tech ? tech.split(',').map(elem=>{
                          return(
                            <div className='h-10 flex items-center bg-blue-200 text-center px-2' key={elem}>{elem}</div>
                          )
                        }) : ""}
                        </div>
                       {link ?  <a href={link} className="link mt-10 text-green-900"> click here </a> : ""}
                    </p>
                {/* </div> */}
        </div> 

</div> : ""
}
    </>
  )
}

// export default ProjectBlock