import React from "react";
import {setWarningToast} from "../../store/genralUser";
import { useDispatch } from "react-redux";
export default function AddressDetailTab({
  setPageState,
  setSchoolAddress,
  setSchoolCity,
  schoolAdress,
  schoolCity,
  schoolState,
  setSchoolState,
  schoolZipcode,
  setSchoolZipcode,
  schoolName,
  setSchoolName,
}) {
 
  const dispatch = useDispatch();
  function onNextClick(){
    const ZipCode = schoolZipcode.toString(10);
    if(schoolName.length===0 || schoolAdress.length===0 || schoolCity.length===0 || schoolState.length===0 || schoolZipcode===null){
      dispatch(setWarningToast("Fill Details completely !"));
    }
    else if(ZipCode.length < 6 ) dispatch(setWarningToast("Enter complete zipcode"))
    else setPageState(2);


  }
  return (
    <div className="flex flex-col justify-center flex-1 max-w-md space-y-5">
      <div className="flex flex-col space-y-2 text-center">
        <h2 className="text-3xl font-bold md:text-4xl">
          School Address Details
        </h2>
        <p className="text-md md:text-xl">Sign up to Digitalize your school</p>
      </div>
      <div className="flex flex-col max-w-md space-y-5">
        <input
          value={schoolName}
          onChange={(e) => setSchoolName(e.target.value)}
          type="text"
          placeholder="School Name"
          className="flex px-3 py-2 font-medium border-2 border-black rounded-lg md:px-4 md:py-3 placeholder:font-normal"
        />

        <textarea
          value={schoolAdress}
          onChange={(e) => setSchoolAddress(e.target.value)}
          type="text"
          placeholder="School Address"
          className="flex px-3 py-2 font-medium border-2 border-black rounded-lg md:px-4 md:py-3 placeholder:font-normal"
        />
        <input
          value={schoolCity}
          onChange={(e) => setSchoolCity(e.target.value)}
          type="text"
          placeholder="School City"
          className="flex px-3 py-2 font-medium border-2 border-black rounded-lg md:px-4 md:py-3 placeholder:font-normal"
        />
        <input
          value={schoolState}
          onChange={(e) => setSchoolState(e.target.value)}
          type="text"
          placeholder="School State"
          className="flex px-3 py-2 font-medium border-2 border-black rounded-lg md:px-4 md:py-3 placeholder:font-normal"
        />
        <input
          value={schoolZipcode}
          onChange={(e) => setSchoolZipcode(e.target.value)}
          type="number"
          placeholder="School Zipcode"
          className="flex px-3 py-2 font-medium border-2 border-black rounded-lg md:px-4 md:py-3 placeholder:font-normal"
        />
        <button
          onClick={() => onNextClick()}
          className="flex items-center justify-center flex-none px-3 py-2 font-medium text-white bg-black border-2 border-black rounded-lg md:px-4 md:py-3"
        >
          Next
        </button>
      </div>
    </div>
  );
}
