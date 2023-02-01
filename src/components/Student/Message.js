import React from 'react'
import Layout from "./StudentLayout"
import MessageSidebar from './MessageSidebar'
export default function Message() {
  return (
    <Layout>
    <div class="flex flex-row antialiased text-gray-800 h-full">
      <MessageSidebar />
        <div class="flex flex-col h-full w-full bg-white px-4 py-6">
          <div class="flex flex-row items-center py-4 px-6 rounded-2xl shadow">
            <div class="flex items-center justify-center h-10 w-10 rounded-full bg-pink-500 text-pink-100">
              T
            </div>
            <div class="flex flex-col ml-3">
              <div class="font-semibold text-sm">UI Art Design</div>
              <div class="text-xs text-gray-500">Active</div>
            </div>
         
          </div>
          <div class="h-full overflow-hidden py-4">
            <div class="h-full overflow-y-auto">
              <div class="grid grid-cols-12 gap-y-2">
               
                <div class="col-start-1 col-end-13 sm:col-end-8 lg:col-end-12 xl:col-end-8 p-3 rounded-lg">
                  <div class="flex flex-row items-center">
                    <div
                        class="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0"
                    >
                      A
                    </div>
                    <div
                        class="relative ml-3 text-sm bg-white py-2 px-4 shadow rounded-xl"
                    >
                      <div>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Vel ipsa commodi illum saepe numquam maxime
                        asperiores voluptate sit, minima perspiciatis.
                      </div>
                    </div>
                  </div>
                </div>
           
                <div class="col-start-2 sm:col-start-6 lg:col-start-2 xl:col-start-6 col-end-13 p-3 rounded-lg">
                  <div class="flex items-center justify-start flex-row-reverse">
                    <div
                        class="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0"
                    >
                      A
                    </div>
                    <div
                        class="relative mr-3 text-sm bg-indigo-100 py-2 px-4 shadow rounded-xl"
                    >
                      <div>
                        Lorem ipsum dolor sit, amet consectetur adipisicing. ?
                      </div>
                      <div
                          class="absolute text-xs bottom-0 right-0 -mb-5 mr-2 text-gray-500"
                      >
                        Seen
                      </div>
                    </div>
                  </div>
                </div>
                
                
              </div>
            </div>
          </div>
          <div class="flex flex-row items-center">
            <div class="flex flex-row items-center w-full border rounded-3xl h-12 px-2">
              <button class="flex items-center justify-center h-10 w-10 text-gray-400 ml-1">
                <svg class="w-5 h-5"
                     fill="none"
                     stroke="currentColor"
                     viewBox="0 0 24 24"
                     xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"></path>
                </svg>
              </button>
              <div class="w-full">
                <input type="text"
                       class="border border-transparent w-full focus:outline-none text-sm h-10 flex items-center" placeholder="Type your message...."/>
              </div>
              <div class="flex flex-row">
                <button class="flex items-center justify-center h-10 w-8 text-gray-400">
                  <svg class="w-5 h-5"
                       fill="none"
                       stroke="currentColor"
                       viewBox="0 0 24 24"
                       xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"></path>
                  </svg>
                </button>
                <button class="flex items-center justify-center h-10 w-8 text-gray-400 ml-1 mr-2">
                  <svg class="w-5 h-5"
                       fill="none"
                       stroke="currentColor"
                       viewBox="0 0 24 24"
                       xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                  </svg>
                </button>
              </div>
            </div>
            <div class="ml-6">
              <button class="flex items-center justify-center h-10 w-10 rounded-full bg-gray-200 hover:bg-gray-300 text-indigo-800 text-white">
                <svg class="w-5 h-5 transform rotate-90 -mr-px"
                     fill="none"
                     stroke="currentColor"
                     viewBox="0 0 24 24"
                     xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div></Layout>
  )
}
