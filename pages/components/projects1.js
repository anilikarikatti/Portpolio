import Link from "next/link"

import AOS from 'aos'

import 'aos/dist/aos.css';
import { useEffect, useState } from "react";
// AOS.init()
export default function Project1(){
    // AOS.init()

    useEffect(() => {
    
        AOS.init({
          duration : 3000
        });    
        AOS.refresh();
      }, [])

      let [img1,setImg1] = useState(true);
      let [img2,setImg2] = useState(true);
      let [img3,setImg3] = useState(true);

    return(
        <>
            <div className="pg bg-white" > 
                <h1 className="text-center uppercase mt-4">projects</h1>
                
                <div className="links flex headrs " id="headrs">
                    <div className=" h-20 w-20  bg-green-200 l1 text-center project" data-aos = "fade-right"><Link href="/components/home"><p className="data">home</p></Link></div>
                        <div className="h-20 w-20  bg-red-200 text-center l1 resume" data-aos = "fade-down"><a href="https://anilikarikatti.github.io/resume/" ><p className="data">resume</p></a></div>
                        
                        <div className="h-20 w-20  bg-orange-200 text-center l1 contacts" data-aos = "fade-left"><Link href="/components/about"><p className="data" >about</p></Link></div>

                </div>

                <h2 className="uppercase mt-32">mybiobackup </h2>

                <div className="grid grid-cols-2 ml-20">

                    <div className={" bg-contain img_div memory  hov " +  (img1 ? 'mybiobackup' :"admin_img")}  onClick={()=>setImg1(!img1)}>
                   
                    </div>
                    {/* <div className="admin_img bg-contain img_div memory secImg" data-aos = "fade-left">
                        
                    </div> */}

                    <div class="para" id="scroll" data-aos = "fade-left">
                        {/* <h4 class="textColor text-center capitalize text-white">mybio backup</h4> */}
                        <p class="textColor capitalize ">
                            this is our client product this can be done in my internship . this is available in play store also.
                            this product provides a secured account in cloud to everyone to access medical documents such as MRI report, CT scan, X ray, Lab reports, Other medical tests, 3D imaging, medical prescriptions in digital format from the original issuers of these certificates. 
                            the project will be hosted on aws i have also little bit knowledge about this 
                            in this project i have been  be worked on backend using node js and express js and mysql  
                             the admin side of this product has been done by be ..this project using nunjucks template, tailwind css , html javascript 
                        </p>
                        <div className="skillNames">
                                <h2>technologies used</h2>
                                <ul className=" grid grid-cols-2">
                                    <li>html</li>
                                    <li>css</li>
                                    <li>javascript</li>
                                    <li>node js</li>

                                    <li>express js</li>
                                    <li>tailwind css</li>
                                    <li>nunjucks template</li>
                                    <li>mysql</li>
                                    
                                    <li>aws</li>
                                    {/* <li>css</li> */}

                                </ul>
                           </div>
                    </div>

                </div>

                <h2 className="uppercase mt-20">memory game </h2>

                <div className="grid grid-cols-2 ml-32 mt-10">
                    {/* <div className={"  bg-contain memory img_div hov"+(img2 ? 'memory_game1' :"memory_game1")}  onClick={()=>setImg2(!img2)}  > */}
                    
                    <div className={" bg-contain img_div memory  hov  " +  (img2 ? 'memory_game1' :"memory_game2")}  onClick={()=>{setImg2(!img2);}}>
                    </div>
                    {/* <div className="memory_game1 bg-contain memory img_div secImg" data-aos = "fade-right">
                    </div> */}

                    <div className="para" id="scroll" data-aos = "fade-left">
                    {/* <h4 class="textColor text-center capitalize">memory game</h4> */}
                        <p class="textColor capitalize ">
                            challenging game containing 4x4 boxes that highlights a red color in each random box for certain seconds
                            when user click all colored boxes the color of box will be red and after picking all colored boxes user will be  win the game
                            this project can be done by react js , and also hosted on vercel 
                            the same project will be done by normal html , css and javascript also  github link : 
                                <a href="https://trying-vercel-anilikarikatti.vercel.app/" className="link mt-10 text-green-900"> demo </a>
                            
                        </p>
                        <div className="skillNames">
                                <h2>technologies used</h2>
                                <ul className=" grid grid-cols-2">
                                    <li>html</li>
                                    <li>css</li>
                                    <li>javascript</li>

                                    <li>react js</li>
                                    {/* <li>css</li> */}

                                </ul>
                           </div>
                    </div>
                </div>

                <h2 className="uppercase mt-20 ">quiz game </h2>
                <div className="grid grid-cols-2 ml-32 mt-10 "   >
{/* 
                    <div className={" bg-contain memory img-div hov mt-10"+ (img3 ? 'quiz1' :"quiz2")}  onClick={()=>setImg3(!img3)}  > */}
                    <div className={" bg-contain img_div memory  hov " +  (img3 ? 'quiz1' :"quiz2")}  onClick={()=>{setImg3(!img3);}}>
                    </div>
                    {/* </div> */}
                    {/* <div className="quiz2 bg-contain img_div memory secImg " data-aos = "fade-left">
                
                    </div> */}

                    <div class="para" id="scroll" data-aos = "fade-left">
                    {/* <h4 class="textColor text-center capitalize" >quiz game</h4> */}
                        <p class="textColor  capitalize">
                            fun game which contains genereal questions in the form of quiz and each question contains  points.
                              here the player can look for previous questions and next questions also and marks are rewarded after the submit form. 
                            this project can be done by react js for code :  <a href="https://github.com/anilikarikatti/quiz-game-in-react" class="link">click here</a>
                          the same project will be done by normal html , css and javascript for code  : <a href="https://github.com/anilikarikatti/quiz_game" class="link">click here</a>
                            
                        </p>
                        <div className="skillNames">
                                <h2>technologies used</h2>
                                <ul className=" grid grid-cols-2">
                                    <li>html</li>
                                    <li>css</li>
                                    <li>javascript</li>

                                    <li>react js</li>
                                    {/* <li>css</li> */}

                                </ul>
                           </div>
                    </div>
                </div>
                <div className="capitalize mt-20 text-center ">
                    if you want to see my work: <a href="https://github.com/anilikarikatti" className="atag"> click here </a>
                </div>

                <div className="up"><a href="#headrs">^</a></div>
            </div>

        </>
    )
}