import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Layout/Main/Main';
import Courses from './Component/Courses/Courses';
import FAQ from './Component/FAQ/Faq';
import Blog from './Component/Blog/Blog';

function App() {
  const router = createBrowserRouter([
    { 
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/courses",
          element:<Courses></Courses>
        },
        {
          path: "/faq",
          element:<FAQ></FAQ>
        },
        {
          path: "/blog",
          element:<Blog></Blog>
        }
      ]
    }
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
