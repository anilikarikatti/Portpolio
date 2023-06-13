import ProjectBlock from "./ProjectBlock";

import { Links } from "./ links";

import Head from "next/head";
// AOS.init()
export default function Project2(){
    // AOS.init()
    let images =['bio3','bio4','bio1'];
    let second_images = ['memory_game1','memory_game2'];
    let fourth_images = ['rbuilder3','rbuilder4','rbuilder5']

    let fifth_images = ['food1','food2','food3','food4']


    let third_images = ['quiz1',"quiz2"]
    return(
        <>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Climate+Crisis&family=Dancing+Script:wght@400;500;600;700&family=Oswald&family=Passions+Conflict&family=Poppins:wght@300;400;500;600;700&family=Roboto+Condensed:wght@300;400;700&family=Satisfy&display=swap" rel="stylesheet"></link>

        </Head>
            <div className="overflow-scroll overflow-x-hidden  h-fit background flex flex-col space-y-20" > 
         
                <h1 className="text-center uppercase sm:text-5xl header flip-scale-up-ver text-red-400 text-2xl">projects</h1>
                
                {/* links */}

                <Links names={["home","resume","contact"]} links={["/components/home" ,"https://anilikarikatti.github.io/resume/","/components/contact"  ]} />


              <ProjectBlock images={images} p="this is our client product this can be done in my internship . this is available in play store also.
                            this product provides a secured account in cloud to everyone to access medical documents such as MRI report, CT scan, X ray, Lab reports, Other medical tests, 3D imaging, medical prescriptions in digital format from the original issuers of these certificates. 
                            the project will be hosted on aws i have also little bit knowledge about this 
                            in this project i have been  be worked on backend using node js and express js and mysql  
                            the admin side of this product has been done by be ..this project using nunjucks template, tailwind css , html javascript "/>

                  <ProjectBlock images={fifth_images} p=" this is food order system project same like swiggy , zomato and also it maintains both side of client and restorent side . the client is capable to order foods after login and he also want to see his orders ..
                  in restorent side the hotels can see the todays orders ..

                  the admin can add the foods and restorents .

                  this is a full stack project done in node js for backend  and used nunjucks template for front end and mysql for database and tailwind for css " link="https://github.com/anilikarikatti/food_order"/>


                <ProjectBlock images={fourth_images} p="this is a resume builder app and this project gives the  ready made resume  this project is in  next js 
                          when user  enters his information  and added his projects and clicked confirm then click any template it will generate his resume
                          this project can be done in react js , and also hosted on vercel " link="https://resume-builder-ak.vercel.app/"/>


                <ProjectBlock images={second_images} p="this is  challenging game containing 4x4 boxes that highlights a red color in each random box for certain seconds
                            when user click all colored boxes the color of box will be red and after picking all colored boxes user will be  win the game
                            this project can be done by react js  and also hosted on vercel 
                            the same project will be done by normal html , css and javascript " link="https://trying-vercel-anilikarikatti.vercel.app/"/>

              
                <ProjectBlock images={third_images} p=" this is  challenging game containing 4x4 boxes that highlights a red color in each random box for certain seconds
                          when user click all colored boxes the color of box will be red and after picking all colored boxes user will be  win the game
                          this project can be done by react js  and also hosted on vercel 
                          the same project will be done by normal html , css and javascript " link="https://trying-vercel-anilikarikatti.vercel.app/"/>



                 
            <div className=" h-20">
                <a href="https://github.com/anilikarikatti" className="capitalize text-center sm:ml-[600px] ml-36 text-red-800">my work</a></div>    
            </div>
        </>
    )
}  