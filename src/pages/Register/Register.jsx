import { Link, useNavigate } from "react-router-dom";
import register from "../../../public/register.svg"
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
import SocialLogin from "./SocialLogin";
import useAxios from "../../hooks/useAxios";


const Register = () => {
    const { createUser, profileUpdate } = useAuth();
    const navigate = useNavigate();
    const axiosSecure = useAxios();

    const handleRegister = e => {
        e.preventDefault();

        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const image = form.image.value;
        // console.log(name, email, password, image);



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


        // create user
        createUser(email, password)
            .then(() => {
                profileUpdate(name, image)
                    .then(() => {
                        //user info
                        const userInfo = {
                            name, email, password,
                        }
                        axiosSecure.post('/users', userInfo)
                            .then(res => {
                                if (res.data.insertedId) {
                                    toast.success("Thank You for Subscribe Our website, You will earn 20 tk, please wait You will get your money within 3 hours");
                                    navigate("/home")
                                }
                            })

                    })
            })
            .catch(err => {
                toast.error(err.message)
            })

    }


    return (
        <div className="hero my-8 max-w-6xl mx-auto">
            <div className="hero-content flex-col lg:flex-row">
                <div className="mr-8 lg:w-1/2">
                    <img className="lg:h-[700px]" src={register}></img>
                </div>
                <div className="card flex-shrink-0 w-full md:max-w-md shadow-2xl bg-base-100">

                    <form onSubmit={handleRegister} className="card-body">
                        <h1 className="text-3xl font-bold text-center"> Register Now   </h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text"> Name </span>
                            </label>
                            <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text"> Confirm Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Image URL </span>
                            </label>
                            <input type="text" name="image" placeholder="Image URL" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <button type="submit" className="btn bg-orange-500 text-white hover:text-black"> Register </button>
                        </div>

                        <p className="my-4 text-center"> Already have an account  <Link className="font-bold text-orange-500"
                            to="/login"> Login </Link>
                        </p>
                        <SocialLogin></SocialLogin>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default Register;