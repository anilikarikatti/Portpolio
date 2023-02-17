import { Main1 } from "../index"

export default function Home(){
    return(
        <>
        <Main1></Main1>
        <div className='about flex sm:flex-row  flex-col sm:h-screen h-fit bg-slate-500' >
            <div className='sm:h-full sm:w-full  backimg bg-cover  h-96 w-96 sm:ml-0 ml-10 '>
                

            </div>
            <div className='sm:h-full sm:w-full  '>
            

                <h1 className="text-stone-200 sm:mt-40 mt-8 sm:ml-0 ml-44 ">Hello , This is </h1>
                <p className="sm:text-8xl text-xl sm:ml-0 ml-40 text-stone-300">Anil I Karikatti</p>
                <h3 className="line-space sm:mt-10 mt-3 sm:ml-0 ml-10 text-stone-100">I am a Software Engineer  I love coding , development and make new web experiences for people.
                    I am looking for an opportunity in an esteemed organisation to put in my best efforts and always hunger for learning new things and put those skills into continuous implementation to achieve personal growth and fulfill organisational goals.
                    </h3>
                    <h3 className="margin-top-10 am:ml-0 ml-10 text-stone-100">
                    I Have done projects using following WebTechnologies</h3>

                    <div className="tech">
                        <div className="inner-tech text-center  h">html</div>
                        <div className="inner-tech text-center h">css </div>
                        <div className="inner-tech text-center h">javascript</div>
                        <div className="inner-tech text-center  h">react js</div>
                        <div className="inner-tech text-center h">tailwind css</div>
                        <div className="inner-tech text-center h">next js </div>
                        <div className="inner-tech text-center h">node js</div>
                        <div className="inner-tech text-center h">express js</div>
                        <div className="inner-tech text-center mb-10 h">aws</div>


                    </div>
            </div>

        </div>

        </>
    )
}