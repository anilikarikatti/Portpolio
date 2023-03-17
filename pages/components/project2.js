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
            <div className="pg background box" > 
                <h1 className="text-center uppercase text-5xl header flip-scale-up-ver">projects</h1>
                
                <div className="links flex headrs " id="headrs">
                    <div className=" h-20 w-20  bg-green-200 l1 text-center project" data-aos = "fade-right"><Link href="/components/home"><p className="data">home</p></Link></div>
                        <div className="h-20 w-20  bg-red-200 text-center l1 resume" data-aos = "fade-down"><a href="https://anilikarikatti.github.io/resume/" ><p className="data">resume</p></a></div>
                        
                        <div className="h-20 w-20  bg-orange-200 text-center l1 contacts" data-aos = "fade-left"><Link href="/components/about"><p className="data" >about</p></Link></div>

                </div>

                {/* <h2 className="uppercase mt-32">mybiobackup </h2> */}

                <div className="grid grid-cols-2 ml-20 mt-40 border-2 mr-20 imgs shad">

                    <div className={" bg-contain img_div memory  hov  clipimg mb-16 " + (images[index])} >
                   
                    </div>
                   
                    <div className="para " id="scroll" data-aos = "fade-left">
                        {/* <h4 class="textColor text-center capitalize text-white">mybio backup</h4> */}
                        <p className="textColor capitalize mt-16 text-center mr-10">
                            this is our client product this can be done in my internship . this is available in play store also.
                            this product provides a secured account in cloud to everyone to access medical documents such as MRI report, CT scan, X ray, Lab reports, Other medical tests, 3D imaging, medical prescriptions in digital format from the original issuers of these certificates. 
                            the project will be hosted on aws i have also little bit knowledge about this 
                            in this project i have been  be worked on backend using node js and express js and mysql  
                             the admin side of this product has been done by be ..this project using nunjucks template, tailwind css , html javascript 
                            
                        </p>
                        </div>
                    

                </div>


                <div className="grid grid-cols-2 ml-20 mt-40 border-2 mr-20 imgs shad">
                    
                    
                    <div className={"bg-contain img_div memory  hov clipimg  "+ second_images[index]}>
                    </div>
                    
                    <div className="para" id="scroll" data-aos = "fade-left">
                            <p className="textColor capitalize mt-16 text-center mr-10 ">
                            challenging game containing 4x4 boxes that highlights a red color in each random box for certain seconds
                            when user click all colored boxes the color of box will be red and after picking all colored boxes user will be  win the game
                            this project can be done by react js , and also hosted on vercel 
                            the same project will be done by normal html , css and javascript also  github link : 
                                <a href="https://trying-vercel-anilikarikatti.vercel.app/" className="link mt-10 text-green-900"> demo </a>
                            
                        </p>
                </div>
            </div>    


              <div className="grid grid-cols-2 ml-20 mt-40 border-2 mr-20 imgs shad box mb-20"   >

                    <div className={"bg-contain img_div memory  hov clipimg  "+ third_images[index]}>
                    </div>
                    
                    <div className="para" id="scroll" data-aos = "fade-left">
                    
                        <p className="textColor capitalize mt-16 text-center mr-10">
                            fun game which contains genereal questions in the form of quiz and each question contains  points.
                              here the player can look for previous questions and next questions also and marks are rewarded after the submit form. 
                            this project can be done by react js for code :  <a href="https://github.com/anilikarikatti/quiz-game-in-react" className="link">click here</a>
                          the same project will be done by normal html , css and javascript for code  : <a href="https://github.com/anilikarikatti/quiz_game" className="link">click here</a>
                            
                        </p>
                        </div> 
            </div>    

            <div className=" h-20">
              <a href="https://github.com/anilikarikatti" className="capitalize text-center marginLeft">my work</a></div>    
            </div>
        </>
    )
}  