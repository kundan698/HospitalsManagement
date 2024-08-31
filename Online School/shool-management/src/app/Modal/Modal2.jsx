"use client"
import React from 'react'
import { MdCancel } from "react-icons/md";

export default function Modal2({get,setdata}) {
  return (
    <div>
       <div className='relative'>
       <div className='bg-white p-4 rounded-[8px] h-[100px] w-[250px] left-[20px] fixed bottom-[100px]'>
        <img src="https://pbs.twimg.com/profile_images/1782392386385240064/DzJ4jgBU_200x200.jpg" alt=""  className='w-[50px]  absolute top-[-20px] left-[100px] rounded-[50%]'/>
          <p className='text-[14px] pt-4'>Got any Question? kindly text sms help department.</p>
          <p> <MdCancel  className='absolute  top-0 right-0 text-red-600 cursor-pointer ' title='Cancel' onClick={()=>setdata(!get)}/></p>
        
        </div>
       </div>
    </div>
  )
}
