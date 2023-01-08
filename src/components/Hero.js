import React from 'react'

export default function Hero() {
  return (
    <div>
         <section className="flex items-center justify-center base_bg mb-20 pb-20 md:pb-0 bg-auto md:bg-cover -mt-20">
      <div className="w-full relativ overflow-hidden flex">
         <div className=" mx-auto mt-10 md:mt-0">
            <div
               className="relative z-10 pb-8  sm:pb-16 md:pb-20  lg:max-w-xl 2xl:max-w-5xl lg:w-full lg:pb-28 xl:pb-32 h-full">
               
               <main className="mt-10 sm:mt-0 mx-auto  px-4 sm:pt-12 md:pt-50 xl:pt-60 sm:px-6 m lg:px-8">
                  <div className="sm:text-center lg:text-left">
                     <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                        <span className="block xl:inline">Integrated School Platform</span>
                        
                     </h1>
                     <p
                        className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                        A multiplatform application to manage all your school neeeds and usecases on a single
                        platform</p>
                     <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                        <div className="rounded-md shadow">
                           <a href="{%url 'dashboard'%}"
                              className="w-full flex items-center justify-center px-8 py-3 text-base font-medium rounded-md text-white bg-black hover:bg-transparent hover:text-black border-black md:py-4 md:text-lg md:px-10 border-4">
                              Dashboard </a>
                           {/* <a href="{%url 'school_signup'%}"
                              className="w-full flex items-center justify-center px-8 py-3 text-base font-medium rounded-md text-white bg-black hover:bg-transparent hover:text-black border-black md:py-4 md:text-lg md:px-10 border-4">
                              Get started </a> */}

                        </div>

                     </div>
                  </div>
               </main>
            </div>
         </div>
         <div className=" lg:w-1/2 hidden md:flex mt-20">
            <img className=" w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full rounded-bl-2xl"
               src="https://images.unsplash.com/photo-1584697964156-deca98e4439d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
               alt="" />
         </div>
      </div>
   </section>
    </div>
  )
}
