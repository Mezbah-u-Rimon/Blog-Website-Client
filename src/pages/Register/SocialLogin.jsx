import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from 'react-icons/fc';
import { BsGithub } from 'react-icons/bs';
import useAuth from "../../hooks/useAuth";

const SocialLogin = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { googleLogin, githubLogin } = useAuth();


    const handleSocialLogin = (media) => {
        media()
            .then(() => {
                toast.success("user sign in successfully");
                navigate(location?.state ? location.state : "/")
            })
            .catch(err => toast.error(err.message))
    }


    return (
        <div className="mb-6">
            <div className="divider -mt-2">continue with</div>
            <div className="flex justify-around items-center mt-6">
                <button
                    onClick={() => handleSocialLogin(googleLogin)}
                    className="btn"><FcGoogle className="text-3xl"></FcGoogle> Google </button>
                <button
                    onClick={() => handleSocialLogin(githubLogin)}
                    className="btn "> <BsGithub className="text-3xl"></BsGithub> Github
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;