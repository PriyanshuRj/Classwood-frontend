import React from "react";
import {setWarningToast} from "../../store/genralUser";
import { useDispatch } from "react-redux";
export default function OtherDetailTab({
  schoolLogo,
  setSchoolLogo,
  schoolWebsite,
  setSchoolWebsite,
  dateOfStablishment,
  setDateOfStablishment,
  schoolPhoneNo,
  setSchoolPhoneNo,
  affilationNo,
  affilationBoard,
  setAffilationBoard,
  setAffilationNo,
  register,
}) {
  const dispatch = useDispatch();
  function onRegister(){
    const re = new RegExp('/', 'g');
    const re2 = new RegExp('-','g');
    const Phoneno = schoolPhoneNo.toString(10);
    console.log("website ", schoolWebsite.substring(0,12));
    // matching the pattern
    if(dateOfStablishment.length===0
      // || schoolLogo===null || schoolWebsite.length===0 
      ){
      dispatch(setWarningToast("Fill Details completely !"));
    }
    else if(Phoneno.length < 10 ) dispatch(setWarningToast("Enter complete phone number"));
    else if(schoolWebsite && schoolWebsite.substring(0,12) !== "https://www."){
dispatch(setWarningToast("Website not in proper format"))
console.log("the web", schoolWebsite.substring(0,12))
    }
    else if((dateOfStablishment.match(re) && dateOfStablishment.match(re).length <2) || (dateOfStablishment.match(re2) && dateOfStablishment.match(re2).length < 2)) dispatch(setWarningToast('Please fill date properly'))
    else {
      register();
    }
  }
  return (
    <div className="flex flex-col justify-center flex-1 max-w-2xl space-y-5">
      <div className="flex flex-col space-y-2 text-start">
        <h2 className="text-3xl font-bold md:text-6xl">
          School Contact Details 
        </h2>
        <p className="text-md md:text-2xl">Fill up the contact details form of your school</p>
      </div>
      <div className="flex flex-col max-w-2xl">
      <div className="flex flex-col max-w-2xl mt-4">
          <label className="font-semibold mt-2">School Phone Number*</label>
        <input
          type="number"
          value={schoolPhoneNo}
    onChange={(e)=>setSchoolPhoneNo(e.target.value)}

          placeholder="School Phone No."
          className="flex px-3 py-2 font-medium border-2 border-slate-200 rounded-lg md:px-4 md:py-3 placeholder:font-normal"
        />
</div>
<div className="flex flex-col max-w-2xl mt-4">
          <label className="font-semibold mt-2">School Website*</label>
        <input
          type="text"
          value={schoolWebsite}
    onChange={(e)=>setSchoolWebsite(e.target.value)}
          placeholder="School Website"
          className="flex px-3 py-2 font-medium border-2 border-slate-200 rounded-lg md:px-4 md:py-3 placeholder:font-normal"
        />
        </div>
        <div className="flex flex-col max-w-2xl mt-4">
          <label className="font-semibold mt-2">Date of Stablishment*</label>
       
        <input
          type="date"
          value={dateOfStablishment}
    onChange={(e)=>setDateOfStablishment(e.target.value)}
          placeholder="Date of Establishment"
          className="flex px-3 py-2 font-medium border-2 border-slate-200 rounded-lg md:px-4 md:py-3 placeholder:font-normal"
        />
        </div>
        <div className="flex flex-col max-w-2xl mt-4">
          <label className="font-semibold mt-2">School Logo</label>
        <div className="flex items-center justify-center w-full">
          <label
            htmlFor="dropzone-file"
            className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 d hover:bg-gray-100 "
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
              <p className="mb-2 text-sm text-gray-500 ">
                <span className="text-xl font-semibold"> {schoolLogo ?  schoolLogo.name : "School Logo"} </span>
              </p>

              <p className="mb-2 text-sm text-gray-500 ">
                <span className="font-semibold">{schoolLogo ? "Click to change" : "Click to upload"}</span>
              </p>
              <p className="text-xs text-gray-500 ">
                SVG, PNG, JPG or GIF (MAX. 800x400px)
              </p>
            </div>
            <input id="dropzone-file" type="file" className="hidden" 
            onChange={(e)=> {
              if(e.target.files[0].type.substring(0,5)==="image")  setSchoolLogo(e.target.files[0]);
              else dispatch(setWarningToast("Please select an Image"))
              
            }
              
              } />
          </label>
        </div>
        </div>
        <button
          onClick={() => onRegister()}
          className="flex my-8  items-center justify-center flex-none px-3 py-2 font-medium text-white bg-[#4F46E5] border-2 border-[#4F46E5]  rounded-lg md:px-4 md:py-3"
        >
          Register
        </button>
      </div>
    </div>
  );
}
