

export default function About(){
    return(
        <>
          
        <div className='project-page' >
            <div className="flex" >
                <div className=' wi backimg  height-100' >
                    

                </div>
                <div className='wi'>
                    <h3 className="hello">Hello,</h3>

                    <h3> Let me introduce myself</h3>
                                <p className="para">
                                I am Anil Karikatti, currently working as a Software Engineer. I am a computer science  Engineering graduate from Hubbali. 
                                </p>
                        
                </div>
                </div>
            <div className="">

                <h1 className="myskills">my skills</h1>
                <div className="web">
                    <div className="left">web technologies </div>
                    <div className="leftdata  border">html</div>
                    <div className="innerleft border">css</div>
                    <div className="innerleft border">javascript </div>
                    <div className="innerleft border">node js </div>


                </div>
                
            </div>

            <div className="">

                {/* <h1 className="myskills"></h1> */}
                <div className="web">
                    <div className="left">frame work and libraries </div>
                    <div className=" border innerleftframe">react</div>
                    <div className="innerleftframe border">express</div>
                    <div className="innerleftframe border">next js</div>
                    <div className="innerleftframe border">tailwind css</div>


                </div>
                
            </div>
            

            <div className="">

                <div className="web">
                    <div className="left">tools</div>
                    <div className=" border toolsleft">aws</div>
                    <div className="innerleftframe border">git</div>
                    <div className="innerleftframe border">vs code</div>
                    <div className="innerleftframe border">mysql</div>


                </div>

            </div>

            <div className="">

                <h1 className="myskills margintop-10">Education</h1>
                <div className="web">
                    <div className="left">school </div>
                    <div className="schoolleft  border">karnataka high school dharwad</div>
        
                </div>
            </div>


            <div className="">

                <div className="web">
                    <div className="left">college </div>
                    <div className="collageleft  border">jain collage of engineering and technology hubballi</div>
        
                </div>
            </div>


            <div className="">

                <div className="web">
                    <div className="left">university </div>
                    <div className="universityleft  border">Visvesvaraya Technological University (VTU)</div>
        
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