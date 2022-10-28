import React, { useEffect, useState } from "react";
import ShowSideBar from "../ShowSideBar/ShowSideBar";

const SideBar = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    fetch(
      "https://web-development-courses-server.vercel.app/course-categories"
    )
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  return (
    <div>
      {categories.map((category) => (
        <ShowSideBar key={category.id} category={category}></ShowSideBar>
      ))}
    </div>
  );
};

export default SideBar;
