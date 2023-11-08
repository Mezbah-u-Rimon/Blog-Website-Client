import Swal from "sweetalert2";
import useAxios from "../../../hooks/useAxios";
import { Link } from "react-router-dom";


const RecentPost = ({ post }) => {
    const { _id, title, image, bl_st_details, category, bl_lg_details, date, time
    } = post || {};


    // using axios hooks for wishlist
    const axiosSecure = useAxios()
    const url = '/wishlist';

    const wishlist = {
        _id, title, image, bl_st_details, category, bl_lg_details, date, time
    }

    const handleWishlist = async () => {
        // send data to the server
        try {
            const data = await axiosSecure.post(url, wishlist, {
                headers: {
                    'Content-Type': 'application/json',
                },
            })

            if (data.data.insertedId && data.data.acknowledged === true) {
                console.log(data.data);
                Swal.fire({
                    title: 'Success!',
                    text: 'Your blog added successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                })
            }
            else {
                Swal.fire({
                    title: 'Error!',
                    text: "Already added this blog",
                    icon: 'error',
                    confirmButtonText: 'Back'
                })
            }

        }
        catch (error) {
            if (error) {
                Swal.fire({
                    title: 'Error!',
                    text: 'Already added this blog',
                    icon: 'error',
                    confirmButtonText: 'Back'
                })
            }
        }
    }

    return (
        <div>
            <div className="relative mx-4 lg:mx-0 flex flex-col text-gray-700 bg-white shadow-md rounded-xl bg-clip-border">
                <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white h-96 rounded-xl bg-clip-border">
                    <img
                        src={image}
                        className="object-cover w-full h-full"
                    />
                </div>
                <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                        <p className="block text-2xl antialiased font-bold leading-relaxed text-blue-gray-900 hover:text-orange-500">
                            {title}
                        </p>

                    </div>
                    <p className="block text-base antialiased font-medium leading-relaxed text-blue-gray-900 text-orange-500">
                        {category}
                    </p>
                    <p className="block font-sans text-sm antialiased font-normal leading-normal text-gray-700 opacity-75">
                        {bl_st_details}
                    </p>
                </div>
                <div className="p-6 pt-0 flex justify-around items-center">
                    <Link to={`/blogDetails/${_id}`}>
                        <button
                            className="hover:border-2 border-orange-500 text-orange-500 select-none rounded-lg bg-blue-gray-900/10 py-3 px-6 text-center align-middle text-xs font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                            type="button"
                        >
                            More Details
                        </button>
                    </Link>

                    <button
                        onClick={() => handleWishlist(_id)}
                        className="hover:border-2 border-orange-500 text-orange-500 select-none rounded-lg bg-blue-gray-900/10 py-3 px-6 text-center align-middle text-xs font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                        type="button"
                    >
                        Wishlist
                    </button>
                </div>
            </div>
        </div>
    );
};

export default RecentPost;