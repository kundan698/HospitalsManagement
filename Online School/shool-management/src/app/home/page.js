'use client'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { MdOutlineArrowOutward } from "react-icons/md";
import Responsive from '../CarouselFolder/Carousel1';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Carousel6 from '../CarouselFolder/Carousel6';
import Carousel7 from '../CarouselFolder/Carousel7';
import Carousel8 from '../CarouselFolder/Carousel8';


export default function Home() {
   
   
  return (
    <div>
        <section className='w-[100%] mt-[150px]'>
            <div className='max-w-[1170px] mx-auto lg:grid grid-cols-2 sm:grid-cols justify-between'>
                <div>
                    <div className='text-white text-[20px]'>
                        <h1 className='text-white font-bold text-[30px]'><span className='text-red-600 text-[30px] font-bold'>Consistently Best Rated </span>School Management System</h1>

                        <p className='pt-5'>School Management System with everything you need, all brought together.</p>
                    </div>
                    <div className='text-white text-[17px] pt-4'>
                        <p>Classter School Management System is designed to streamline operations, enhance academic delivery, and foster a vibrant educational community.</p>
                        <p className='pt-4'>Classter is a SMS that adapts to your workflows and helps educational institutions meet the demands of contemporary education, ensuring administrators, educators, and students thrive in a supportive and efficient environment.</p>
                    </div>
                </div>
                <div className='tps'>
                  
                </div>


            </div>

        </section>
        <section>
             <div className='max-w-[1170px] mx-auto mt-5'>
                <div className='my-10 paralax'>
                    <div className='max-w-[900px] text-center text-white mx-auto bgs1'>
                        <h1 className='pt-[50px] text-[40px] text-white font-bold'>Join Hundreds of Organizations <br />
                        that use Classter to Boost their <br />
                         Efficiency & Streamline Process</h1>
                         <p className='text-[20px] pt-4'>With a platform that will make the management of every aspect of your <br /> institution seamless & efficient, you’ll unlock the full potential of your institution. <br /> Our team is always ready to help you get started.</p>
                         <button className='bg-red-600 p-3 text-white font-[500] rounded table mx-auto w-[200px] mt-3 hover:bg-red-700 duration-75 see'>SEE IT LIVE</button>

                    </div>
                  
                </div>
                <div className='max-w-[900px] text-center mx-auto'>
                   <div className='mt-[30px]'>
                   <img src="https://www.classter.com/wp-content/uploads/2024/07/stats-image-new.webp"className='mt-10' alt="" />
                   </div>

                </div>

             </div>
        </section>
        <section>
            <div className='text-center my-[5%] relative'>
                <h1 className='text-[40px]  font-bold text-white pt-[30px] mb-4'>More than your regular <span className='text-red-800'>School Management</span> <br /> System (SMS)</h1>
                <div className='btm absolute'>

                </div>

            </div>
        </section>
        <section>
            <div className='max-w-[1170px] mx-auto lg:grid grid-cols-2 my-5 gap-8'>
                <div>
                    <div className='copy'>
                       
                    </div>
                </div>
                <div>
                    <div>
                        <h2 className='text-[30px] font-bold text-white'>Automated Administrative Workflows</h2>
                        <p className='text-[14px]  text-white pt-5'>Simplify Complex Tasks, Empower Staff. Classter revolutionizes school administration by automating time-consuming tasks. From admissions and enrollment to scheduling and grade management, our system ensures operational efficiency, freeing up staff to focus on what matters most—nurturing student success.</p>
                        <h2 className='text-[30px] font-bold text-white'>Real-Time Academic Tracking</h2>
                        <p className='text-[14px]  text-white pt-5'>SMonitor, Support, and Celebrate Student Achievement. With Classter, tracking academic progress is seamless. Our intuitive dashboards provide real-time insights into student performance, attendance, and behavior, enabling timely interventions and personalized support, thus driving student achievement to new heights.</p>
                        <h2 className='text-[30px] font-bold text-white'>Integrated Communication Tools</h2>
                        <p className='text-[14px]  text-white pt-5'>Strengthen Connections Within Your School Community. Communication is the cornerstone of a successful educational environment. Classter's integrated communication tools ensure clear, consistent, and instant dialogue between teachers, students, and parents, fostering a collaborative community focused on student growth.

</p>
                    </div>
                </div>

            </div>
        </section>

        <section>
        <div className='max-w-[1170px] mx-auto lg:grid grid-cols-2 my-5 gap-8'>
               
                <div>
                    <div>
                        <h2 className='text-[30px] font-bold text-white'>Robust Reporting and Analytics</h2>
                        <p className='text-[14px]  text-white pt-5'>Data-Driven Strategies for School Excellence. Harness the power of data with Classter's advanced reporting and analytics. Make informed decisions based on comprehensive data analysis, enhancing academic programs, operational efficiency, and overall school performance.</p>
                        <h2 className='text-[30px] font-bold text-white'>Financial Management and Transparency</h2>
                        <p className='text-[14px]  text-white pt-5'>Streamline Billing, Fees, and Financial Reporting. Classter simplifies financial management for educational institutions. Our platform offers transparent tracking of billing, fees, and donations, coupled with detailed financial reports, ensuring fiscal responsibility and sustainability.</p>
                        <h2 className='text-[30px] font-bold text-white'>Customizable Modules and Scalability</h2>
                        <p className='text-[14px]  text-white pt-5'>Tailor Classter to Your School's Unique Needs. Every school is unique, and Classter is designed to adapt. With customizable modules and scalable solutions, our system grows with your institution, ensuring you have the tools you need to succeed, today and in the future.



</p>
                    </div>
                </div>
                <div>
                    <div className='copy1'>
                       
                    </div>
                </div>

            </div>
        </section>
        <section className='mt-10'>
            <div className='max-w-[1170px] mx-auto lg:grid grid-cols-[30%_auto] my-5 gap-8'>
                <div>
                    <div className='bg-red-700 text-white p-5 mb-5 text-center rounded-2xl'>
                        <h2 className='text-[20px] uppercase'>higher education college</h2>
                    </div>
                    <div className='bg-white text-black p-5 ele mb-5  text-center rounded-2xl'>
                        <h2 className='text-[20px] uppercase'>k12 / elementory</h2>
                    </div>
                    <div className='bg-white text-black p-5 ele  mb-5  text-center rounded-2xl'>
                        <h2 className='text-[20px] uppercase'>seminar</h2>
                    </div>
                    <div className='bg-white text-black p-5 ele  mb-5  text-center rounded-2xl'>
                        <h2 className='text-[20px] uppercase'>training center/ acedemy</h2>
                    </div>
                    <div className='cl1 flex justify-between '>
                        <div>
                        <h2 className='text-[25px] uppercase text-white ] font-bold'>read <br /> all case <br /> studies</h2>
                        </div>
                        <div className='arrows relative'>
                            <p className='text-center font-bold text-[30px]'><MdOutlineArrowOutward  className=' absolute pt-3 text-[40px] text-center top-[0px] right-[8px]'/></p>
                        </div>
                 
                </div>
                </div>
                
                <div className='bg-white  rounded-[20px]'>
                    <div className='grid grid-cols-[30%_auto] gap-10  p-4'>
                       <div>
                       <img src="https://www.classter.com/wp-content/uploads/elementor/thumbs/ucreativa-qb38cr58ffz5k1nhgquodh7s8e5pmzbzoc2r4xej8u.webp" alt=""  className='w-[200px]'/>
                       </div>
                       <div>
                          <h3 className='text-[30px] font-bold'>UCreativa</h3>
                          <p className='text-[20px]'>Classter is the SIS of choice for Higher Education, due to its fully configurable, modular, cloud-based architecture. Classter team worked with UCreativa, a leading institution with hundreds of students in Costa Rica offering exceptionally designed, student-centred education programs in creative fields such as Fashion, Interior Design etc.</p>


                       </div>

                    </div>
                    <div className='grid grid-cols-[30%_auto] gap-10  p-4'>
                       <div>
                       <img src="https://www.classter.com/wp-content/uploads/2023/08/costa-rica.webp" alt="" />
                       </div>
                       <div>
                          
                          <p className='text-[20px]'>Classter helped UCreativa accommodate all operations under one roof and automate its Admission Process and Academic Management & Reporting.</p>
                          <button className='read'>read the case study</button>


                       </div>

                    </div>
                </div>
                
            </div>
        </section>
        <section className='my-10'>
            <div className='max-w-[1170px] mx-auto grid grid-cols-[35%_auto]'>
                <div>
                    <div className='relative'>
                        <h1 className='text-[40px] font-bold text-white'>For Organizations <br /> of all Sizes and <br /> Types</h1>
                        <div className='rdd'></div>
                        
                    </div>
                    <p className='text-[16px] pt-10 font-bold text-white'>Customize Classter to fit your needs. Create a personalized system just for you.</p>
                    <button className='see'>see it live</button>
                </div>
                <div className='grid grid-cols-3 gap-4'>
                    <div className='relative tr'>
                       <div className='bg-white hh1 h-[300px] w-[100%]'>
                         <h1 className='absolute hh2 text-[30px] top-[100px] left-[50px] text-center font-semibold'>Higher <br />Education</h1>
                       </div>
                       <div className='brgs'>

                       </div>
                       
                    </div>
                    <div className='relative tr'>
                       <div className='bg-white hh1 h-[300px] w-[100%]'>
                         <h1 className='absolute hh2 text-[30px] top-[100px] left-[20px] text-center font-semibold'>Maximum Student <br></br> Placed</h1>
                       </div>
                       <div className='brgs'>

                       </div>
                       
                    </div>
                    <div className='relative tr'>
                       <div className='bg-white hh1 h-[300px] w-[100%]'>
                         <h1 className='absolute hh2 text-[30px] top-[100px] left-[20px] text-center font-semibold'>Best Teacher <br></br> From India</h1>
                       </div>
                       <div className='brgs'>

                       </div>
                       
                    </div>
                    

                </div>

            </div>
        </section>


        <div className='text-white text-center mx-10 bg-danger mt-5'>
        <Tabs>
    <TabList>
      <Tab>Billing & Payments</Tab>
      <Tab>Survey & Quizes</Tab>
      <Tab>Acedmic CRM</Tab>
      <Tab>Admissions</Tab>
      <Tab>Discover More Modules</Tab>
    </TabList>

    <TabPanel>
      <div className='max-w-[1170px] mx-auto grid grid-cols-2 mt-10'>
       <div>
       <h2 className='text-white font-bold text-[30px]'><span className='text-red-800 text-[30px]'>Simplify Your IT setup</span> <br></br>with Classter.</h2>
       <p className='text-white'>Say goodbye to fragmented systems and hello to a unified platform that combines five different tools into one seamless experience. </p>

       <div className='bg-white p-4 rounded-lg w-[300px] mx-[150px] mt-5'>
        <h4 className='text-[18px] font-bold text-black'>BILLING & PAYMENTS</h4>
        <p className='text-black'>Make billing and payments a breeze with Classter. Simplify your school’s financial management and try our Billing & Payments module today! </p>
       </div>
       </div>
       <div className='mob'>
        <img src='https://www.classter.com/wp-content/uploads/2024/07/mobile-mockup-new.webp'></img>
       </div>

      </div>
    </TabPanel>
    <TabPanel>
      <div className='max-w-[1170px] mx-auto grid grid-cols-2 mt-10'>
       <div>
       <h2 className='text-white font-bold text-[30px]'><span className='text-red-800 text-[30px]'>Simplify Your IT setup</span> <br></br>with Classter.</h2>
       <p className='text-white'>Say goodbye to fragmented systems and hello to a unified platform that combines five different tools into one seamless experience. </p>

       <div className='bg-white p-4 rounded-lg w-[300px] mx-[150px] mt-5'>
        <h4 className='text-[18px] font-bold text-black'>SURVEYS & QUIZZES</h4>
        <p className='text-black'>Create, distribute, and analyze assessments for valuable insights in real-time </p>
       </div>
       </div>
       <div className='mob'>
        <img src='https://www.classter.com/wp-content/uploads/2024/07/mobile-mockup-new.webp'></img>
       </div>

      </div>
    </TabPanel>
    <TabPanel>
      <div className='max-w-[1170px] mx-auto grid grid-cols-2 mt-10'>
       <div>
       <h2 className='text-white font-bold text-[30px]'><span className='text-red-800 text-[30px]'>Simplify Your IT setup</span> <br></br>with Classter.</h2>
       <p className='text-white'>Say goodbye to fragmented systems and hello to a unified platform that combines five different tools into one seamless experience. </p>

       <div className='bg-white p-4 rounded-lg w-[300px] mx-[150px] mt-5'>
        <h4 className='text-[18px] font-bold text-black'>ACADEMIC CRM</h4>
        <p className='text-black'>Strengthen connections with our Academic CRM. Engage students, educators, parents, and staff in meaningful ways—try it out! </p>
       </div>
       </div>
       <div className='mob'>
        <img src='https://www.classter.com/wp-content/uploads/2024/07/mobile-mockup-new.webp'></img>
       </div>

      </div>
    </TabPanel>
    <TabPanel>
      <div className='max-w-[1170px] mx-auto grid grid-cols-2 mt-10'>
       <div>
       <h2 className='text-white font-bold text-[30px]'><span className='text-red-800 text-[30px]'>Simplify Your IT setup</span> <br></br>with Classter.</h2>
       <p className='text-white'>Say goodbye to fragmented systems and hello to a unified platform that combines five different tools into one seamless experience. </p>

       <div className='bg-white p-4 rounded-lg w-[300px] mx-[150px] mt-5'>
        <h4 className='text-[18px] font-bold text-black'>ADMISSIONS</h4>
        <p className='text-black'>Streamline student enrollment with our Admissions Module. Make the application process smooth and welcoming from the start!  </p>
       </div>
       </div>
       <div className='mob'>
        <img src='https://www.classter.com/wp-content/uploads/2024/07/mobile-mockup-new.webp'></img>
       </div>

      </div>
    </TabPanel>
  </Tabs>
        </div>

        <section className='mt-10'>
                  <div>
                    <h2 className='text-white text-[30px] font-bold p-4 text-center'>Better Experiences for Everyone, Everywhere </h2>
                    <p className='text-white text-center'>For Students, Teachers and Parents</p>
                   </div>
                   <div>
                    
                   </div>

                <div className='max-w-[1170px] mx-auto mt-10'>
                    <div className='text-white '>
                    <Tabs>
                    <TabList>
                    <Tab><div><p className='text-[20px] w-[150px] text-center'> student <br></br> portal</p></div></Tab>
                    <Tab><div><p className='text-[20px] w-[150px] text-center'> Parent <br></br> portal</p></div></Tab>
                    <Tab><div><p className='text-[20px] w-[150px] text-center'> Applicant <br></br> portal</p></div></Tab>
                    <Tab><div><p className='text-[20px] w-[150px] text-center'> Educator <br></br> portal</p></div></Tab>
                    <Tab><div><p className='text-[20px] w-[150px] text-center'> Alumini <br></br> portal</p></div></Tab>
                    <Tab><div><p className='text-[20px] w-[150px] text-center'> Employee <br></br> portal</p></div></Tab>
                    </TabList>

                  <TabPanel>
                  <div className='max-w-[1170px] mx-auto mt-10 grid grid-cols-[60%_auto]'>
                    <div>
                        <div>
                            <img src='https://www.classter.com/wp-content/uploads/2024/07/student-portal-mockup.webp'></img>
                        </div>
                    </div>
                    <div className='text-center text-white mt-10'>
                        <h2 className='text-[30px] font-bold mb-10 text-red-800'>STUDENT PORTAL</h2>
                        <p className='text-[18px]'>Students can easily access info on classes, <br></br> homework, grades, and attendance with their user-friendly portal. </p>
                        <button className='bg-red-800 text-white rounded-xl text-center p-3 mt-5 uppercase font-bold text-[30px]'>Expolre Our Portal</button>
                    </div>


                  </div>
                 </TabPanel>
                 <TabPanel>
                  <div className='max-w-[1170px] mx-auto mt-10 grid grid-cols-[60%_auto]'>
                    <div>
                        <div>
                            <img src='https://www.classter.com/wp-content/uploads/2024/07/student-portal-mockup.webp'></img>
                        </div>
                    </div>
                    <div className='text-center text-white mt-10'>
                        <h2 className='text-[30px] font-bold mb-10 text-red-800'>STUDENT PORTAL</h2>
                        <p className='text-[18px]'>Students can easily access info on classes, <br></br> homework, grades, and attendance with their user-friendly portal. </p>
                        <button className='bg-red-800 text-white rounded-xl text-center p-3 mt-5 uppercase font-bold text-[30px]'>Expolre Our Portal</button>
                    </div>


                  </div>
                 </TabPanel>
                 <TabPanel>
                  <div className='max-w-[1170px] mx-auto mt-10 grid grid-cols-[60%_auto]'>
                    <div>
                        <div>
                            <img src='https://www.classter.com/wp-content/uploads/2024/07/parent-portal-mockup-updated.webp'></img>
                        </div>
                    </div>
                    <div className='text-center text-white mt-10'>
                        <h2 className='text-[30px] font-bold mb-10 text-red-800'>PARENT PORTAL</h2>
                        <p className='text-[18px]'>Parents stay updated with academic calendars, schedule meetings with teachers, and manage tuition payments through their own portal.  </p>
                        <button className='bg-red-800 text-white rounded-xl text-center p-3 mt-5 uppercase font-bold text-[30px]'>Expolre Our Portal</button>
                    </div>


                  </div>
                 </TabPanel>
                 <TabPanel>
                  <div className='max-w-[1170px] mx-auto mt-10 grid grid-cols-[60%_auto]'>
                    <div>
                        <div>
                            <img src='https://www.classter.com/wp-content/uploads/2024/07/parent-portal-mockup-updated.webp'></img>
                        </div>
                    </div>
                    <div className='text-center text-white mt-10'>
                        <h2 className='text-[30px] font-bold mb-10 text-red-800'>PARENT PORTAL</h2>
                        <p className='text-[18px]'>Parents stay updated with academic calendars, schedule meetings with teachers, and manage tuition payments through their own portal.  </p>
                        <button className='bg-red-800 text-white rounded-xl text-center p-3 mt-5 uppercase font-bold text-[30px]'>Expolre Our Portal</button>
                    </div>


                  </div>
                 </TabPanel>
                 <TabPanel>
                  <div className='max-w-[1170px] mx-auto mt-10 grid grid-cols-[60%_auto]'>
                    <div>
                        <div>
                            <img src='https://www.classter.com/wp-content/uploads/2024/07/applicant-portal-mockup.webp'></img>
                        </div>
                    </div>
                    <div className='text-center text-white mt-10'>
                        <h2 className='text-[30px] font-bold mb-10 text-red-800'>APPLICANT PORTAL</h2>
                        <p className='text-[18px]'>Admission officers can set up custom portals for handling applications, whether for students or parents applying for their kids.  </p>
                        <button className='bg-red-800 text-white rounded-xl text-center p-3 mt-5 uppercase font-bold text-[30px]'>Expolre Our Portal</button>
                    </div>


                  </div>
                 </TabPanel>
                 <TabPanel>
                  <div className='max-w-[1170px] mx-auto mt-10 grid grid-cols-[60%_auto]'>
                    <div>
                        <div>
                            <img src='https://www.classter.com/wp-content/uploads/2024/07/educator-portal-mockup.webp'></img>
                        </div>
                    </div>
                    <div className='text-center text-white mt-10'>
                        <h2 className='text-[30px] font-bold mb-10 text-red-800'>EDUCATOR PORTAL</h2>
                        <p className='text-[18px]'>Educators use their portal to plan lessons, track attendance, update grades, and get real-time student performance info.  </p>
                        <button className='bg-red-800 text-white rounded-xl text-center p-3 mt-5 uppercase font-bold text-[30px]'>Expolre Our Portal</button>
                    </div>


                  </div>
                 </TabPanel>

                 <TabPanel>
                  <div className='max-w-[1170px] mx-auto mt-10 grid grid-cols-[60%_auto]'>
                    <div>
                        <div>
                            <img src='https://www.classter.com/wp-content/uploads/2024/07/alumni-portal-mockup.webp'></img>
                        </div>
                    </div>
                    <div className='text-center text-white mt-10'>
                        <h2 className='text-[30px] font-bold mb-10 text-red-800'>ALUMINI PORTAL</h2>
                        <p className='text-[18px]'>Graduates can stay connected with their school, build a strong network, and support the student community through their portal.   </p>
                        <button className='bg-red-800 text-white rounded-xl text-center p-3 mt-5 uppercase font-bold text-[30px]'>Expolre Our Portal</button>
                    </div>


                  </div>
                 </TabPanel>
                 <TabPanel>
                  <div className='max-w-[1170px] mx-auto mt-10 grid grid-cols-[60%_auto]'>
                    <div>
                        <div>
                            <img src='https://www.classter.com/wp-content/uploads/2024/07/employee-portal-mockup.webp'></img>
                        </div>
                    </div>
                    <div className='text-center text-white mt-10'>
                        <h2 className='text-[30px] font-bold mb-10 text-red-800'>EMPLOYEE PORTAL</h2>
                        <p className='text-[18px]'>Employees can manage admin tasks, communicate with students and parents, handle enrollments and assignments, and organize the school timetable.  </p>
                        <button className='bg-red-800 text-white rounded-xl text-center p-3 mt-5 uppercase font-bold text-[30px]'>Expolre Our Portal</button>
                    </div>


                  </div>
                 </TabPanel>
               </Tabs>
                    </div>
               
                 </div>
        </section>

        <div className='mt-10 p-4'>
            <h2 className='text-[40px] text-center font-bold text-white'><span className='text-red-800 text-[40px] text-center font-bold '>98% </span>User Satisfaction Rating</h2>
        </div>

       <section>
        <div className='max-w-[1170px] mx-auto lg:grid grid-cols-2 my-5 gap-[40px]'>
          <div>
            <Carousel6/>
          </div>
          <div>
            <div className='flex hl gap-6'>
                <img src='https://www.classter.com/wp-content/uploads/2024/02/slashdot-leader-2024.webp'></img>
                <img src='https://www.classter.com/wp-content/uploads/2024/02/sa-customer_support-2024.webp' className='mx-[10%]'></img>
            </div>
            <div className='flex hl mt-5 gap-5'>
                <img src='https://www.classter.com/wp-content/uploads/2024/02/leader-sourceforge-winter-2024-white.webp'></img>
                <img src='https://www.classter.com/wp-content/uploads/2024/02/ga-features_and_functionality-2024.webp' className='mx-[10%]'></img>
            </div>
            <div className='flex hl mt-5 gap-6'>
                <img src='https://www.classter.com/wp-content/uploads/2024/02/ca-value-2024.webp'></img>
                <img src='https://www.classter.com/wp-content/uploads/2024/02/trusted-vendor-black.webp' className='mx-[10%]'></img>
            </div>
          </div>

        </div>
       </section>

       <section  className='mt-10'>
          <div className='text-center'>
            <h2 className='text-[40px] text-white font-bold'>Join us!</h2>
            <p className='text-center text-white'>Classter helps institutions in<span className='text-red-800'> 35+ countries</span> streamline their administration & operations.</p>
          </div>
          <div className='bg-white p-4 mt-10'>
            <Carousel7/>

          </div>
       </section>
       <section className='mt-10 w-[90%]'>
        <Carousel8/>
        <div className='max-w-[1170px] mx-auto flex gap-4'>
          
           
        </div>
       </section>

       <section className='mt-10'>
             <div className='max-w-[1170px] mx-auto mt-5'>
                <div className='my-10 paralax'>
                    <div className='max-w-[900px] text-center text-white mx-auto bgs1'>
                        <h1 className='pt-[50px] text-[40px] text-white font-bold'>Join Hundreds of Organizations <br />
                        that use Classter to Boost their <br />
                         Efficiency & Streamline Process</h1>
                         <p className='text-[20px] pt-4'>With a platform that will make the management of every aspect of your <br /> institution seamless & efficient, you’ll unlock the full potential of your institution. <br /> Our team is always ready to help you get started.</p>
                         <button className='bg-red-600 p-3 text-white font-[500] rounded table mx-auto w-[200px] mt-3 hover:bg-red-700 duration-75 see'>SEE IT LIVE</button>

                    </div>
                  
                </div>
               

             </div>
        </section>

        <section className='mt-10 bg-white rds2'>
            <div className='bg-white'>
                <h2 className='text-center text-[50px]'>Is Classter a Good Fit for you?</h2>
                <p className='text-center p-2'>Classter is flexible & customizable to fit your organization's needs. Take our quick quiz to see how Classter can work for you! </p>
                <button className='bg-red-800 text-white text-center rounded-lg p-2 table mx-auto w-[200px] mt-10'>Take a Quiz</button>

            </div>
        </section>
        <section className='mt-10 p-4'>
            <div className='max-w-[1170px] mx-auto p-4 grid grid-cols-2'>
                <div className='text-white'>
                    <p className='text-white text-[30px]'>Classter is Integrated with</p>
                    <p className='text-red-700 text-[30px] mb-6'>40+ Tools</p>
                    <p className='mb-6'>Classter connects effortlessly with 40+ popular tools like Office 365, Moodle, Webex, MS Teams, Zoom, Hubspot, and more.  </p>
                    <p>Our open API makes linking with your current tools a breeze. </p>
                    <button className='bg-red-800 text-white text-center rounded-lg p-2   w-[300px] mt-10 text-[30px]'>View Integration</button>

                </div>
                <div>
                    <img src='https://www.classter.com/wp-content/uploads/2024/07/classter-intergrations.webp'></img>
                </div>

            </div>
        </section>

       

    </div>
  )
}
