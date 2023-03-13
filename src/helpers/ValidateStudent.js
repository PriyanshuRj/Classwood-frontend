import { setWarningToast } from "../store/genralUser";
export function validateStudent(firstName,lastName, dateOfAdmission, acountNo, profileImage, mobileNO, email, dispatch){
    if (
        firstName.length === 0 ||
        lastName.length === 0 ||
        dateOfAdmission.length === 0 ||
        acountNo.length === 0 ||
        !profileImage
      ) {
        dispatch(setWarningToast("Fill complete Details"));
   
      } 
      else if(mobileNO < 1000000000) dispatch(setWarningToast("Mobile no should be atleast 10 digits"))
      else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
        dispatch(setWarningToast("Invalid email address"));
      } 
      else {
          return true;
      }
      return false;
}