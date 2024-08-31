import React from 'react'

export default function Modal3() {
  return (
    <div>
        <div className='modal3'>
            <div className="modals">
                <div >
                    <img src="https://static.hsappstatic.net/ui-images/static-2.679/optimized/meetings.svg" alt=""  className='mx-[70px]'/>
                    <h5 className='text-center text-slate-600 text-[50px] font-bold camp mb-7'>Schedule Your <br /> Personalized Classter <br /> Demo Now</h5>
                    <p className='text-center'>Don't miss out on this opportunity to transform your institution! Experience a tailored demonstration designed to meet your unique needs and challenges. We'll take the time to understand your institution's specific goals and show you the power of Classter.</p>

                    <form action="">
                    <div class="relative z-0 w-full mb-5 group">
                   <input type="email" name="floating_email" id="floating_email" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                   <label for="floating_email" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>

                   <button className='bg-red-700 p-2 text-white text-center rounded-lg mt-5 table mx-auto w-[200px] text-[18px] uppercase font-bold'>Start Booking</button>
  </div>
                    </form>
                </div>
            </div>

        </div>
    </div>
  )
}
