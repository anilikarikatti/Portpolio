import React from 'react'
import AOS from 'aos'

import 'aos/dist/aos.css';
import { useEffect, useState } from "react";
const ProjectBlock = ({p,images,link}) => {


    useEffect(() => {
    
        AOS.init({
          duration : 3000
        });    
        AOS.refresh();
      }, [])

      let [index,setIndex] = useState(0)
       
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
  return (
    <>
         <div className="grid sm:grid-cols-2 relative   border-2  w-[90%] imgs shad  left-[5%]  ">

            <div className={" bg-contain  sm:h-[450px] h-[250px] w-[90%] relative top-[22%] left-[5%]  hov  sm:clipimg  " + (images[index])} >

            </div>


            <div className="w-full flex justify-center items-center text-justify sm:top-10 h-full top-0 mb-10">
                <div className="text-black  " id="scroll" data-aos = "fade-left">
                    
                    <p className="textColor capitalize  relative sm:top-0  right flex flex-col items-center">
                        {p}
                        
                       {link ?  <a href={link} className="link mt-10 text-green-900"> click here </a> : ""}
                    </p>
                </div>
        </div>

</div>

    </>
  )
}

export default ProjectBlock