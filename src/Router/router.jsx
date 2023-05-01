
import {
  createBrowserRouter
} from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Blog from "../Pages/Blog";
import Help from "../Pages/Help";
import Home from "../Pages/Home/Home";
import Recipes from "../Pages/Recipes/Recipes";


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
                    path: '/recipes/:id',
                    element: <Recipes></Recipes>,
                    loader: ({params})=>fetch(`http://localhost:5000/recipes/${params.id}`)


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
