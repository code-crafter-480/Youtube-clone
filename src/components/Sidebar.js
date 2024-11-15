import React from 'react'
import { IoHomeOutline } from "react-icons/io5";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { useSelector } from 'react-redux';


const sidebarItem = [
    {
        icons : <IoHomeOutline size={"24px"}/> ,
        title : "Home"
    },
    {
        icons : <SiYoutubeshorts size={"24px"}/> ,
        title : "Shorts"
    },
    {
        icons : <MdOutlineSubscriptions size={"24px"}/> ,
        title : "Subscription"
    },
    {
        icons : <IoHomeOutline size={"24px"}/> ,
        title : "Home"
    },
    {
        icons : <SiYoutubeshorts size={"24px"}/> ,
        title : "Shorts"
    },
    {
        icons : <MdOutlineSubscriptions size={"24px"}/> ,
        title : "Subscription"
    },
    {
        icons : <IoHomeOutline size={"24px"}/> ,
        title : "Home"
    },
    {
        icons : <SiYoutubeshorts size={"24px"}/> ,
        title : "Shorts"
    },
    {
        icons : <MdOutlineSubscriptions size={"24px"}/> ,
        title : "Subscription"
    },
    {
        icons : <IoHomeOutline size={"24px"}/> ,
        title : "Home"
    },
    {
        icons : <SiYoutubeshorts size={"24px"}/> ,
        title : "Shorts"
    },
    {
        icons : <MdOutlineSubscriptions size={"24px"}/> ,
        title : "Subscription"
    },
    {
        icons : <IoHomeOutline size={"24px"}/> ,
        title : "Home"
    },
    {
        icons : <SiYoutubeshorts size={"24px"}/> ,
        title : "Shorts"
    },
    {
        icons : <MdOutlineSubscriptions size={"24px"}/> ,
        title : "Subscription"
    },
    {
        icons : <IoHomeOutline size={"24px"}/> ,
        title : "Home"
    },
    {
        icons : <SiYoutubeshorts size={"24px"}/> ,
        title : "Shorts"
    },
    {
        icons : <MdOutlineSubscriptions size={"24px"}/> ,
        title : "Subscription"
    },
    {
        icons : <IoHomeOutline size={"24px"}/> ,
        title : "Home"
    },
    {
        icons : <SiYoutubeshorts size={"24px"}/> ,
        title : "Shorts"
    },
    {
        icons : <MdOutlineSubscriptions size={"24px"}/> ,
        title : "Subscription"
    },
    {
        icons : <IoHomeOutline size={"24px"}/> ,
        title : "Home"
    },
    {
        icons : <SiYoutubeshorts size={"24px"}/> ,
        title : "Shorts"
    },
    {
        icons : <MdOutlineSubscriptions size={"24px"}/> ,
        title : "Subscription"
    },
]

const Sidebar = () => {
    // const open = false
    const open = useSelector((store) => store.app.open)
    
  return (
    // <div className='border border-gray-800 w-[14%] mx-5' >       // For testing using a border
    <div className={` relative left-0 ${open ? "w-[15%]" : "w-[5%]"} px-2 h-[calc(100vh-5rem)] ml-6 overflow-y-scroll overflow-x-hidden `}>
        {
            sidebarItem.map((item, index) => {
                return (
                    <div key={index} className='flex my-3'>
                        { item.icons }
                        <p className={`ml-5 ${open ? "" : "hidden"}`}> { item.title } </p>
                    </div>
                )
            })
        }
    </div>
  )
}

export default Sidebar
