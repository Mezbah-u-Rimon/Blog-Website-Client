import { Navigate, useLocation } from "react-router-dom";
// import { CirclesWithBar } from "react-loader-spinner";
import useAuth from "../hooks/useAuth";
import { Dna } from "react-loader-spinner";


const PrivateRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const location = useLocation();

    if (loading) {
        return <div className="h-screen w-full flex justify-center items-center">
            <Dna
                visible={true}
                height="80"
                width="80"
                ariaLabel="dna-loading"
                wrapperStyle={{}}
                wrapperClass="dna-wrapper text-center"
            /> </div>

    }
    if (!user) {
        return <Navigate state={location.pathname} to='/login'></Navigate>
    }
    else {
        return children
    }

};


export default PrivateRoute;