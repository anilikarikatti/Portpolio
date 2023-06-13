import React from 'react'
import Link from "next/link"

const Links = ({names,links}) => {
    let [name1,name2,name3] = names;
    let [link1,link2,link3] = links;
  return (
    <div className="links flex relative sm:left-[75%] left-5" id="headrs">

        <div className=" h-20 w-20  bg-green-400 l1 text-center project sm:project capitalize" data-aos = "fade-right"><Link href={link1}><p className="data">{name1}</p></Link></div>

        <div className="h-20 w-20  bg-red-400 text-center l1 resume capitalize" data-aos = "fade-down"><a href={link2} ><p className="data">{name2}</p></a></div>
        
        <div className="h-20 w-20  bg-orange-400 text-center l1 contacts capitalize" data-aos = "fade-left"><Link href={link3}><p className="data" >{name3}</p></Link></div>

</div>
  )
}



export {Links} 