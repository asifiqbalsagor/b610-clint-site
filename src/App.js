import logo from "./logo.svg";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./Layout/Main/Main";
import Courses from "./Component/Courses/Courses";
import FAQ from "./Component/FAQ/Faq";
import Blog from "./Component/Blog/Blog";
import Login from "./Login-Register/Login";
import Register from "./Login-Register/Register";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/courses",
          loader: () => {
            return fetch(
              "https://web-development-courses-server.vercel.app/allCourse"
            );
          },
          element: <Courses></Courses>,
        },
        {
          path: "/faq",
          element: <FAQ></FAQ>,
        },
        {
          path: "/blog",
          element: <Blog></Blog>,
        },
        {
          path: "/login",
          element: <Login></Login>,
        },
        {
          path: "/register",
          element: <Register></Register>,
        },
      ],
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
