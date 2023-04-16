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
import loginBg from "../assets/CLASSWOOD Login Cover.png";
import { boardList, stateList } from "../helpers/inputLists";

export default function Register() {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [schoolName, setSchoolName] = useState("");
  const [schoolAdress, setSchoolAddress] = useState("");
  const [schoolCity, setSchoolCity] = useState("");
  const [schoolState, setSchoolState] = useState(stateList[8]);
  const [schoolZipcode, setSchoolZipcode] = useState("");
  const [schoolLogo, setSchoolLogo] = useState(null);
  const [schoolWebsite, setSchoolWebsite] = useState("");
  const [schoolPhoneNo, setSchoolPhoneNo] = useState("");
  const [dateOfStablishment, setDateOfStablishment] = useState("");
  const [pageState, setPageState] = useState(0);
  const [affilationNo, setAffilationNo] = useState("");
  const [affilationBoard, setAffilationBoard] = useState(boardList[0]);
  const [schoolHead, setSchoolHead] = useState("");
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
      formData.append("school_state", schoolState.name);
      formData.append("school_zipcode", schoolZipcode.toString());
      formData.append("school_logo", schoolLogo);
      formData.append("school_website", schoolWebsite);
      formData.append("date_of_establishment", dateOfStablishment);
      formData.append("school_affNo", affilationNo);
      formData.append("school_board", affilationBoard.name);
      formData.append("school_head", schoolHead);
      const res = await axios.post(API_URL + "signup/", 
          formData
          );
          // console.log(res);
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
            // console.log("Res : ",LoginRes)
            if (LoginRes.status === 200) {
              localStorage.setItem("UserType", LoginRes.data.user_type);
              const sessionRes = await axios.post(API_URL + "list/session/",{
              is_active : true
              },{
                headers: {
                  Authorization: `Bearer ${LoginRes.data.tokens.access}`,
                },
              });
              localStorage.setItem("token", LoginRes.data.tokens.access);
              localStorage.setItem("Payed", true);
              dispatch(loginUser(res.data.user_type))
              
              navigate(`/${LoginRes.data.user_type.toLowerCase()}/dashboard`);
            }
            // console.log("response returned", LoginRes);
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
          

          <div className="relative flex flex-col items-center justify-center flex-1 px-10">
            

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
                affilationNo={affilationNo} 
                affilationBoard={affilationBoard}
                setAffilationBoard={setAffilationBoard}
                setAffilationNo={setAffilationNo}
                setPageState={setPageState}
              />
            ) : (
              <EmailTab
              setSchoolName={setSchoolName}
              schoolName={schoolName}
              setSchoolHead={setSchoolHead}
              schoolHead={schoolHead}
                email={email}
                setEmail={setEmail}
                password={password}
                setPassword={setPassword}
                setPageState={setPageState}
                setConfirmPassword={setConfirmPassword}
                confirmpassword={confirmpassword}
              />
            )}
          </div>
          <div className="hidden lg:flex flex-col justify-between bg-slate-200 lg:max-w-sm xl:max-w-lg">
              
              <img src={loginBg} className="object-cover h-full w-full opacity-80" alt="Login image" />
</div>
        </div>
      </div>
    </div>
    }
    </>
  );
}
