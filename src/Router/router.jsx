
import {
  createBrowserRouter
} from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Blog from "../Pages/Blog";
import Help from "../Pages/Help";
import Home from "../Pages/Home/Home";
import Recipes from "../Pages/Recipes/Recipes";
import Login from "../Shared/LoginAndRegister/Login";
import Register from "../Shared/LoginAndRegister/Register";
import About from "../Pages/About/About";
import PrivateRoute from "./PrivateRoute";
import Error from "../Pages/Error/Error";


const router = createBrowserRouter([
    {
            path: '/',
            element: <MainLayout></MainLayout>,
            errorElement: <Error></Error>,
            children: [
                {
                    path: '/',
                    element: <Home></Home>
                },
                {
                    path: '/recipes/:id',
                    element: <PrivateRoute><Recipes></Recipes></PrivateRoute>,
                    loader: ({params})=>fetch(`https://chef-master-server-yeasinbhuiyan.vercel.app/recipes/${params.id}`)


                },
                {
                    path: '/login',
                    element:<Login></Login>
                },
                {
                    path: '/register',
                    element: <Register></Register>

                },
                {
                    path: '/blog',
                    element: <Blog></Blog>

                },
                {
                    path: '/help',
                    element: <Help></Help>
                },
                {
                    path : '/about',
                    element: <About></About>
                },
                {
                    path : '/contact',
                    element: <h1>this is contact</h1>
                }
            ]
    }
])


export default router
