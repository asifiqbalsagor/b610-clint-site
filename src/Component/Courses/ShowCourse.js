import React from "react";

const ShowCourse = ({ course }) => {
  const { title, Course_Fees, days, image_url, details } = course;
  return (
    <div>
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={image_url} alt="Shoes" />
        </figure>
        <div className="card-body">
                      <h1 className="card-title">Title :{ title}</h1>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Details</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowCourse;
