import Link from "next/link"

import AOS from 'aos'

import 'aos/dist/aos.css';
import { useEffect, useState } from "react";
import Head from "next/head";
// AOS.init()
export default function Project2(){
    // AOS.init()

    useEffect(() => {
    
        AOS.init({
          duration : 3000
        });    
        AOS.refresh();
      }, [])

      let [index,setIndex] = useState(0)
        let images =['mybiobackup','admin_img'];
        let second_images = ['memory_game1','memory_game2'];
        let fourth_images = ['rbuilder1','rbuilder2']

        let third_images = ['quiz1',"quiz2"]
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
    return(
        <>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Climate+Crisis&family=Dancing+Script:wght@400;500;600;700&family=Oswald&family=Passions+Conflict&family=Poppins:wght@300;400;500;600;700&family=Roboto+Condensed:wght@300;400;700&family=Satisfy&display=swap" rel="stylesheet"></link>

        </Head>
            <div className="sm:h-fit h-fit background " > 
         
                <h1 className="text-center uppercase sm:text-5xl header flip-scale-up-ver text-red-400 text-2xl">projects</h1>
                
                <div className="links flex sm:ml-[900px] " id="headrs">
                    <div className=" h-20 w-20  bg-green-400 l1 text-center sm:project" data-aos = "fade-right"><Link href="/components/home"><p className="data">home</p></Link></div>
                        <div className="h-20 w-20  bg-red-400 text-center l1 resume" data-aos = "fade-down"><a href="https://anilikarikatti.github.io/resume/" ><p className="data">resume</p></a></div>
                        
                        <div className="h-20 w-20  bg-orange-400 text-center l1 contacts" data-aos = "fade-left"><Link href="/components/contact"><p className="data" >contact</p></Link></div>

                </div>


                <div className="grid sm:grid-cols-2 sm:ml-20 sm:mt-20 border-2 sm:mr-20 m-5 imgs shad mt-20 ">

                    <div className={" bg-contain  sm:h-[400px] h-[150px] w-[300px] sm:w-[520px] sm:mt-20 mt-10 sm:ml-0 ml-2  hov  sm:clipimg  " + (images[index])} >
                   
                    </div>
                   
                    <div className="para " id="scroll" data-aos = "fade-left">
                      
                        <p className="textColor capitalize sm:mt-16  text-center sm:mr-10 sm:ml-5 ml-8 mr-2 text-justify mb-10">
                            this is our client product this can be done in my internship . this is available in play store also.
                            this product provides a secured account in cloud to everyone to access medical documents such as MRI report, CT scan, X ray, Lab reports, Other medical tests, 3D imaging, medical prescriptions in digital format from the original issuers of these certificates. 
                            the project will be hosted on aws i have also little bit knowledge about this 
                            in this project i have been  be worked on backend using node js and express js and mysql  
                             the admin side of this product has been done by be ..this project using nunjucks template, tailwind css , html javascript 
                            
                        </p>
                        </div>
                    

                </div>



                <div className="grid sm:grid-cols-2 sm:ml-20 sm:mt-20 border-2 sm:mr-20 m-5 imgs shad mt-20">
                    
                    
                    <div className={" bg-contain  sm:h-[400px] h-[150px] w-[300px] sm:w-[520px] sm:mt-20 mt-10 sm:ml-0 ml-2  hov  sm:clipimg   "+ fourth_images[index]}>
                    </div>
                    
                    <div className="para" id="scroll" data-aos = "fade-left ">
                            <p className="textColor capitalize sm:mt-16  text-center sm:mr-10 sm:ml-5 ml-8 mr-2 text-justify mb-10">
                            this is a resume builder app and this is in next js 
                            when user user enters his information  and added his projects and clicked confirm then click any template it will generate his resume
                            this project can be done by react js , and also hosted on vercel 
                            
                                <a href="https://resume-builder-ak.vercel.app/" className="link mt-10 text-green-900"> goto </a>
                            
                        </p>
                </div>
                </div>


                <div className="grid sm:grid-cols-2 sm:ml-20 sm:mt-20 border-2 sm:mr-20 m-5 imgs shad mt-20 ">
                    
                    
                    <div className={"bg-contain  sm:h-[400px] h-[150px] w-[340px] sm:w-[520px] sm:mt-20 mt-10 sm:ml-0 ml-16 hov  sm:clipimg  "+ second_images[index]}>
                    </div>
                    
                    <div className="para" id="scroll" data-aos = "fade-left">
                            <p className="textColor capitalize sm:mt-16  sm:mr-10 sm:ml-5  ml-8 mr-2 text-justify mb-10">
                            this is  challenging game containing 4x4 boxes that highlights a red color in each random box for certain seconds
                            when user click all colored boxes the color of box will be red and after picking all colored boxes user will be  win the game
                            this project can be done by react js  and also hosted on vercel 
                            the same project will be done by normal html , css and javascript also  github link : 
                                <a href="https://trying-vercel-anilikarikatti.vercel.app/" className="link mt-10 text-green-900"> demo </a>
                            
                        </p>
                </div>
            </div>    


              <div className="grid sm:grid-cols-2 sm:ml-20 sm:mt-20 border-2 sm:mr-20 m-5 imgs shad mt-20"   >

                    <div className={"bg-contain  sm:h-[400px] h-[150px] w-[300px] sm:w-[520px] sm:mt-20 mt-10 sm:ml-0 sm:mr-10 ml-6  hov  sm:clipimg   "+ third_images[index]}>
                    </div>
                    
                    <div className="para" id="scroll" data-aos = "fade-left">
                    
                        <p className="textColor capitalize sm:mt-16  text-center sm:mr-10 sm:ml-0 ml-8 mr-4 text-justify mb-10">
                            fun game which contains genereal questions in the form of quiz and each question contains  points.
                              here the player can look for previous questions and next questions also and marks are rewarded after the submit form. 
                            this project can be done by react js for code :  <a href="https://github.com/anilikarikatti/quiz-game-in-react" className="link">click here</a>
                          the same project will be done by normal html , css and javascript for code  : <a href="https://github.com/anilikarikatti/quiz_game" className="link">click here</a>
                            
                        </p>
                        </div> 
            </div>    

            <div className=" h-20">
    <a href="https://github.com/anilikarikatti" className="capitalize text-center sm:ml-[600px] ml-36 text-red-800">my work</a></div>    
            </div>
        </>
    )
}  