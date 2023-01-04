

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
            
        </div>

        </>
    )
}