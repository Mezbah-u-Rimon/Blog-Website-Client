import { Outlet } from "react-router-dom";
import Navbar from "../components/Navber/Navbar";
import Footer from "../components/Footer/Footer";
import { Toaster } from "react-hot-toast";

const Layout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
            <Toaster />
        </div>
    );
};

export default Layout;