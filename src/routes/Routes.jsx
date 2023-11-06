import {
    createBrowserRouter,
} from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import AddBlogs from "../pages/AddBlogs/AddBlogs";



const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout></Layout>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/addBlog",
                element: <AddBlogs></AddBlogs>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            }
        ]
    },
]);

export default router