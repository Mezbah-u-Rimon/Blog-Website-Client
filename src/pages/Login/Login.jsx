import { Link } from "react-router-dom";
import register from "../../../public/register.svg"


const Login = () => {
    return (
        <div className="hero min-h-screen max-w-6xl mx-auto">
            <div className="hero-content flex-col lg:flex-row">
                <div className="mr-8 lg:w-1/2">
                    <img className="md:h-[600px]" src={register}></img>

                    {/* <iframe style={{ width: '500px' }} src="https://lottie.host/?file=00a0b40f-e253-46d7-87c3-abb047a360ef/Sg6bxX3xzs.json"></iframe> */}

                </div>
                <div className="card flex-shrink-0 w-full md:max-w-md shadow-2xl bg-base-100">

                    <form /* onSubmit={handleLogin} */ className="card-body">
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
                            <button className="btn bg-orange-500 text-white hover:text-black">Login</button>
                        </div>
                        {/* <SocialMedia></SocialMedia> */}
                        <p className="my-4 text-center"> New to Blog Page <Link className="font-bold text-orange-500" to="/register"> Register Now </Link> </p>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default Login;