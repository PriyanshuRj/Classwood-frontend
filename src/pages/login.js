import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Rings } from "react-loader-spinner";

import { API_URL } from "../helpers/URL";
import { useNavigate } from "react-router-dom";
import { loginUser, setWarningToast } from "../store/genralUser";
import { useDispatch } from "react-redux";
import { getAllDatatForStaffUser } from "../components/Staff/helper/getData";
import { setProfileData } from "../store/genralUser";
import loginBg from "../assets/CLASSWOOD Login Cover.png";

export default function Login() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [schoolName, setSchoolName] = useState("");
  const [loading, setLoading] = useState(false);

  let navigate = useNavigate();

  const login = async () => {
    try {
      setLoading(true);
      const res = await axios.post(API_URL + "login/", {
        email: email,
        password: password,
      });
      console.log(res, res.data.message);
      if (res.data.message === "Invalid email or password") {
        // alert("Entered Email and password are Invalid");
        dispatch(setWarningToast(res.data.message));
      } else if (res.status === 200) {
        localStorage.setItem("UserType", res.data.user_type);
        dispatch(loginUser(res.data.user_type));
        if (res.data.user_type === "School")
          localStorage.setItem("Payed", true);
        if (res.data.user_type === "Staff") {
          getAllDatatForStaffUser(dispatch);
        }

        localStorage.setItem("token", res.data.tokens.access);
        console.log("Data", res.data);
        const acountData = await  axios.get(API_URL + "/account/", 
          {
            headers : {
              Authorization: `Bearer ${res.data.tokens.access}`,
            }
          }
        )
        dispatch(setProfileData(acountData.data));
        navigate(`/${res.data.user_type.toLowerCase()}/dashboard`);
      }

      console.log(res);
    } catch (e) {
      console.warn("error ", e);
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      {loading ? (
        <div className="flex items-center justify-center w-screen h-screen">
          <Rings
            height="220"
            width="220"
            // radius="9"
            color="rgb(30 64 175)"
            ariaLabel="loading"
          />{" "}
        </div>
      ) : (
        <div className="bg-white">
          <div className="flex min-h-screen">
            <div className="flex flex-row w-full">
              <div className="relative flex flex-col items-center justify-center flex-1 px-4 sm:px-10">
                <div className="flex items-center justify-between w-full py-4 lg:hidden"></div>
                <div className="flex flex-col justify-center flex-1 max-w-md space-y-5">
                  <div className="flex flex-col space-y-2 text-start">
                    <h2 className="text-3xl font-bold md:text-4xl mb-4">
                      Welcome Back !!
                    </h2>
                    <p className="text-md">
                      We would love to welcome you to a network where school,
                      teachers students are all connect with each other.
                    </p>
                  </div>
                  <div className="flex flex-col max-w-md">
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

                    <button
                      onClick={() => login()}
                      className="my-8 flex items-center justify-center flex-none px-3 py-2 font-medium text-white bg-[#4F46E5] border-2 border-[#4F46E5] rounded-lg md:px-4 md:py-3"
                    >
                      Login
                    </button>

                    <div className="flex flex-row justify-center mt-8 items-end space-x-2 sm:items-center sm:flex-row">
                      <span>Don't have a Account</span>
                      <Link
                        to="/register"
                        className="underline font-medium text-[#070eff]"
                      >
                        Sign up now
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="hidden lg:flex flex-col justify-between bg-[#ffe85c] lg:p-8 xl:p-12 lg:max-w-sm xl:max-w-lg">
                <div className="flex items-center justify-start space-x-3">
                  <span className="w-8 h-8 bg-black rounded-full"></span>
                  <Link href="/" className="text-xl font-medium">
                    Classwood
                  </Link>
                </div>
                <div className="space-y-5">
                  <h1 className="font-extrabold lg:text-3xl xl:text-5xl xl:leading-snug">
                    Enter your account and discover new experiences
                  </h1>
                  <p className="text-lg">You do not have an account?</p>
                  <Link
                    to="/register"
                    className="flex-none inline-block px-4 py-3 font-medium text-white bg-black border-2 border-slate-200  rounded-lg"
                  >
                    Create account here
                  </Link>
                </div>
                <p className="font-medium">© 2022 Company</p>
              </div> */}
              <div className="hidden lg:flex flex-col justify-between bg-slate-200 lg:max-w-sm xl:max-w-lg">
                <img
                  src={loginBg}
                  className="object-cover h-full w-full opacity-80"
                  alt="Login image"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
