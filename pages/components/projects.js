

import Link from "next/link"
import { Main1 } from "../index"

export default function Projects(){
    return(
        <>
          {/* <Main1/> */}
        <div className='project-page bg-white ' >
            <h3 className="mt-20   text-lg uppercase text-center">some of my works</h3>
            <h1 className="mt-10  text-center">Projects</h1>


            <div className=" sm:ml-0 mt-10">
                <div className="   border-solid border-1  mybiobackup bg-contain img_div"></div>
            
                {/* <div className="  border-solid border-1  sm:ml-64 ml-2 sm:mt-10 text-black capitalize mr-2 mb-10 hidden">
                    this is a <b>my bio back</b> project .this is available in play store .in this project im worked on backend  using <b>node js </b>run time environment and <b>express frame work and mysql </b> and also some work with <b>aws </b>in deployment. and also work admin  side ui of this project using <b>nunjucks</b>  and also done responsive using <b>tailwind</b>...
                </div> */}

                <div className=" sm:h-96 sm:w-full  border-solid border-1  admin_img bg-contain sm:ml-64  "></div>
                
                
                <h2 className="mt-10">memory game </h2>
                <div className=" sm:h-96 sm:w-full border-solid border-1  memory_game1 bg-contain sm:ml-64 mt-10"></div>
                <div className=" sm:h-96 sm:w-full   border-solid border-1  memory_game2 bg-contain sm:ml-64 mt-10"></div>
               
                {/* <div className="  border-solid border-1  sm:ml-64 ml-2 sm:mt-10 text-black capitalize mr-2 mb-10 hidden">
                    this is the memory game project and this done by me and using <b>react</b> library and used <b> next js</b> frame work and deployed in  <b>vercel</b> ...
                </div> */}



                <h2 className="mt-10">quiz game </h2>

                <div className=" sm:h-96 sm:w-full h-52 w-72 ml-10  border-solid border-1  quiz1 bg-contain sm:ml-64 mt-10"></div>

                <div className=" sm:h-96 sm:w-full h-52 w-72 ml-10  border-solid border-1  quiz2 bg-contain sm:ml-64 mt-10"></div>

                {/* <div className="  border-solid border-1  sm:ml-64 ml-2 sm:mt-10 text-stone-100 capitalize mr-2 mb-10">
                    this is the quiz game project and this done by me and using <b>react</b> library and used  frame work and deployed in  <b>vercel</b> ...
                </div> */}

                {/* <div className="  border-solid border-1  sm:ml-64 ml-2 sm:mt-10 text-stone-100 capitalize mr-2 mb-10">
                    and also done lots of projects in javascript ... like <b>calculator , random number guess , tic tae toe , bubble game </b> and so on .. you want know  more about my work  <Link href="https://github.com/anilikarikatti "><b><u>click here</u></b></Link>
                </div> */}

            </div>
            
            <div className="contact text-stone-100">
                <div className="abt below sm:flex flex-col hidden ">
                    <h2 >Anil Irappa Karikatti</h2>
                    <h3 className="content">
                        I am a Software Engineer from Hubbali, Karnataka.
                    I always make websites that have unique designs and also have a good performance rate.
                    </h3>
                </div>    
                <div className="abt below sm:flex flex-col hidden">
                    <h2>useful links</h2>
                    <ul>
                        <li className="lists">home</li>
                        <li className="lists">about</li>
                        <li className="lists">project</li>
                        <li className="lists">contact</li>

                    </ul>
                    </div>    
                <div className="text-white mt-10 sm:mt-4 sm:ml-0 ml-24  ">
                    <h2 className="">contact info</h2>
                    <h3 className="sm:w-40 w-40">
                        anilkarikatti333@gmail.com
                        7795549800
                        Hubballi 
                        Karnataka
                    </h3>
                    </div>    

             </div>

        </div>

        </>
    )
}