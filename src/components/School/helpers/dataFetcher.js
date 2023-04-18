import { addAllStaff } from "../../../store/School/staffSlice";
import { addAllClassroom } from "../../../store/School/classroomSlice";
import { addAllStudent } from "../../../store/School/studentSlice";
import { API_URL } from "../../../helpers/URL";
import { addAllSyllabus } from "../../../store/School/syllabusSlice";
import { setNotice } from "../../../store/genralUser";
import axios from "axios";

export async function getAllSchoolData(dispatch, navigate, setLoading, session) {
  // const session = useSelector((state) => state.user.session);
console.log("session", session);
  setLoading(true);
  const token = localStorage.getItem("token");
  try {
   
    const resStaff = await axios.get(API_URL + "list/staff/", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: {
          session: session.id,
      },
    });

    const resClassroom = await axios.get(API_URL + "list/classroom/", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: {
        session: session.id,
    },
    });
    const resStudent = await axios.get(API_URL + "staff/student/", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: {
        session: session.id,
    },
    });
    const syllabusRes = await axios.get(API_URL + "staff/syllabus/",{
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: {
        session: session.id,
    },
    })

    const resNotice = await axios.get(API_URL + "list/notice/", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: {
        session: session.id,
    },
    });
    console.log(resNotice.data)
    dispatch(setNotice(resNotice.data));
    dispatch(addAllSyllabus(syllabusRes.data))
    dispatch(addAllStaff(resStaff.data));
    dispatch(addAllClassroom(resClassroom.data));
    dispatch(addAllStudent(resStudent.data));
    
  } catch (e) {
    console.log("error : ", e);
    if (e.response && e.response.status === 401) {
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
      params : {
        session : localStorage.getItem("session")
      }
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