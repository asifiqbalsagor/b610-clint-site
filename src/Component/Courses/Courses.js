import React from "react";
import { useLoaderData } from "react-router-dom";
import SideBar from "../SideBar/SideBar";
import ShowCourse from "./ShowCourse";

const Courses = () => {
  const courses = useLoaderData();
  return (
    <div>
      <div class="grid grid-cols-3 gap-4 container mx-auto">
        <div class="..."><SideBar></SideBar></div>
        <div class="col-span-2 ...">
          <div class="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 mx-6 my-2  gap-4">
            {courses.map((course) => (
              <ShowCourse key={course.id} course={course}></ShowCourse>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
