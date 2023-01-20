import React from 'react'
import Layout from "./StudentLayout";
import { MdNavigateNext } from "react-icons/md";
import { BiBook } from "react-icons/bi";

export default function Subjects() {
  return (
    <Layout>
        <div className="flex flex-col my-10 min-[1200px]:flex-row md:px-10 min-[1200px]:px-0">
        <div className="w-full min-[1200px]:ml-10 2xl:pl-0 xl:w-3/5 2xl:w-3/4 2xl:mx-10">
        <p className='mb-4 text-3xl font-semibold'>Subjects</p>
        <div className="w-full py-10 text-black h-max">
        <div className="flex flex-col items-center justify-between p-4 mb-4 bg-white rounded-2xl">
            <div className='flex justify-between w-full'>

        <div className="flex flex-col justify-center">
        <div className="bg-[#3399FF] p-2 rounded-full self-start">
                  <BiBook className="w-6 h-6 text-white" />
                </div>
              <p className="text-3xl font-semibold text-[#5F6368]">Physics</p>
              <p className="text-lg text-[#5F6368] flex flex-row items-center">
                View All <MdNavigateNext />{" "}
              </p>
            </div>
            <img src="https://images.unsplash.com/photo-1507413245164-6160d8298b31?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" className='object-cover h-32 w-[40rem] rounded-2xl'/>

            </div>
            </div>


            <div className="flex flex-col items-center justify-between p-4 mb-4 bg-white rounded-2xl">
            <div className='flex justify-between w-full'>

        <div className="flex flex-col justify-center">
        <div className="bg-[#3399FF] p-2 rounded-full self-start">
                  <BiBook className="w-6 h-6 text-white" />
                </div>
              <p className="text-3xl font-semibold text-[#5F6368]">Maths</p>
              <p className="text-lg text-[#5F6368] flex flex-row items-center">
                View All <MdNavigateNext />{" "}
              </p>
            </div>
            <img src="https://images.unsplash.com/photo-1509228627152-72ae9ae6848d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" className='object-cover h-32 w-[40rem] rounded-2xl'/>

            </div>
            </div>
        </div>

            </div>
            <div className="w-full my-10 xl:w-2/5 2xl:w-1/4 min-[1200px]:mx-10 px-10 min-[1200px]:px-0 min-[1200px]:my-0">

                <p className='mb-4 text-3xl font-semibold'>Shop Books</p>
            <div className="md:rounded-[30px] bg-white text-black p-4 md:p-6 w-full  py-10 h-max">
              <a href="/">
                <div className="flex items-center justify-between p-4 bg-gray-100 rounded-2xl">
                  
                  <div className="flex flex-col">
                    <span className="font-sans font-medium text-black uppercase text-md sm:text-xl">
                      Maths
                    </span>
                    <p className="pt-2 text-xs  sm:text-sm text-[#8A8A8A]">
                      Buy Now
                    </p>
                  </div>
                  <span
                    className="text-sm text-center bg-[#61C26B] rounded-full self-start  w-36 py-2  text-white"
                  >
                    Buy Now
                  </span>
                </div>
              </a>
             

              <a href="/">
                <div className="mt-4 rounded-[20px] bg-gray-200 bg-opacity-25 p-4 hover:bg-opacity-75 duration-300 ease-in-out">
                  <span className="font-sans font-medium uppercase">
                    See All
                  </span>
                </div>
              </a>
            </div>
                </div>
        </div>
    </Layout>
  )
}
