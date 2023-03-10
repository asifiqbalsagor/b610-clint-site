import React from "react";
import { useLoaderData } from "react-router-dom";
import DisplayCourse from "../Error404Page/Error404Page";
import LeftSidebar from "./SideBar/LeftSideBar";

const Courses = () => {
 
  const courses = useLoaderData()
  console.log(courses)
   
  return (
    <div className="grid lg:grid-cols-4 gap-4 sm:grid-cols-1 md:grid-cols-2">
      <LeftSidebar></LeftSidebar>
      <div className="col-span-3 ...">
      
      <div class="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 mx-6 my-2  gap-8">


  {
         courses.map(course => <DisplayCourse
         key={course._id}
         course={course}
         ></DisplayCourse>)
       }

 
 

      </div>
      </div>

    </div>
  );
};

export default Courses;
