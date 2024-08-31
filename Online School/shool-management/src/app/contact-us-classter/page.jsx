"use client"
import axios from 'axios'
import React, { useState } from 'react'
import Carousel1 from '../CarouselFolder/Carousel1'
import Carousel from '../CarouselFolder/Carousel1'
import Responsive from '../CarouselFolder/Carousel1'
import Carousel2 from '../CarouselFolder/Carousel2'
import Carousel3 from '../CarouselFolder/Carousel3'
import Carousel4 from '../CarouselFolder/Carousel4'
import Carousel5 from '../CarouselFolder/Carousel5'
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { MdCall } from "react-icons/md";


export default function page() {
    let[apires,setapi]=useState("")
    

    let func = (event)=>{
        event.preventDefault()
       let email= event.target.email.value
       let password= event.target.password.value
       let name= event.target.name.value
       let lastname= event.target.lastname.value
       let phone= event.target.phone.value
       let formData={email,password,name,lastname,phone}
      
       axios.post('http://localhost:2020/form',formData)
       .then((ress)=>{
       setapi(ress.data.msg)
       })
    }
  return (
    <>

    
        
        <div className='max-w-[1170px] mx-auto grid grid-cols-[45%_auto] mt-[15%] im1'>
            <div>
               <div className='mt-10 text-white'>
                   <h2 className='text-white text-[40px] font-bold'>Let's <span className='text-red-700 text-[40px] font-bold'>Talk</span></h2>
                   <p className='text-[20px]'>We'd love to talk about how we can work together to help you unlock the full productivity potential of your institution.</p>
               </div>
            </div>
            <div>
                

        <form class="max-w-md mx-auto frms" onSubmit={func}>
     <h1 className='text-white text-center p-4'> {apires}</h1>
  <div class="relative z-0 w-full mb-5 group">
      <input type="email" name="email" id="email" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "  />
      <label for="email" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
  </div>
  <div class="relative z-0 w-full mb-5 group">
      <input type="password" name="password" id="password" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "  />
      <label for="password" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
  </div>
  <div class="relative z-0 w-full mb-5 group">
      <input type="password" name="repeat_password" id="repeat_password" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "  />
      <label for="repeat_password" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Confirm password</label>
  </div>
  <div class="grid md:grid-cols-2 md:gap-6">
    <div class="relative z-0 w-full mb-5 group">
        <input type="text" name="name" id="first_name" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "  />
        <label for="first_name" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">First name</label>
    </div>
    <div class="relative z-0 w-full mb-5 group">
        <input type="text" name="lastname" id="last_name" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "  />
        <label for="last_name" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Last name</label>
    </div>
  </div>
  <div class="grid md:grid-cols-2 md:gap-6">
    <div class="relative z-0 w-full mb-5 group" id='dl'>
        <input type="tel"  name="phone" id="phone" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "  />
        <label for="phone" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone number (123-456-7890)</label>
    </div>
    <div class="relative z-0 w-full mb-5 group">
        <input type="text" name="company" id="company" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " />
        <label for="company" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Company (Ex. Google)</label>
    </div>
  </div>
  <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
         </form>

            </div>
           
           
        </div>

        <section>
            <div className='max-w-[1170px] mx-auto grid grid-cols-[auto_70%] gap-5'>
                <div className=''>
                    <h1 className='text-white text-[60px] p-4 font-bold'>98% User <br /> Satisfaction <br /> Rating</h1>
                    <div className='text-white text-[20px]'>
                    <p>Classter is featured on <br /></p>
                    <p>Capterra & <span className='text-red-800'>SourceForge as a great choice</span> <br /> for educational organizations.</p>
                    </div>
                </div>
                 
                 <div className=' mt-10'>
                   <Responsive/>
                 </div>

            </div>

        </section>
        <section>
            <div className='max-w-[95%] mx-auto  p-2 mt-10'>
              <Carousel2/>

            </div>
        </section>

        <section className='rounds'>
            <div className='text-[40px] font-bold text-center p-4'>
               <h2>Join hundreds of educational <br /> organizations who trust <br /> Classter!</h2>
            </div>
            <Carousel3/>
            <div className='mt-5'>
            <Carousel4/>
            </div>

            <div className='mt1'>
                <Carousel5/>
            </div>
           
        </section>

        <section className='mt-10 text-white text-center'>
            <div className='max-w-[1170px] mx-auto '>
                 <h3 className='text-[50px] font-bold text-white pt-10v text-center'>Classter is Fully Integrated with 40+ Tools</h3>
                 <p className='pt-10 text-[20px]'>Classter offers seamless integration with over 40 of the most popular third-party tools, including Office <br /> 365, Moodle, Webex, MS Teams, Zoom, Hubspot and more. With an open API, Classter makes it easy for <br /> you to connect with your existing tools and workflows, ensuring a smooth and seamless experience.</p>
            </div>
        </section>
        <section className='mt-10'>
            <div className='max-w-[1170px] mx-auto mt-10' id='mx1'>

                <div className='ht2 flex justify-between'>
                    <img src="https://www.classter.com/wp-content/uploads/2023/08/workspace.webp" alt=""  className='w-[200px]'/>
                    <img src="https://www.classter.com/wp-content/uploads/2023/08/bluesnap.webp" alt=""  className='w-[100px] h-[100px]'/>
                    <img src="https://www.classter.com/wp-content/uploads/2023/08/teams.webp" alt=""  className='w-[150px] h-[150px]' />
                </div>
                <div className='ht2 flex justify-between'>
                    <img src="https://www.classter.com/wp-content/uploads/2023/08/canva.webp" alt=""  className='w-[100px]'/>
                    <img src="https://www.classter.com/wp-content/uploads/2023/08/stripe.webp" alt=""  className='w-[100px] h-[100px]'/>
                    <img src="https://www.classter.com/wp-content/uploads/2023/08/zoom.webp" alt=""  className='w-[150px] h-[150px]' />
                    <img src="https://www.classter.com/wp-content/uploads/2023/09/see-all.webp" alt="" />
                </div>
                <div className='ht2 flex justify-between'>
                    <img src="https://www.classter.com/wp-content/uploads/2023/08/moodle.webp" alt=""  className='w-[100px]'/>
                    <img src="https://www.classter.com/wp-content/uploads/2023/08/office.webp" alt=""  className='w-[100px] h-[100px]'/>
                    <img src="https://www.classter.com/wp-content/uploads/2023/08/brightspace.webp" alt=""  className='w-[150px] h-[150px] mt-3' />
                   
                </div>

            </div>
        </section>

        <section className='mt-10'>
        <div>
                    <h3 className='text-white text-[40px] font-bold text-center'>HOW TO CONTACT US</h3>
                </div>
            <div className='max-w-[1170px] mx-auto  p-5 grid grid-cols-3'>
                <div>
                    <div className='text-white text-center'>
                      <p className='text-white text-[100px] mx-[140px] font-bold'><MdEmail /></p>
                        <p>Sales</p>
                        <p>sels@classter.com</p>
                        <p>Support</p>
                        <p>support@classter.com</p>
                        <p>Partners</p>
                        <p>partners@classter.com</p>
                    </div>

                    
                </div>
                <div>
                    <div className='text-white text-center'>
                      <p className='text-white text-[100px] mx-[140px] font-bold'><FaLocationDot /></p>
                      <p>10 Damianou <br /> Str.
                        65403, Kavala</p>
                    </div>

                    
                </div>
                <div>
                    <div className='text-white text-center'>
                      <p className='text-white text-[100px] mx-[140px] font-bold'><MdCall /></p>
                        <p className='cursor-pointer hover:text-red-800 duration-75'>Sales.</p>
                        <p className='cursor-pointer hover:text-red-800 duration-75'>+91-9597583822</p>
                        <p className='cursor-pointer hover:text-red-800 duration-75'>Support</p>
                        <p className='cursor-pointer hover:text-red-800 duration-75'>+91-9597583544</p>

                    </div>

                    
                </div>

               

            </div>
        </section>

       
        </>
        
       
    
  )
}
