import { Main1 } from "../index"

export default function Home(){
    return(
        <>
        <Main1></Main1>
        <div className='about flex sm:flex-row  flex-col sm:h-screen h-fit' >
            <div className='sm:h-full sm:w-full  backimg bg-cover  h-96 w-96 sm:ml-0 ml-20 '>
                

            </div>
            <div className='sm:h-full sm:w-full  '>
            {/* Hello,This is

Irayya Hiremath

I am a Software Engineer  I love to design and make new web experiences for people.
I am looking for an opportunity in an esteemed organisation to put in my best efforts and always hunger for learning new things and put those skills into continuous implementation to achieve personal growth and fulfil organisational goals.

I Have done projects using following WebTechnologies */}


                <h1 className="text-black-100 sm:mt-40 mt-8 sm:ml-0 ml-40 ">Hello , This is </h1>
                <p className="sm:text-8xl sm:ml-0 ml-40">Anil I Karikatti</p>
                <h3 className="line-space sm:mt-10 mt-3 sm:ml-0 ml-10">I am a Software Engineer  I love coding , development and make new web experiences for people.
                    I am looking for an opportunity in an esteemed organisation to put in my best efforts and always hunger for learning new things and put those skills into continuous implementation to achieve personal growth and fulfill organisational goals.
                    </h3>
                    <h3 className="margin-top-10 am:ml-0 ml-10">
                    I Have done projects using following WebTechnologies</h3>

                    <div className="tech">
                        <div className="inner-tech padd">html</div>
                        <div className="inner-tech padd">css </div>
                        <div className="inner-tech padd">javascript</div>
                        <div className="inner-tech padd">react js</div>
                        <div className="inner-tech padd">tailwind css</div>
                        <div className="inner-tech padd">next js </div>
                        <div className="inner-tech padd">node js</div>
                        <div className="inner-tech padd">express js</div>
                        <div className="inner-tech padd">aws</div>


                    </div>
            </div>

        </div>

        </>
    )
}