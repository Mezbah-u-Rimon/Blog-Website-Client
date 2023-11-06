import { useState } from "react";
import toast from "react-hot-toast";


const Subscribe = () => {
    const [email, setEmail] = useState(null)

    const handleSubscribe = e => {
        e.preventDefault();


        if (email) {
            toast.success("Thank you for subscribing to our newsletter");
            setEmail("")
        }
    }


    return (
        <div style={{ backgroundColor: 'rgba(0,0,0,0.5)', }} className="py-12 md:px-20">
            <div className="flex flex-col md:flex-row-reverse gap-6 justify-around items-center">
                <div className="flex-1">
                    <img src="https://i.ibb.co/nDcQs0f/email-removebg-preview.png" alt="" />
                </div>
                <div className="flex-1 space-y-2">
                    <h1 className="text-white text-5xl font-bold"> Never Miss a Post </h1>
                    <h3 className="text-3xl text-orange-500 font-bold pb-5"> Subscribe to Our Newsletter </h3>

                    <form onSubmit={handleSubscribe} className="flex items-center">
                        <input onBlur={(e) => setEmail(e.target.value)} name="email" type="email" placeholder="Inter Your email here" className="input input-bordered input-warning w-full md:max-w-xs rounded-r-none" required />
                        <button type="submit" className="btn btn-warning rounded-l-none"> Subscribe </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Subscribe;