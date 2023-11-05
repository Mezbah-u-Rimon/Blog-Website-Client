import { Link, useLocation, useNavigate } from "react-router-dom";
import register from "../../../public/register.svg"
import toast from "react-hot-toast";
import useAuth from "../../hooks/useAuth";
import SocialLogin from "../Register/SocialLogin";


const Login = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const { signIn } = useAuth();


    const handleLogin = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');

        //password validation
        if (password.length < 6) {
            return toast.error('Password not valid. At least 6 characters should be given in password');
        }

        if (!/[A-Z]/.test(password)) {
            return toast.error('Password not valid. At least 1 capital letter should be given in password');
        }

        if (!/[!@#$%^&*()_+{};[\]:;<>,.?~\\-]/.test(password)) {
            return toast.error('Password not valid. At least 1 special character should be given in password');
        }

        signIn(email, password)
            .then(() => {
                toast.success("user sign in successfully");
                navigate(location?.state ? location.state : "/")
            })
            .catch(err => {
                toast.error(err.message)
            })

    }


    return (
        <div className="hero min-h-screen max-w-6xl mx-auto">
            <div className="hero-content flex-col lg:flex-row">
                <div className="mr-8 lg:w-1/2">
                    <img className="md:h-[600px]" src={register}></img>
                </div>
                <div className="card flex-shrink-0 w-full md:max-w-md shadow-2xl bg-base-100">

                    <form onSubmit={handleLogin} className="card-body">
                        <h1 className="text-3xl font-bold text-center"> Login </h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button type="submit" className="btn bg-orange-500 text-white hover:text-black">Login</button>
                        </div>

                        <p className="my-4 text-center"> New to Blog Page <Link className="font-bold text-orange-500" to="/register"> Register Now </Link> </p>
                        <SocialLogin />
                    </form>

                </div>
            </div>
        </div>
    );
};

export default Login;