import React from "react";
import { Link } from "react-router-dom";
import { setWarningToast } from "../../store/genralUser";
import { useDispatch } from "react-redux";
export default function EmailTab({
  email,
  password,
  setEmail,
  setPassword,
  setPageState,
  confirmpassword,
  setConfirmPassword,
  schoolName,
  setSchoolName
}) {
  const dispatch = useDispatch();
  function goToNextPage() {
    if (schoolName.length === 0 || email.length === 0 || password.length < 8) {
      dispatch(setWarningToast("Please fill details completely !"));
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
      dispatch(setWarningToast("Invalid email address"));
    } 
    else if(password!== confirmpassword) dispatch(setWarningToast("Password and confirm Password didn't matched"))
    else setPageState(1);
  }
  return (
    <div className="flex flex-col justify-center flex-1 max-w-md space-y-5">
      <div className="flex flex-col space-y-2 text-start">
        <h2 className="text-3xl font-bold md:text-4xl">
          Create an account
        </h2>
        <p className="text-md ">We would love to welcome you to a network where school, teachers students are all connect with each other.</p>
      </div>
      <div className="flex flex-col max-w-md space-y-5">
      <div className="flex flex-col max-w-md mt-4">
          <label className="font-semibold mt-2">School Name*</label>
          <input
            type="text"
            placeholder="School Name"
            value={schoolName}
            onChange={(e) => setSchoolName(e.target.value)}
            className="flex px-3 py-2 font-medium border-2 border-slate-200  rounded-lg md:px-4 md:py-3 placeholder:font-normal"
          />
        </div>
        <div className="flex flex-col max-w-md mt-4">
          <label className="font-semibold mt-2">Email*</label>
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex px-3 py-2 font-medium border-2 border-slate-200  rounded-lg md:px-4 md:py-3 placeholder:font-normal"
          />
        </div>
        <div className="flex flex-col max-w-md mt-4">
          <label className="font-semibold mt-2">Password*</label>
          <input
            type="password"
            placeholder="********"
            value={password}
            className="flex px-3 py-2 font-medium border-2 border-slate-200  rounded-lg md:px-4 md:py-3 placeholder:font-normal"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="flex flex-col max-w-md mt-4">
          <label className="font-semibold mt-2">Confirm Password*</label>
          <input
            type="password"
            placeholder="********"
            value={confirmpassword}
            className="flex px-3 py-2 font-medium border-2 border-slate-200  rounded-lg md:px-4 md:py-3 placeholder:font-normal"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <button
          onClick={() => goToNextPage()}
          className="flex items-center justify-center flex-none px-3 py-2 font-medium text-white  bg-[#4F46E5] border-2 border-[#4F46E5] rounded-lg md:px-4 md:py-3"
        >
          Next
        </button>
        <div className="flex flex-row justify-center mt-8 items-end space-x-2 sm:items-center sm:flex-row">
          <span>Already have a Account</span>
          <Link to="/login" className="underline font-medium text-[#070eff]">
            Sign in now
          </Link>
        </div>
      </div>
    </div>
  );
}
