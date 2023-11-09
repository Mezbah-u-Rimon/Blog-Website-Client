import axios from "axios";
// import useAuth from "./useAuth";
// import { useNavigate } from "react-router-dom";

const axiosSecure = axios.create({
    baseURL: "https://blog-website-server-navy.vercel.app",
    withCredentials: true,
})


const useAxios = () => {
    // const { logOut } = useAuth();
    // const navigate = useNavigate();

    // axiosSecure.interceptors.response.use(res => {
    //     return res;
    // }, error => {
    //     console.log(error.response)
    //     if (error.response.status === 401 || error.response.status === 403) {
    //         console.log('logout the user ');
    //         // logOut()
    //         //     .then(() => {
    //         //         navigate('/login')
    //         //     })
    //         //     .catch(err => console.log(err))
    //     }
    // }
    // )


    return axiosSecure;
};

export default useAxios;
