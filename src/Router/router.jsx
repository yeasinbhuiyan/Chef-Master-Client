
import {
  createBrowserRouter
} from "react-router-dom";
import MainLayout from "../Layout/MainLayout";


const router = createBrowserRouter([
    {
            path: '/',
            element: <MainLayout></MainLayout>,
            children: [
                {
                    path: '/',
                    element: <h1>Banner </h1>
                }
            ]
    }
])


export default router
