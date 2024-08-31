import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <div>
        <section className='my-10 p-4 foot'>
            <div className='max-w-[1170px] mx-auto grid grid-cols-3'>
                <div>
                    <div className=' text-white mn'>
                        <h4 className='font-bold'>Solutions</h4>
                        <p>For K12 Schools</p>
                        <p>For Higher Education</p>
                        <p>For Academies & Training Centers</p>
                        <p>For Seminary Education</p>
                        <p>For School Districts</p>
                        <p>For Corporate Learning</p>
                    </div>
                    <div className='text-white mt-5 mn'>
                        <h4 className='font-bold'>Benefits</h4>
                        <p>School Management</p>
                        <p>IT Management</p>
                        <p>Admissions & Registrations</p>
                        <p>Billing & Payments</p>
                        <p>Student Attendance</p>
                        <p>Gradebook & Assessments</p>
                        <p>Student Engagement</p>
                        <p>Hybrid Learning</p>
                    </div>
                </div>
                <div>
                    <div className=' text-white mn'>
                        <h4 className='font-bold'>Resources</h4>
                        <p>Blog</p>
                        <p>Case Studies</p>
                        <p>eBooks & Whitepapers</p>
                        <p>Demos</p>
                        <p>Webinars</p>
                        <p>Knowledge Baseg</p>
                    </div>
                    <div className='text-white mt-5 mn'>
                        <h4 className='font-bold'>Company</h4>
                        <p>About Classter</p>
                        <p>Contact us</p>
                        <p>Careers</p>
                        
                    </div>
                    <div className='text-white mt-5 mn'>
                    <h4 className='font-bold'>Pricing</h4>
                    <h4 className='font-bold'>Become a Partner</h4>

                    </div>
                </div>

                <div>
                    <h1 className='text-[30px] font-bold text-white text-center'>Get a great tip in your <br /> inbox once every two <br /> weeks</h1>
                </div>
            </div>
            <div className='bdr1 mt-5'>
               
            </div>
            <div className='flex justify-between text-white mt-5 text-[20px]'>
                    <div>
                        <p className=''>@2023 Vertitech. All Rights Reserved.</p>
                    </div>
                    <div>
                        <p>
                        Privacy Policy</p>
                    </div>
                    <div className='flex gap-4 text-[30px] cursor-pointer'>
                       <p><FaFacebookF /></p>
                       <p><FaTwitter /></p>
                       <p><FaInstagram /></p>
                       <p><FaLinkedinIn /></p>
                    </div>
                </div>
        </section>
    </div>
  )
}
