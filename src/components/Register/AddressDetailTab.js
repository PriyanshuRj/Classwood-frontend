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
  affilationNo,
  affilationBoard,
  setAffilationBoard,
  setAffilationNo,
}) {
 
  const dispatch = useDispatch();
  function onNextClick(){
    const ZipCode = schoolZipcode.toString(10);
    if(affilationBoard.length===0 || affilationNo.length===0 || schoolAdress.length===0 || schoolCity.length===0 || schoolState.length===0 || schoolZipcode===null){
      dispatch(setWarningToast("Fill Details completely !"));
    }
    else if(ZipCode.length < 6 ) dispatch(setWarningToast("Enter complete zipcode"))
    else setPageState(2);


  }
  return (
    <div className="flex flex-col justify-center flex-1 max-w-md space-y-5">
      <div className="flex flex-col space-y-2 text-start">
        <h2 className="text-3xl font-bold md:text-4xl">
          School Address Details
        </h2>
        <p className="text-md md:text-xl">Sign up to Digitalize your school</p>
      </div>
      <div className="flex flex-col max-w-md">
      <div className="flex flex-col max-w-md mt-4">
          <label className="font-semibold mt-2">Affilation Board*</label>
        <input
          value={affilationBoard}
          onChange={(e) => setAffilationBoard(e.target.value)}
          type="text"
          placeholder="School Name"
          className="flex px-3 py-2 font-medium border-2 border-slate-200 rounded-lg md:px-4 md:py-3 placeholder:font-normal"
        />
        </div>
        <div className="flex flex-col max-w-md mt-4">
          <label className="font-semibold mt-2">Affilation Number*</label>
        <input
          value={affilationNo}
          onChange={(e) => setAffilationNo(e.target.value)}
          type="text"
          placeholder="School Name"
          className="flex px-3 py-2 font-medium border-2 border-slate-200 rounded-lg md:px-4 md:py-3 placeholder:font-normal"
        />
        </div>
        <div className="flex flex-col max-w-md mt-4">
          <label className="font-semibold mt-2">School Address*</label>
        <textarea
          value={schoolAdress}
          onChange={(e) => setSchoolAddress(e.target.value)}
          type="text"
          placeholder="School Address"
          className="flex px-3 py-2 font-medium border-2 border-slate-200 rounded-lg md:px-4 md:py-3 placeholder:font-normal"
        />
        </div>
        <div className="flex flex-col max-w-md mt-4">
          <label className="font-semibold mt-2">School City*</label>
        <input
          value={schoolCity}
          onChange={(e) => setSchoolCity(e.target.value)}
          type="text"
          placeholder="School City"
          className="flex px-3 py-2 font-medium border-2 border-slate-200 rounded-lg md:px-4 md:py-3 placeholder:font-normal"
        />
        </div>
        <div className="flex flex-col max-w-md mt-4">
          <label className="font-semibold mt-2">School State*</label>
        <input
          value={schoolState}
          onChange={(e) => setSchoolState(e.target.value)}
          type="text"
          placeholder="School State"
          className="flex px-3 py-2 font-medium border-2 border-slate-200 rounded-lg md:px-4 md:py-3 placeholder:font-normal"
        />
        </div>
        <div className="flex flex-col max-w-md mt-4">
          <label className="font-semibold mt-2">School Zipcode*</label>
        <input
          value={schoolZipcode}
          onChange={(e) => setSchoolZipcode(e.target.value)}
          type="number"
          placeholder="School Zipcode"
          className="flex px-3 py-2 font-medium border-2 border-slate-200 rounded-lg md:px-4 md:py-3 placeholder:font-normal"
        />
        </div>
        <button
          onClick={() => onNextClick()}
          className="my-8 flex items-center justify-center flex-none px-3 py-2 font-medium text-white  bg-[#4F46E5] border-2 border-[#4F46E5] rounded-lg md:px-4 md:py-3"
        >
          Next
        </button>
      </div>
    </div>
  );
}
