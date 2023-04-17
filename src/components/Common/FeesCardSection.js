import React from "react";
import FeesCard from "./Cards/FeesCard";
import PopUpMenu from "../UI/PopUpMenu";
export default function FeesCardSection({
  classCumilativeName,
  sectionData,

  setPageState,
  setOpenSidebar,
  setFeesData
}) {
  function filterTabs(classData) {
      return classData.className.split(" ")[0] === classCumilativeName;
    }
   
  return (
    <>
      {sectionData.filter(filterTabs).length === 0 ? undefined : (
        <div className="mt-2 flex flex-col">
          <span className="ml-2 text-2xl font-medium text-gray-800 my-3 flex">
            {classCumilativeName} Standard
          </span>
       
          <div className="mb-10 grid gap-4 min-[590px]:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {sectionData.filter(filterTabs).map((classData, index) => {
              return (
                <FeesCard
                  key={index}
                  setFeesData={setFeesData}
                  feesData={classData}
                  index={index}
                  setOpenSidebar={setOpenSidebar}
                />
              );
            })}
          </div>
        </div>
      )}
    </>
  );
}
