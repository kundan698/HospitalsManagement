"use client"
import axios from 'axios';
import React from 'react'
import { IoIosSend } from "react-icons/io";

export default function Modal() {
   

    let sent = (event)=>{
        event.preventDefault()
        let name = event.target.name.value;
       
        let objs={name}


        axios.post('http://localhost:7000/about-us',objs)
        .then((ress)=>{
            console.log(ress)
        })
       
    }
  return (
    <div>
        <div className='bg-white h-[400px] rounded-lg p-4 w-[400px] fixed bottom-[100px] left-[20px]'>
            <div className='bg-red-900 h-[100px] w-[100%] rounded '>
                <div className=' p-3 relative'>
                    <img src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTzNOXl8Jk2XFeV0gjkBiGSMx7Z6weDX-PMIsEfefKgxJhbUIec" alt=""  className='w-[50px] h-[50px] rounded-[50%] border-3 bd3'/>
                    <div className='bg-green-700 h-[10px] w-[10px] fx absolute rounded-[50%]'></div>
                </div>
                <div className='mt-5 flex gap-2'>
                    <img src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTzNOXl8Jk2XFeV0gjkBiGSMx7Z6weDX-PMIsEfefKgxJhbUIec" alt="not found" className='w-[50px] h-[50px] rounded-[50%] border-3 bd3  mx-2'/>
                    <div className='affect'>
                        <p className='mt-1 text-[14px]'>Got any questions? I'm happy to help.</p>
                        <div className='affect1'>
                        <p className='mt-1 text-[14px]'>Choose an option below.</p>
                        <div className='flex gap-4 mx-4 '>
                            <button className='sales'>Get help</button>
                            <button  className='sales'>Talk to sales</button>
                        </div>
                        <form action="" className='flex mt-10 boxsms'>
                        <div class="relative z-0 w-full mb-5 group">
      <input type="email" name="name" id="floating_email" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label for="floating_email" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Write your  message...</label>
  </div>
                            <p><IoIosSend className='text-[30px] text-green-700' onClick={sent}/></p>
                        </form>
                    </div>
                    </div>

                </div>
                   


            </div>


        </div>
    </div>
  )
}
