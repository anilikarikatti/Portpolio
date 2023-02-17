import { Main1 } from "../index"


export default function About(){
    return(
        <>
        <Main1/>
        <div className='project-page bg-slate-500' >
            <div className="flex about flex sm:flex-row  flex-col sm:h-screen h-fit" >
                <div className=' wi backimg  sm:h-full sm:w-full  backimg bg-cover  h-96 w-96 sm:ml-0 ml-20 ' >
                    

                </div>
                <div className='sm:wi text-stone-100 ml-10 sm:w-96'>
                    <h3 className="sm:mt-64 mt-20">Hello,</h3>

                    <h3> Let me introduce myself</h3>
                                <p className="sm:para">
                                I am Anil Karikatti, currently working as a Software Engineer. I am a computer science  Engineering graduate from Hubballi. 
                                </p>
                        
                </div>
                </div>

                <h1 className="ml-40 sm:ml-48 uppercase  sm:blk text-red-300 mt-20 ">my skills</h1>
            <div className="web">
                                
                <div className="sm:web  sm:ml-0 ml-24 flex sm:flex-row flex-col">
                <div className="sm:text-center  text-white-700  sm:mt-0 sm:ml-40 w-40">web technologies </div>    
                    <div className="sm:leftdata  border  sm:ml-12 sm:h-10 w-40 h">html</div>
                    <div className="sm:innerleft border  sm:ml-12 sm:h-10 w-40 h">css</div>
                    <div className="sm:innerleft border sm:ml-12 sm:h-10 h">javascript </div>
                    <div className="sm:innerleft border  sm:ml-12 sm:h-10 w-40 h">node js </div>


                </div>
                
            </div>

            <div className="web">

                {/* <h1 className="myskills"></h1> */}
                <div className="sm:web flex sm:flex-row flex-col ml-24">
                    <div className="sm:ml-24 text-white-700 w-40">frame work and libraries </div>
                    <div className=" border sm:innerleftframe sm:ml-10 w-40 h-10 h">react</div>
                    <div className="sm:innerleftframe border sm:ml-10 w-40 h-10 h">express</div>
                    <div className="sm:innerleftframe border sm:ml-10 w-40 h-10 h">next js</div>
                    <div className="sm:innerleftframe sm:h-10  border sm:ml-10 w-40 h">tailwind css</div>


                </div>
                
            </div>
            

            <div className="web">

                <div className="sm:web flex sm:flex-row flex-col sm:ml-48 ml-12">
                    <div className=" text-white-700 sm:ml-0 ml-20 w-40  h">tools</div>
                    <div className=" border sm:toolsleft ml-12 w-40 h-10 h">aws</div>
                    <div className="innerleftframe border h-10 ml:10 w-40 h">git</div>
                    <div className="innerleftframe border h w-40 h">vs code</div>
                    <div className="innerleftframe border h w-40">mysql</div>


                </div>

            </div>

            <div className="">

                <h1 className="mt-20 text-red-300 ml-40 sm:ml-48 uppercase">Education</h1>
                <div className="web  ml-0 flex flex-col sm:flex-row">
                    <div className=" ml-40   ">school </div>
                    <div className="sm:w-80 w-60 border sm:ml-20 ml-20 h">karnataka high school dharwad</div>
        
                </div>
            </div>


            <div className="">

                <div className="web flex flex-col sm:flex-row">
                    <div className="ml-40 ">college </div>
                    <div className="ml-20 border sm:w-80 w-60 h">jain collage of engineering and technology hubballi</div>
        
                </div>
            </div>


            <div className="">

                <div className="web flex flex-col sm:flex-row">
                    <div className="ml-40 ">university </div>
                    <div className=" ml-20 border sm:w-80 w-60 h">Visvesvaraya Technological University (VTU)</div>
        
                </div>
            </div>
            
            <div className="">

            <div className="web flex flex-col sm:flex-row">
                <div className="ml-40">mentor </div>
                <div className=" ml-20 border sm:w-80 w-60 h">chandan purohit [c t o of samarth meditech]</div>

            </div>
            </div>

            <div className="contact ">
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