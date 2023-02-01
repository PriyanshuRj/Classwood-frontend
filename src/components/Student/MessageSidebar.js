import React from 'react'

export default function MessageSidebar() {
  return (
    <div class="hidden lg:flex flex-row w-96 flex-shrink-0 bg-gray-100 p-4">
      
    <div class="flex flex-col w-full h-full pl-4 pr-4 py-4 -mr-4">
      <div class="flex flex-row items-center">
        <div class="flex flex-row items-center">
          <div class="text-xl font-semibold">Messages</div>
          <div class="flex items-center justify-center ml-2 text-xs h-5 w-5 text-white bg-red-500 rounded-full font-medium">5</div>
        </div>
        <div class="ml-auto">
          <button class="flex items-center justify-center h-7 w-7 bg-gray-200 text-gray-500 rounded-full">
            <svg class="w-4 h-4 stroke-current"
                 fill="none"
                 stroke="currentColor"
                 viewBox="0 0 24 24"
                 xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
          </button>
        </div>
      </div>
     
      
      <div class="mt-2">
        <div class="flex flex-col -mx-4">
          <div class="relative flex flex-row items-center p-4">
            <div class="absolute text-xs text-gray-500 right-0 top-0 mr-4 mt-3">5 min</div>
            <div class="flex items-center justify-center h-10 w-10 rounded-full bg-pink-500 text-pink-300 font-bold flex-shrink-0">
              T
            </div>
            <div class="flex flex-col flex-grow ml-3">
              <div class="text-sm font-medium">Cuberto</div>
              <div class="text-xs truncate w-40">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis, doloribus?</div>
            </div>
            <div class="flex-shrink-0 ml-2 self-end mb-1">
              <span class="flex items-center justify-center h-5 w-5 bg-red-500 text-white text-xs rounded-full">5</span>
            </div>
          </div>
          <div class="flex flex-row items-center p-4 bg-gradient-to-r from-red-100 to-transparent border-l-2 border-red-500">
            <div class="flex items-center justify-center h-10 w-10 rounded-full bg-pink-500 text-pink-300 font-bold flex-shrink-0">
              T
            </div>
            <div class="flex flex-col flex-grow ml-3">
              <div class="flex items-center">
                <div class="text-sm font-medium">UI Art Design</div>
                <div class="h-2 w-2 rounded-full bg-green-500 ml-2"></div>
              </div>
              <div class="text-xs truncate w-40">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis, doloribus?</div>
            </div>
          </div>
        </div>
      </div>
     
    
    </div>
  </div>
  )
}
