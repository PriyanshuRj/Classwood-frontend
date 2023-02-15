import {  addAllStaff } from '../../../store/staffSlice';
import {API_URL} from "../../../helpers/URL";
import axios from "axios";

export async function getAllSchoolData( dispatch){
    const token = localStorage.getItem("token");
    
    const resStaff  = await axios.get(API_URL + 'list/staff/',{
      headers: {
        "Authorization": `Bearer ${token}` 
       }
      })
      dispatch(addAllStaff(resStaff.data))
  }