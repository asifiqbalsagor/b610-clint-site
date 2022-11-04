import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./Layout/Main";
import FAQ from "./Component/Header/HeaderTopic/FAQ"
import Blog from "./Component/Header/HeaderTopic/Blog"
import Register from "./Register_And_Login/Register"
import Login from "./Register_And_Login/Login"
import Error404page from "./Error404Page/Error404Page";
import DetailsCourseInfo from "./Course/DetailsCourseInfo";
import CheckOut from "./Course/CheakOut/CheakOut";
import Home from "./Component/Home/Home";
import PrivateRoute from "./PrivetRoute/PrivetRoute";
import { Toaster } from "react-hot-toast";
import Courses from "./Course/Courses";

function App() {

  const router = createBrowserRouter([

     {
      path:'/' , 
      element: <Main></Main> ,
       children:[
       
          {
            path:'/',
            element:<Home></Home>
          },
          {
            path:'/home',
           
            element: <Home></Home>
          },
          {
            path:'/courses',
            loader: ()  => {

               return fetch('http://localhost:5000/allCourse')
            },
            element:<Courses></Courses>
          },
          {
            path:'/courses/detailsCourseInfo/:_id',
            loader: ({params})  => {

               return fetch(`http://localhost:5000/allCourse/${params._id}`)
            },
            element:<DetailsCourseInfo></DetailsCourseInfo>
          },
          
          {
            path:'checkOut/:checkOutId',
            loader: ({params})  => {

               return fetch(`http://localhost:5000/allCourse/${params.checkOutId}`)
            },
            element:<PrivateRoute><CheckOut></CheckOut></PrivateRoute>
          },

          
          {
            path:'/faq',
            element:<FAQ></FAQ>
          },
          {
            path:'/blog',
            element: <Blog></Blog>
          },
          {
            path:'/register',
            element: <Register></Register>
          },
          {
            path:'/login',
            element: <Login></Login>
          },
          {
            path:'*',
            element:<Error404page></Error404page>

          }
          
       ]
     }

  ])

  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
      <Toaster />
     
    </div>
  );
}

export default App;



