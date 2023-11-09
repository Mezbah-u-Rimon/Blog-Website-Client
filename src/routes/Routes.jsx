import {
    createBrowserRouter,
} from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import AddBlogs from "../pages/AddBlogs/AddBlogs";
import AllBlogs from "../pages/AllBlogs/AllBlogs";
import AddWishlist from "../pages/Wishlist/AddWishlist";
import BlogDetails from "../pages/BlogDetails/BlogDetails";
import UpdateBlog from "../pages/Update/UpdateBlog";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
// import Featured from "../pages/Featured/Featured";


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
                element: <PrivateRoute><AddBlogs></AddBlogs></PrivateRoute>
            },
            {
                path: "/allBlogs",
                element: <PrivateRoute><AllBlogs></AllBlogs></PrivateRoute>
            },
            {
                path: "/blogDetails/:id",
                element: <PrivateRoute><BlogDetails></BlogDetails></PrivateRoute>,
            },
            {
                path: "/update/:id",
                element: <PrivateRoute><UpdateBlog></UpdateBlog></PrivateRoute>,
            },
            // {
            //     path: "/featured",
            //     element: <Featured></Featured>
            // },
            {
                path: "/wishlist",
                element: <PrivateRoute> <AddWishlist></AddWishlist> </PrivateRoute>,
                loader: () => fetch("http://localhost:5000/wishlist")
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