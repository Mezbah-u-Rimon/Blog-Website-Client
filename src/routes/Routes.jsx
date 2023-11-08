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
                path: "/allBlogs",
                element: <AllBlogs></AllBlogs>
            },
            {
                path: "/blogDetails/:id",
                element: <BlogDetails></BlogDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/allBlogs/${params.id}`),
            },
            {
                path: "/wishlist",
                element: <AddWishlist></AddWishlist>,
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