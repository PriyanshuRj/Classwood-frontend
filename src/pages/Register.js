import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { loginUser, setWarningToast, setSuccessToast } from "../store/genralUser";
import { Rings } from "react-loader-spinner";
import { API_URL } from "../helpers/URL";
import EmailTab from "../components/Register/EmailTab";
import AddressDetailTab from "../components/Register/AddressDetailTab";
import OtherDetailTab from "../components/Register/OtherDetailTab";
export default function Register() {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [schoolName, setSchoolName] = useState("");
  const [schoolAdress, setSchoolAddress] = useState("");
  const [schoolCity, setSchoolCity] = useState("");
  const [schoolState, setSchoolState] = useState("");
  const [schoolZipcode, setSchoolZipcode] = useState("");
  const [schoolLogo, setSchoolLogo] = useState(null);
  const [schoolWebsite, setSchoolWebsite] = useState("");
  const [schoolPhoneNo, setSchoolPhoneNo] = useState("");
  const [dateOfStablishment, setDateOfStablishment] = useState("");
  const [pageState, setPageState] = useState(0);
  const [affilationNo, setAffilationNo] = useState("");
  const [affilationBoard, setAffilationBoard] = useState("");
  const register = async () => {
    localStorage.setItem("UserType", "School");

    try {
      
      setLoading(true);

        const formData = new FormData();
      formData.append("user.email", email)
      formData.append("user.password", password)
      formData.append("school_name", schoolName);
      formData.append("school_phone", schoolPhoneNo.toString());
      formData.append("school_address", schoolAdress);
      formData.append("school_city", schoolCity);
      formData.append("school_state", schoolState);
      formData.append("school_zipcode", schoolZipcode.toString());
      formData.append("school_logo", schoolLogo);
      formData.append("school_website", schoolWebsite);
      formData.append("date_of_establishment", dateOfStablishment);
      formData.append("affilation_no", affilationNo);
      formData.append("affilation_board", affilationBoard);
      const res = await axios.post(API_URL + "signup/", 
      // {
        //   user: {
          //     email: email,
          //     password: password,
          //   },
          //   school_name: schoolName,
          //   school_phone: schoolPhoneNo.toString(),
          //   school_address: schoolAdress,
          //   school_city: schoolCity,
          //   school_state: schoolState,
          //   school_zipcode: schoolZipcode.toString(),
          //   school_logo: schoolLogo,
          //   school_website: schoolWebsite,
          //   date_of_establishment: dateOfStablishment,
          // }
          formData
          );
          console.log(res);
          if(res.status===200){
            if(res.data.user && res.data.user.email){
              dispatch(setWarningToast("Account with this email already exists."))
            }
          }
          if (res.status === 201) {
            const LoginRes = await axios.post(API_URL + "login/", {
              email: email,
              password: password,
            });
            console.log("Res : ",LoginRes)
            if (LoginRes.status === 200) {
              localStorage.setItem("UserType", LoginRes.data.user_type);
              localStorage.setItem("token", LoginRes.data.tokens.access);
              localStorage.setItem("Payed", true);
              dispatch(loginUser(res.data.user_type))
              
              navigate(`/${LoginRes.data.user_type.toLowerCase()}/dashboard`);
            }
            console.log("response returned", LoginRes);
            setPageState(0);
        }
      
    } catch (e) {
      console.warn("Error :::::::", e);
    }
    finally {
      setLoading(false);
    }
  };

  return (
    <>
    {loading ?  
    <div className="flex items-center justify-center w-screen h-screen">

    <Rings
            height="220"
            width="220"
            // radius="9"
            color="rgb(30 64 175)"
            
            ariaLabel="loading"
          /> </div> :
    <div className="bg-white">
      <div className="flex min-h-screen">
        <div className="flex flex-row w-full">
          <div className="flex-col justify-between hidden bg-[#4F46E5] lg:flex lg:p-8 xl:p-12 lg:max-w-sm xl:max-w-lg">
            <div className="flex items-center justify-start space-x-3">
              <span className="w-8 h-8 bg-white rounded-full "></span>
              <Link to="/" className="text-xl font-medium text-white">
                Classwood
              </Link>
            </div>
            <div className="space-y-5">
              <h1 className="font-extrabold text-white lg:text-3xl xl:text-5xl xl:leading-snug">
                Enter your account and discover new experiences
              </h1>
              <p className="text-lg text-white">Already have a account ?</p>
              <Link
                to="/login"
                className="flex-none inline-block px-4 py-3 font-medium text-white bg-black border-2 border-black rounded-lg"
              >
                Login to existing account
              </Link>
            </div>
            <p className="font-medium text-white">© 2022 Company</p>
          </div>

          <div className="relative flex flex-col items-center justify-center flex-1 px-10">
            <div className="flex items-center justify-between w-full py-4 lg:hidden">
              <div className="flex items-center justify-start space-x-3">
                <span className="w-6 h-6 bg-black rounded-full"></span>
                <Link to="/" className="text-lg font-medium">
                  Classwood
                </Link>
              </div>
              <div className="flex items-center space-x-2">
                <span>Already Have a Account </span>
                <Link
                  to="/login"
                  className="underline font-medium text-[#070eff]"
                >
                  Login Now
                </Link>
              </div>
            </div>

            {pageState === 2 ? (
              <OtherDetailTab
                schoolLogo={schoolLogo}
                setSchoolLogo={setSchoolLogo}
                schoolWebsite={schoolWebsite}
                setSchoolWebsite={setSchoolWebsite}
                dateOfStablishment={dateOfStablishment}
                setDateOfStablishment={setDateOfStablishment}
                schoolPhoneNo={schoolPhoneNo}
                setSchoolPhoneNo={setSchoolPhoneNo}
                affilationNo={affilationNo} 
                affilationBoard={affilationBoard}
                setAffilationBoard={setAffilationBoard}
                setAffilationNo={setAffilationNo}
                register={register}
              />
            ) : pageState === 1 ? (
              <AddressDetailTab
                setSchoolAddress={setSchoolAddress}
                setSchoolCity={setSchoolCity}
                schoolAdress={schoolAdress}
                schoolCity={schoolCity}
                schoolState={schoolState}
                setSchoolState={setSchoolState}
                schoolZipcode={schoolZipcode}
                setSchoolZipcode={setSchoolZipcode}
                schoolName={schoolName}
                setSchoolName={setSchoolName}
                setPageState={setPageState}
              />
            ) : (
              <EmailTab
                email={email}
                setEmail={setEmail}
                password={password}
                setPassword={setPassword}
                setPageState={setPageState}
              />
            )}
          </div>
        </div>
      </div>
    </div>
    }
    </>
  );
}
