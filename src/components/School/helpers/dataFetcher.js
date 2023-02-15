import {  addAllStaff } from '../../../store/staffSlice';
import {addAllClassroom} from "../../../store/classroomSlice"
import {API_URL} from "../../../helpers/URL";
import axios from "axios";

export async function getAllSchoolData( dispatch){
    const token = localStorage.getItem("token");
    
    const resStaff  = await axios.get(API_URL + 'list/staff/',{
      headers: {
        "Authorization": `Bearer ${token}` 
       }
      })
      const resClassroom  = await axios.get(API_URL + 'list/classroom/',{
        headers: {
          "Authorization": `Bearer ${token}` 
         }
        })
      dispatch(addAllStaff(resStaff.data))
      dispatch(addAllClassroom(resClassroom.data))
  }