import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Rings } from "react-loader-spinner";
import EmailPage from "../components/ForgotPassword/EmailPage";
import OTPPage from "../components/ForgotPassword/OTPPage";
import { API_URL } from "../helpers/URL";
import { useNavigate } from "react-router-dom";
import { loginUser, setWarningToast } from "../store/genralUser";
import { useDispatch } from "react-redux";
import { getAllDatatForStaffUser } from "../components/Staff/helper/getData";
import { setProfileData } from "../store/genralUser";
import loginBg from "../assets/CLASSWOOD Login Cover.png";

export default function ForgotPassword() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [pageState, setPageState] = useState(0);

  const [loading, setLoading] = useState(false);

  let navigate = useNavigate();
    const updatePassword = async () =>{
        try {
            setLoading(true);
            const res = await axios.post(API_URL + "forgotPassword/", {
              email: email,
       
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
              const acountData = await  axios.get(API_URL + "account/", 
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
    }
  const forgotPassword = async () => {
    try {
      setLoading(true);
    //   const res = await axios.post(API_URL + "forgotPassword/", {
    //     email: email,
 
    //   });
    //   console.log(res, res.data.message);
    //   if (res.data.message === "Invalid email or password") {
    //     // alert("Entered Email and password are Invalid");
    //     dispatch(setWarningToast(res.data.message));
    //   } else if (res.status === 200) {
    //     localStorage.setItem("UserType", res.data.user_type);
    //     dispatch(loginUser(res.data.user_type));
    //     if (res.data.user_type === "School")
    //       localStorage.setItem("Payed", true);
    //     if (res.data.user_type === "Staff") {
    //       getAllDatatForStaffUser(dispatch);
    //     }

    //     localStorage.setItem("token", res.data.tokens.access);
    //     console.log("Data", res.data);
    //     const acountData = await  axios.get(API_URL + "account/", 
    //       {
    //         headers : {
    //           Authorization: `Bearer ${res.data.tokens.access}`,
    //         }
    //       }
    //     )
    //     dispatch(setProfileData(acountData.data));
    //     navigate(`/${res.data.user_type.toLowerCase()}/dashboard`);
    //   }

    //   console.log(res);
    setPageState(1);
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
                {!pageState ?        <EmailPage email={email} setEmail={setEmail} forgotPassword={forgotPassword} setPageState={setPageState} /> :
                <OTPPage password={password} setPassword={setPassword} updatePassword={updatePassword} />
                }
         


              </div>
              
              <div className="flex-col justify-between hidden lg:flex bg-slate-200 lg:max-w-sm xl:max-w-lg">
                <img
                  src={loginBg}
                  className="object-cover w-full h-full opacity-80"
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
