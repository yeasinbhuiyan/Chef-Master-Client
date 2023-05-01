
import {
  createBrowserRouter
} from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Blog from "../Pages/Blog";
import Help from "../Pages/Help";
import Home from "../Pages/Home/Home";


const router = createBrowserRouter([
    {
            path: '/',
            element: <MainLayout></MainLayout>,
            children: [
                {
                    path: '/',
                    element: <Home></Home>
                },
                {
                    path: '/blog',
                    element: <Blog></Blog>

                },
                {
                    path: '/help',
                    element: <Help></Help>
                }
            ]
    }
])


export default router
