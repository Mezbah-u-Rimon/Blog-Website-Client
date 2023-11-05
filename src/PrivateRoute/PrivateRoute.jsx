import { Navigate, useLocation } from "react-router-dom";
// import { CirclesWithBar } from "react-loader-spinner";
import useAuth from "../hooks/useAuth";


const PrivateRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const location = useLocation();

    if (loading) {
        return <div className="h-screen w-full flex justify-center items-center">
            {/* <CirclesWithBar
                height="100"
                width="100"
                color="orange"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
                outerCircleColor=""
                innerCircleColor=""
                barColor=""
                ariaLabel='circles-with-bar-loading'
            /> */}
        </div>
    }
    if (!user) {
        return <Navigate state={location.pathname} to='/login'></Navigate>
    }
    else {
        return children
    }

};


export default PrivateRoute;