import { Link, NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";


const Navbar = () => {
    const { user, logOut } = useAuth();

    const handleLogOut = () => {
        logOut()
    }

    const navbar = <div className="flex flex-col lg:flex-row items-center gap-3">
        <NavLink to="/" className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-white bg-orange-500 py-2 px-5 rounded-lg font-medium" : "font-medium"}> Home </NavLink>


        <NavLink to='/addBlog' className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-white bg-orange-500 py-2 px-5 rounded-lg font-medium" : "font-medium"
        }> Add Blog </NavLink>

        <NavLink className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-white bg-orange-500 py-2 px-5 rounded-lg font-medium" : "font-medium"
        }>All blogs  </NavLink>

        <NavLink className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-white bg-orange-500 py-2 px-5 rounded-lg font-medium" : "font-medium"}> Featured Blogs </NavLink>

        <NavLink className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-white bg-orange-500 py-2 px-5 rounded-lg font-medium" : "font-medium"}> Wishlist
        </NavLink>
        {<>
            <NavLink to='/login' className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-white bg-orange-500 py-2 px-5 rounded-lg font-medium" : "font-medium"}> Login </NavLink>

            <NavLink to='/register' className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-white bg-orange-500 py-2 px-5 rounded-lg font-medium" : "font-medium"}> Register
            </NavLink>
        </>}

    </div>

    return (
        <div className="navbar max-w-6xl mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navbar}
                    </ul>
                </div>
                <div className="flex items-center gap-3">
                    <img className="h-[80px]" src="https://i.ibb.co/6PT9kSw/Screenshot-51-removebg-preview.png" alt="" />
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navbar}
                </ul>
            </div>

            <div className="navbar-end">

                {
                    user?.email ? <div className="dropdown dropdown-end flex items-center">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src={user.photoURL} alt={user.displayName} />
                            </div>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li>
                                <button className="btn btn-sm  btn-ghost">{user.displayName}</button>

                            </li>
                            <li>
                                <button onClick={handleLogOut} className="btn btn-sm  btn-ghost bg-orange-500 text-white">Logout</button>

                            </li>
                        </ul>
                    </div>
                        :
                        <Link to='/login'>
                            <button className="btn btn-sm  btn-ghost bg-orange-500 text-white">Login</button>
                        </Link>
                }

            </div>
        </div >
    );
};

export default Navbar;