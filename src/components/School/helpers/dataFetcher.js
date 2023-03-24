import { addAllStaff } from "../../../store/School/staffSlice";
import { addAllClassroom } from "../../../store/School/classroomSlice";
import { API_URL } from "../../../helpers/URL";
import axios from "axios";

export async function getAllSchoolData(dispatch, navigate, setLoading) {
  setLoading(true);
  console.log("called")
  const token = localStorage.getItem("token");
  try {
    const resStaff = await axios.get(API_URL + "list/staff/", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const resClassroom = await axios.get(API_URL + "list/classroom/", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    dispatch(addAllStaff(resStaff.data));
    dispatch(addAllClassroom(resClassroom.data));
    
  } catch (e) {
    console.log("error : ", e);
    if (e.respons && e.response.status === 401) {
      console.log("this is unotherized");
      localStorage.removeItem("UserType");
      navigate(`/`);
    }
  }
  setLoading(false);

}
export async function getLatestClassroom(dispatch, navigate,setLoading){
  setLoading(true);
  const token = localStorage.getItem("token");
  try {
    const resClassroom = await axios.get(API_URL + "list/classroom/", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    dispatch(addAllClassroom(resClassroom.data));

  } catch (e){
    if (e.respons && e.response.status === 401) {
      console.log("this is unotherized");
      localStorage.removeItem("UserType");
      navigate(`/`);
    }
  }
  setLoading(false);

}