import React from 'react'
import Layout from "./Layout";

export default function StartPay() {
  return (
      <Layout>

    <div className='flex flex-col m-4 md:flex-row'>

    <div className='m-8 md:w-2/3'>
<label className='font-semibold text-md '>No. of Students in the School</label>
<input type="number" placeholder="No of Student" className='w-full px-2 py-1 m-4 mb-8 rounded-md' />

<label className='mt-8 font-semibold text-md'>No. of Staff in the School</label>
<input type="number" placeholder="No of Staff" className='w-full px-2 py-1 m-4 mb-8 rounded-md' />
      
      <div className='flex items-center justify-start'>
        <span className='font-semibold text-md'>

        Total Cost for you Regesteration{" "}
        </span>{" "}
        <span className='ml-4 text-lg font-bold'>
          $300
        </span>
      </div>
    </div>
<div className='flex flex-col m-4 mr-8 md:w-1/3'>
  <span className='text-lg font-semibold '>Card Details</span>
<input type="text" placeholder="Card Holder Name" className='w-full px-2 py-1 m-4 rounded-md' />
<input type="number" placeholder="Card Number" className='w-full px-2 py-1 m-4 rounded-md' />
<label className='font-semibold text-md '>Expiery Date</label>
<input type="date" placeholder="Card Number" className='w-full px-2 py-1 m-4 rounded-md' />
<button className='w-full py-2 m-4 mt-8 font-semibold text-white bg-indigo-500 text-md rounded-xl'>Pay Now</button>
</div>
    </div>
      </Layout>
  )
}
