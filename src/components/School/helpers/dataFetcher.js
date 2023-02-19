import {  addAllStaff } from '../../../store/staffSlice';
import {addAllClassroom} from "../../../store/classroomSlice"
import {API_URL} from "../../../helpers/URL";
import axios from "axios";

export async function getAllSchoolData( dispatch, navigate){
    const token = localStorage.getItem("token");
    try{

      const resStaff  = await axios.get(API_URL + 'list/staff/',{
        headers: {
          "Authorization": `Bearer ${token}` 
        }
      })
      console.log("staff", resStaff)
      
      const resClassroom  = await axios.get(API_URL + 'list/classroom/',{
        headers: {
          "Authorization": `Bearer ${token}` 
         }
        })
        dispatch(addAllStaff(resStaff.data))
        dispatch(addAllClassroom(resClassroom.data))
      }
      catch(e){
        console.log("error : ", e)
        if(e.respons && e.response.status === 401){
          console.log("this is unotherized");
          localStorage.removeItem("UserType");
          navigate(`/`);
          
        }
      }
      }