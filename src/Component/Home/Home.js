import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className="dark:bg-gray-800 dark:text-gray-100 container mx-auto">
      <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
        <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
          <img
            src="https://i.shgcdn.com/4297a181-efcf-4ac2-8acf-a9b3c38a2276/"
            alt=""
            className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
          />
        </div>
        <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
          <h1 className="text-5xl font-bold leading-none sm:text-4xl">
            Welcome
            <span className="dark:text-violet-400 px-2">to </span> Our Courses
          </h1>
          <p className="mt-6 mb-8 text-lg sm:mb-12">
            <br className="hidden md:inline lg:hidden" />
            turpis pulvinar, est scelerisque ligula sem a set of classes or a
            plan of study on a particular subject,
          </p>
          <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
            <Link to="/courses">
              {" "}
              <button className="btn btn-outline btn-primary">
                Go to Course
              </button>
            </Link>
            <Link to="/register">
              <button className="btn btn-outline btn-secondary">
                Registration Now
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* carousel start */}
      <h2 className="text-5xl font-bold leading-none sm:text-4xl text-center">
        Our Gallery
      </h2>
      <div className="text-center">
        <progress className="progress w-56  progress-primary "></progress>
      </div>
      <section className="py-6 dark:bg-gray-800 dark:text-gray-50">
        <div className="container grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png"
            alt=""
            className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1 dark:bg-gray-500 aspect-square"
          />
          <img
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
            src="https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs/141855587/original/ea5d41ee7ec15685bcf7e6cb015d3b918e58a2b7/do-responsive-front-end-web-development-in-react-nodejs-html-css-bootstrap.jpg"
          />
          <img
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png"
          />
          <img
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/1200px-Bootstrap_logo.svg.png"
          />
          <img
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/2048px-Unofficial_JavaScript_logo_2.svg.png"
          />
        </div>
      </section>
      {/* carousel end */}
    </section>
  );
};

export default Home;
