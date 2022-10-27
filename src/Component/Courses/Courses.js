import React from "react";
import { useLoaderData } from "react-router-dom";
import ShowCourse from "./ShowCourse";

const Courses = () => {
  const courses = useLoaderData();
  return (
    <div>
      <div class="grid grid-cols-3 gap-4">
        <div class="...">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur, explicabo! Distinctio dolore labore animi? Ipsa, repellat hic vel nobis vero officia quam ratione natus, at sunt consequatur dicta, excepturi modi.</div>
        <div class="col-span-2 ...">
          {courses.map((course) => (
            <ShowCourse key={course.id} course={course}></ShowCourse>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;
