import React from 'react'

export default function EmailTab({email, password, setEmail, setPassword, setPageState}) {
    function goToNextPage(){
        if(email.length===0 || password.length<8){
            alert("Please fill details completely !");
        }
        else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)){
            alert('Invalid email address')
        }
        else setPageState(1);
    }
  return (
    <div className="flex flex-col justify-center flex-1 max-w-md space-y-5">
    <div className="flex flex-col space-y-2 text-center">
      <h2 className="text-3xl font-bold md:text-4xl">
        Sign up to an account
      </h2>
      <p className="text-md md:text-xl">
        Sign up to Digitalize your school
      </p>
    </div>
    <div className="flex flex-col max-w-md space-y-5">
      <input
        type="text"
        placeholder="Email"
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
        className="flex px-3 py-2 font-medium border-2 border-black rounded-lg md:px-4 md:py-3 placeholder:font-normal"
      />
      <input
        type="password"
        placeholder="********"
        value={password}
        className="flex px-3 py-2 font-medium border-2 border-black rounded-lg md:px-4 md:py-3 placeholder:font-normal"
        onChange={(e)=>setPassword(e.target.value)}
      />
      <button 
      onClick={()=> goToNextPage()}
      className="flex items-center justify-center flex-none px-3 py-2 font-medium text-white bg-black border-2 border-black rounded-lg md:px-4 md:py-3">
        Next
      </button>
    </div>
  </div>
  )
}
