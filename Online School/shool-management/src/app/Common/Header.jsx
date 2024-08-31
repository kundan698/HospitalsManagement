"use client"
import React, { useState } from 'react'
import { IoMdArrowDropup } from "react-icons/io";
import { IoMdArrowDropdown } from "react-icons/io";
import 'animate.css';
import Link from 'next/link';
import { BiSolidMessageRounded } from "react-icons/bi";
import Modal from '../Modal/Modal';
import Modal2 from '../Modal/Modal2';
import Modal3 from '../Modal/Modal3';


export default function Header() {
  let [change,set]=useState(false)
  let[get,setdata] = useState(true)
  let [getModal,setModal] =useState(false)
  let myfunc= ()=>{
    set(!change)
  }
  return (
    <div>

      <div>
        <button onClick={()=>setModal(!getModal)} className='bg-red-800 text-white text-center rounded-lg p-4 fixed bottom-[20px] right-[20px] w-[200px] uppercase'>Book a Demo </button>
      </div>
      <div className='bg-red-950 p-4 rounded-[50%] fixed bottom-[10px] left-4 cursor-pointer'>
        <p on onClick={myfunc}><BiSolidMessageRounded  className='text-[40px] font-bold text-white'/></p>

      </div>
      {change ? <Modal/> : ''}

     {get ?  <Modal2 get={get} setdata={setdata}/> : ''}

    {getModal ?  <Modal3 /> : 'check'}
      
       

<nav class=" bg-[black] fixed w-full z-20 top-0 start-0">
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
  <Link href={'/'} class="flex items-center space-x-3 rtl:space-x-reverse">
      <img src="https://www.classter.com/wp-content/uploads/2023/08/classter-logo-icon-small.webp" class="h-8" alt="Flowbite Logo"/>
     {/*  <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span> */}
  </Link>
  <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
      <Link href={'/contact-us-classter'} type="button" class="text-white bg-[#D02222] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Contact Us</Link>
      <button data-collapse-toggle="navbar-sticky" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
  </div>
  <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
    <ul class="flex uldata flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 text-white dark:border-gray-700">
      <li className='relative'>
        <Link href={'/module'} class="block  px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-md:p-0 md:dark:text-[blue-500]" aria-current="page">Product
            <div className="menubar duration-75 ">
                <div>
                   <ul className='text-black p-4 text-[17px]'>
                    <li className='relative hvr'>Fuctionalities
                        <div className="bdrs"></div>
                    </li>
                    <Link href={'/module'} className='relative hvr hvr1'>Modules
                    <div className="bdrs"></div>
                    <div className='submenu'>
                        <div className='flex justify-between p-20px '>
                            <div>
                                <ul>
                                    <li>Core</li>
                                    <li>Acedemic CRM</li>
                                    <li>Billing</li>
                                    <li>Payments</li>
                                    <li>Achivement</li>
                                    <li>Acedemic CRM</li>
                                    <li>College</li>
                                    <li>Online</li>
                                   
                                </ul>
                            </div>

                            <div>
                                <ul>
                                    <li>Survey and quiz</li>
                                    <li>Internship & Training</li>
                                    <li>Placement</li>
                                    <li>Library</li>
                                    <li>Advanced Featured</li>
                                    <li>Our Department</li>
                                    <li>Our Courses</li>
                                    <li>Acedemic CRM</li>
                                   
                                </ul>
                            </div>

                        </div>
                    </div>
                    </Link>
                    <li className='relative hvr'>Integration & API
                    <div className="bdrs"></div>
                    </li>
                    <li  className='relative hvr'>Products Updates
                    <div className="bdrs"></div>
                    </li>
                   </ul>
                </div>
            </div>
        </Link>
        
      </li>
      <li>
        <a href="#" class="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[red] md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Solution 
        <div className="menubar duration-75 ">
                <div>
                   <ul className='text-black p-4 text-[17px]'>
                    <li className='relative hvr'>For K12 Schools
                        <div className="bdrs"></div>
                    </li>
                   
                    <li className='relative hvr'>For Higher Education
                    <div className="bdrs"></div>
                    </li>
                    <li  className='relative hvr'>Products Updates
                    <div className="bdrs"></div>
                    </li>
                    <li  className='relative hvr'>For Acadmic & Training 
                    <div className="bdrs"></div>
                    </li>
                    <li  className='relative hvr'>For Seminar Education
                    <div className="bdrs"></div>
                    </li>
                    <li  className='relative hvr'>For school District
                    <div className="bdrs"></div>
                    </li>
                    <li  className='relative hvr'>For Corporate learning
                    <div className="bdrs"></div>
                    </li>
                   </ul>
                </div>
            </div>
        </a>
        



      </li>
      <li>
        <a href="#" class="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[red] duration-75 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Benifit
            <div className="menubar duration-75 ">
                <div>
                   <ul className='text-black p-4 text-[17px]'>
                    <li className='relative hvr'>User 
                        <div className="bdrs"></div>
                    </li>
                    <li className='relative hvr hvr1'>Procedurals
                    <div className="bdrs"></div>
                 
                    </li>
                    <li className='relative hvr'>Organizational
                    <div className="bdrs"></div>
                    </li>
                   
                   </ul>
                </div>
            </div>
        </a>
      </li>
      <li>
        <a href="#" class="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[red] duration-75 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Services 
        <div className="menubar duration-75 ">
                <div>
                   <ul className='text-black p-4 text-[17px]'>
                    <li className='relative hvr'>User 
                        <div className="bdrs"></div>
                    </li>
                    <li className='relative hvr hvr1'>Audit
                    <div className="bdrs"></div>
                 
                    </li>
                    <li className='relative hvr'>Provisional
                    <div className="bdrs"></div>
                    </li>
                    <li className='relative hvr'>Installation
                    <div className="bdrs"></div>
                    </li>
                    <li className='relative hvr'>Migration
                    <div className="bdrs"></div>
                    </li>
                    <li className='relative hvr'>Hosting
                    <div className="bdrs"></div>
                    </li>
                    <li className='relative hvr'>Training
                    <div className="bdrs"></div>
                    </li>
                   
                   </ul>
                </div>
            </div>
        </a>
      </li>
      <li>
        <a href="#" class="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[red] duration-75 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Resources 
        <div className="menubar duration-75 ">
                <div>
                   <ul className='text-black p-4 text-[17px]'>
                    <li className='relative hvr'>Blog
                        <div className="bdrs"></div>
                    </li>
                    <li className='relative hvr hvr1'>Case Study
                    <div className="bdrs"></div>
                 
                    </li>
                    <li className='relative hvr'>eBooks & white papers
                    <div className="bdrs"></div>
                    </li>
                    <li className='relative hvr'>Compair Webinar
                    <div className="bdrs"></div>
                    </li>
                    <li className='relative hvr'>Knowledge Base
                    <div className="bdrs"></div>
                    </li>
                    <li className='relative hvr'>Contact Support
                    <div className="bdrs"></div>
                    </li>
                   
                   
                   </ul>
                </div>
            </div>
        </a>
      </li>
      
      <li>
        <a href="#" class="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[red] duration-75 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Company</a>
      </li>
      <li>
        <a href="#" class="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[red] duration-75 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Pricing</a>
      </li>
      <div className='flex gap-2 relative'>
        <img src="https://www.classter.com/wp-content/plugins/sitepress-multilingual-cms/res/flags/en.png" alt="" className='w-[30px] h-[16px] mt-1' />
        <p>English <IoMdArrowDropdown  className='absolute right-[-20px] top-[3px] text-[20px]'/></p>
      </div>
    </ul>
  </div>
  </div>
</nav>

    </div>
  )
}
