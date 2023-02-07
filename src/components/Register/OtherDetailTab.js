import React from "react";

export default function OtherDetailTab({
  schoolLogo,
  setSchoolLogo,
  schoolWebsite,
  setSchoolWebsite,
  dateOfStablishment,
  setDateOfStablishment,
  schoolPhoneNo,
  setSchoolPhoneNo,
  register,
}) {
  function onRegister(){
    const re = new RegExp('/', 'g');
    const re2 = new RegExp('-','g');
    const Phoneno = schoolPhoneNo.toString(10);

    // matching the pattern
    if(dateOfStablishment.length===0 || schoolPhoneNo===null
      // || schoolLogo===null || schoolWebsite.length===0 
      ){
      alert("Fill Details completely !");
    }
    else if(Phoneno.length < 10 ) alert("Enter complete phone number");
    else if((dateOfStablishment.match(re) && dateOfStablishment.match(re).length <2) || (dateOfStablishment.match(re2) && dateOfStablishment.match(re2).length < 2)) alert('Please fill date properly')
    else {
      register();
    }
  }
  return (
    <div className="flex flex-col justify-center flex-1 max-w-md space-y-5">
      <div className="flex flex-col space-y-2 text-center">
        <h2 className="text-3xl font-bold md:text-4xl">
          Sign up to an account
        </h2>
        <p className="text-md md:text-xl">Sign up to Digitalize your school</p>
      </div>
      <div className="flex flex-col max-w-md space-y-5">
        <input
          type="number"
          value={schoolPhoneNo}
    onChange={(e)=>setSchoolPhoneNo(e.target.value)}

          placeholder="School Phone No."
          className="flex px-3 py-2 font-medium border-2 border-black rounded-lg md:px-4 md:py-3 placeholder:font-normal"
        />

        <input
          type="text"
          value={schoolWebsite}
    onChange={(e)=>setSchoolWebsite(e.target.value)}
          placeholder="School Website"
          className="flex px-3 py-2 font-medium border-2 border-black rounded-lg md:px-4 md:py-3 placeholder:font-normal"
        />
        <input
          type="date"
          value={dateOfStablishment}
    onChange={(e)=>setDateOfStablishment(e.target.value)}
          placeholder="Date of Establishment"
          className="flex px-3 py-2 font-medium border-2 border-black rounded-lg md:px-4 md:py-3 placeholder:font-normal"
        />
        <div className="flex items-center justify-center w-full">
          <label
            htmlFor="dropzone-file"
            className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
          >
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <svg
                aria-hidden="true"
                className="w-10 h-10 mb-3 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                ></path>
              </svg>
              <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                <span className="text-xl font-semibold"> School Logo </span>
              </p>

              <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                <span className="font-semibold">Click to upload</span>
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                SVG, PNG, JPG or GIF (MAX. 800x400px)
              </p>
            </div>
            <input id="dropzone-file" type="file" className="hidden" onChange={(e)=> setSchoolLogo(e.target.files[0])} />
          </label>
        </div>
        <button
          onClick={() => onRegister()}
          className="flex items-center justify-center flex-none px-3 py-2 font-medium text-white bg-black border-2 border-black rounded-lg md:px-4 md:py-3"
        >
          Register
        </button>
      </div>
    </div>
  );
}
