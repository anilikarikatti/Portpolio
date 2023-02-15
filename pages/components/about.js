import { Main1 } from "../index"


export default function About(){
    return(
        <>
        <Main1/>
        <div className='project-page ' >
            <div className="flex about flex sm:flex-row  flex-col sm:h-screen h-fit" >
                <div className=' wi backimg  sm:h-full sm:w-full  backimg bg-cover  h-96 w-96 sm:ml-0 ml-20' >
                    

                </div>
                <div className='wi  '>
                    <h3 className="hello">Hello,</h3>

                    <h3> Let me introduce myself</h3>
                                <p className="para">
                                I am Anil Karikatti, currently working as a Software Engineer. I am a computer science  Engineering graduate from Hubbali. 
                                </p>
                        
                </div>
                </div>
            <div className="">

                <h1 className="myskills blk m-32">my skills</h1>
                <div className="web">
                    <div className="left blk">web technologies </div>
                    <div className="leftdata  border h">html</div>
                    <div className="innerleft border h">css</div>
                    <div className="innerleft border h">javascript </div>
                    <div className="innerleft border h">node js </div>


                </div>
                
            </div>

            <div className="">

                {/* <h1 className="myskills"></h1> */}
                <div className="web">
                    <div className="left blk">frame work and libraries </div>
                    <div className=" border innerleftframe h">react</div>
                    <div className="innerleftframe border h">express</div>
                    <div className="innerleftframe border h">next js</div>
                    <div className="innerleftframe border h">tailwind css</div>


                </div>
                
            </div>
            

            <div className="">

                <div className="web">
                    <div className="left blk">tools</div>
                    <div className=" border toolsleft h">aws</div>
                    <div className="innerleftframe border h">git</div>
                    <div className="innerleftframe border h">vs code</div>
                    <div className="innerleftframe border h">mysql</div>


                </div>

            </div>

            <div className="">

                <h1 className="myskills margintop-10 blk">Education</h1>
                <div className="web">
                    <div className="left blk">school </div>
                    <div className="schoolleft  border h">karnataka high school dharwad</div>
        
                </div>
            </div>


            <div className="">

                <div className="web">
                    <div className="left blk">college </div>
                    <div className="collageleft  border h">jain collage of engineering and technology hubballi</div>
        
                </div>
            </div>


            <div className="">

                <div className="web">
                    <div className="left blk">university </div>
                    <div className="universityleft  border h">Visvesvaraya Technological University (VTU)</div>
        
                </div>
            </div>
            
            <div className="">

            <div className="web">
                <div className="left blk">mentor </div>
                <div className="collageleft  border h data">chandan purohit [c t o of samarth meditech]</div>

            </div>
            </div>

            <div className="contact">
                <div className="abt below">
                    <h2 >Anil Irappa Karikatti</h2>
                    <h3 className="content">
                        I am a Software Engineer from Hubbali, Karnataka.
                    I always make websites that have unique designs and also have a good performance rate.
                    </h3>
                </div>    
                <div className="abt below">
                    <h2>useful links</h2>
                    <ul>
                        <li className="lists">home</li>
                        <li className="lists">about</li>
                        <li className="lists">project</li>
                        <li className="lists">contact</li>

                    </ul>
                    </div>    
                <div className="abt">
                    <h2 className="below">contact info</h2>
                    <h3 className="address">
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