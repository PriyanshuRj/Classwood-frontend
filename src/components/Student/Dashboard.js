import React, {useState} from 'react'
import SideBar from '../UI/SideBar'
export default function Dashboard() {
    const [sideBarOpen,setSideBarOpen] = useState(false);
  return (
    <div>
        <div className="flex">
    <div className="fixed z-20 p-2 bg-[#F6F8FE] rounded-full lg:hidden left-4 top-4 h-max bg-opacity-70" onClick={()=> setSideBarOpen(prev=> !prev)}>
        <svg id="toggle-button" className="w-6 h-6" height="10" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path
                d="M0 96C0 78.33 14.33 64 32 64H416C433.7 64 448 78.33 448 96C448 113.7 433.7 128 416 128H32C14.33 128 0 113.7 0 96zM0 256C0 238.3 14.33 224 32 224H416C433.7 224 448 238.3 448 256C448 273.7 433.7 288 416 288H32C14.33 288 0 273.7 0 256zM416 448H32C14.33 448 0 433.7 0 416C0 398.3 14.33 384 32 384H416C433.7 384 448 398.3 448 416C448 433.7 433.7 448 416 448z"
                fill="white" />
        </svg>
        <svg id="toggle-second" className="hidden w-6 h-6" height="10" xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 320 512">
            <path
                d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z"
                fill="white" />
        </svg>
    </div>
    <aside
        className={`fixed top-0 left-0 z-10 flex flex-col items-center h-screen overflow-y-scroll  bg-[#F6F8FE]  dash  lg:flex lg:w-80 lg:p-10 lg:px-4 ${sideBarOpen ? "w-80" : undefined}`}
        style={{overflowY: "scroll",minHeight: "100%"}}
   
        id="side-bar">
        <div className={`flex-col items-center ${sideBarOpen ? undefined : "hidden"} w-full h-full lg:flex`} id="inner">
            <SideBar />
        </div>
    </aside>
    <main className="flex-1 bg-[#F5F5F5] lg:ml-80"  style={{maxWidth: "100%", minHeight: "100vh"}}>
    <div className="w-full">
    <div className="flex items-center justify-between w-full p-10 py-6 bg-white" >
        <p className="text-2xl font-semibold sm:text-4xl">Hello Student !</p>
        <div className="flex flex-row items-center justify-center">
            <button className="px-8 py-4 text-lg text-white rounded-full text-medium" style={{background: "linear-gradient(180deg, #76C9EF 0%, #467CE5 100%)"}}>
                Contact School
            </button>
            <div className="p-4 ml-4 bg-gray-100 rounded-full">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="#5F6368" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M19.4 15C19.2669 15.3016 19.2272 15.6362 19.286 15.9606C19.3448 16.285 19.4995 16.5843 19.73 16.82L19.79 16.88C19.976 17.0657 20.1235 17.2863 20.2241 17.5291C20.3248 17.7719 20.3766 18.0322 20.3766 18.295C20.3766 18.5578 20.3248 18.8181 20.2241 19.0609C20.1235 19.3037 19.976 19.5243 19.79 19.71C19.6043 19.896 19.3837 20.0435 19.1409 20.1441C18.8981 20.2448 18.6378 20.2966 18.375 20.2966C18.1122 20.2966 17.8519 20.2448 17.6091 20.1441C17.3663 20.0435 17.1457 19.896 16.96 19.71L16.9 19.65C16.6643 19.4195 16.365 19.2648 16.0406 19.206C15.7162 19.1472 15.3816 19.1869 15.08 19.32C14.7842 19.4468 14.532 19.6572 14.3543 19.9255C14.1766 20.1938 14.0813 20.5082 14.08 20.83V21C14.08 21.5304 13.8693 22.0391 13.4942 22.4142C13.1191 22.7893 12.6104 23 12.08 23C11.5496 23 11.0409 22.7893 10.6658 22.4142C10.2907 22.0391 10.08 21.5304 10.08 21V20.91C10.0723 20.579 9.96512 20.258 9.77251 19.9887C9.5799 19.7194 9.31074 19.5143 9 19.4C8.69838 19.2669 8.36381 19.2272 8.03941 19.286C7.71502 19.3448 7.41568 19.4995 7.18 19.73L7.12 19.79C6.93425 19.976 6.71368 20.1235 6.47088 20.2241C6.22808 20.3248 5.96783 20.3766 5.705 20.3766C5.44217 20.3766 5.18192 20.3248 4.93912 20.2241C4.69632 20.1235 4.47575 19.976 4.29 19.79C4.10405 19.6043 3.95653 19.3837 3.85588 19.1409C3.75523 18.8981 3.70343 18.6378 3.70343 18.375C3.70343 18.1122 3.75523 17.8519 3.85588 17.6091C3.95653 17.3663 4.10405 17.1457 4.29 16.96L4.35 16.9C4.58054 16.6643 4.73519 16.365 4.794 16.0406C4.85282 15.7162 4.81312 15.3816 4.68 15.08C4.55324 14.7842 4.34276 14.532 4.07447 14.3543C3.80618 14.1766 3.49179 14.0813 3.17 14.08H3C2.46957 14.08 1.96086 13.8693 1.58579 13.4942C1.21071 13.1191 1 12.6104 1 12.08C1 11.5496 1.21071 11.0409 1.58579 10.6658C1.96086 10.2907 2.46957 10.08 3 10.08H3.09C3.42099 10.0723 3.742 9.96512 4.0113 9.77251C4.28059 9.5799 4.48572 9.31074 4.6 9C4.73312 8.69838 4.77282 8.36381 4.714 8.03941C4.65519 7.71502 4.50054 7.41568 4.27 7.18L4.21 7.12C4.02405 6.93425 3.87653 6.71368 3.77588 6.47088C3.67523 6.22808 3.62343 5.96783 3.62343 5.705C3.62343 5.44217 3.67523 5.18192 3.77588 4.93912C3.87653 4.69632 4.02405 4.47575 4.21 4.29C4.39575 4.10405 4.61632 3.95653 4.85912 3.85588C5.10192 3.75523 5.36217 3.70343 5.625 3.70343C5.88783 3.70343 6.14808 3.75523 6.39088 3.85588C6.63368 3.95653 6.85425 4.10405 7.04 4.29L7.1 4.35C7.33568 4.58054 7.63502 4.73519 7.95941 4.794C8.28381 4.85282 8.61838 4.81312 8.92 4.68H9C9.29577 4.55324 9.54802 4.34276 9.72569 4.07447C9.90337 3.80618 9.99872 3.49179 10 3.17V3C10 2.46957 10.2107 1.96086 10.5858 1.58579C10.9609 1.21071 11.4696 1 12 1C12.5304 1 13.0391 1.21071 13.4142 1.58579C13.7893 1.96086 14 2.46957 14 3V3.09C14.0013 3.41179 14.0966 3.72618 14.2743 3.99447C14.452 4.26276 14.7042 4.47324 15 4.6C15.3016 4.73312 15.6362 4.77282 15.9606 4.714C16.285 4.65519 16.5843 4.50054 16.82 4.27L16.88 4.21C17.0657 4.02405 17.2863 3.87653 17.5291 3.77588C17.7719 3.67523 18.0322 3.62343 18.295 3.62343C18.5578 3.62343 18.8181 3.67523 19.0609 3.77588C19.3037 3.87653 19.5243 4.02405 19.71 4.21C19.896 4.39575 20.0435 4.61632 20.1441 4.85912C20.2448 5.10192 20.2966 5.36217 20.2966 5.625C20.2966 5.88783 20.2448 6.14808 20.1441 6.39088C20.0435 6.63368 19.896 6.85425 19.71 7.04L19.65 7.1C19.4195 7.33568 19.2648 7.63502 19.206 7.95941C19.1472 8.28381 19.1869 8.61838 19.32 8.92V9C19.4468 9.29577 19.6572 9.54802 19.9255 9.72569C20.1938 9.90337 20.5082 9.99872 20.83 10H21C21.5304 10 22.0391 10.2107 22.4142 10.5858C22.7893 10.9609 23 11.4696 23 12C23 12.5304 22.7893 13.0391 22.4142 13.4142C22.0391 13.7893 21.5304 14 21 14H20.91C20.5882 14.0013 20.2738 14.0966 20.0055 14.2743C19.7372 14.452 19.5268 14.7042 19.4 15V15Z" stroke="#5F6368" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    
            </div>
            <div className="p-4 ml-4 bg-gray-100 rounded-full">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18 8C18 6.4087 17.3679 4.88258 16.2426 3.75736C15.1174 2.63214 13.5913 2 12 2C10.4087 2 8.88258 2.63214 7.75736 3.75736C6.63214 4.88258 6 6.4087 6 8C6 15 3 17 3 17H21C21 17 18 15 18 8Z" stroke="#5F6368" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M13.73 21C13.5542 21.3031 13.3019 21.5547 12.9982 21.7295C12.6946 21.9044 12.3504 21.9965 12 21.9965C11.6496 21.9965 11.3054 21.9044 11.0018 21.7295C10.6982 21.5547 10.4458 21.3031 10.27 21" stroke="#5F6368" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    
            </div>
            <div className="p-4 ml-4 bg-gray-400 rounded-full">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="#5F6368" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" stroke="#5F6368" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    
            </div>
        </div>
    
</div>
{/* <!-- Navbar end --> */}

<div className="flex flex-col my-10 lg:flex-row">
    <div className="w-full xl:w-2/3 lg:mx-10">
    <div className="md:rounded-[30px] bg-black text-white p-4 md:p-6 w-full  py-10 h-max">
        <h1 className="text-4xl text-center">Notice</h1>
      
        <a href="{% url 'notice_detail' notice.pk %}">
            <div className="mt-4 rounded-[20px] bg-gray-400 bg-opacity-25 p-4 hover:bg-opacity-75 duration-300 ease-in-out">
                <div className="flex">
                    <span className="w-1/2 font-sans font-medium uppercase text-md sm:text-xl">lorem lorem ipsum ipsum</span>
                    <span className="w-1/2 text-sm text-right">11 jan</span>
                </div>
                <p className="py-4 text-xs text-gray-200 sm:text-sm">
                    lorem ipsum lorem ipsum lorem ipsumlorem ipsum lorem ipsum
                </p>
            </div>
        </a>
       
        <a href="{% url 'notice_list' %}">
            <div className="mt-4 rounded-[20px] bg-gray-200 bg-opacity-25 p-4 hover:bg-opacity-75 duration-300 ease-in-out">
                <span className="font-sans font-medium uppercase">See All</span>
            </div>
        </a>
    </div>
    <div className="h-72 md:rounded-[30px] bg-gray-200 p-6 w-full mt-10">
        <h1 className="text-2xl text-center md:text-4xl">Payment History</h1>
        <div className="grid grid-cols-3 mt-4">
            <div className="py-3 font-bold text-center text-gray-700 uppercase text-md lg:text-lg">Serial
            </div>
            <div className="py-3 font-bold text-center text-gray-700 uppercase text-md lg:text-lg">Amount
            </div>
            <div className="py-3 font-bold text-center text-gray-700 uppercase text-md lg:text-lg">Date
            </div>
      
                <div className="px-6 py-4 text-center">1</div>
                <div className="px-6 py-4 text-center">Rs 11000</div>
                <div className="px-6 py-4 text-center">11 jan</div>
        
            <div className="col-span-3 px-6 py-4 text-center">No Payment History Found</div>
           
        </div>
    </div>
    </div>
    <div className="w-full my-10 xl:w-1/3 lg:mx-10 xl:my-0">
        <a href="{% url 'student_attendance_detail' user_student.pk %}">
            <div className=" md:rounded-[30px] bg-gray-200 p-6 w-full ">
                <h1 className="my-4 text-2xl text-center md:text-4xl">Attendance</h1>
                <div className="flex items-center justify-center w-full h-full">
                    {/* {% include 'includes/chart.html' with data=attendance %} */}
                </div>
            </div>
        </a>
        <div className=" md:rounded-[30px] bg-gray-200 p-6 w-full mt-8">
            <h1 className="my-4 text-2xl text-center md:text-4xl">Current Month</h1>
            <div className="flex items-center justify-center w-full h-full">
                {/* {% include 'includes/calander.html' with data=attendance_detail %} */}
            </div>
        </div>
       
    </div>
</div>
</div>
    </main>
        </div>
        </div>
  )
}
