// import { useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";
import ShowWishlist from "./ShowWishlist";
import useAxios from "../../hooks/useAxios";
import useAuth from "../../hooks/useAuth";


const AddWishlist = () => {
    // const myWishlist = useLoaderData();
    const [allWishlist, setAllWishlist] = useState([]);
    const axiosSecure = useAxios()
    const { user } = useAuth()

    useEffect(() => {
        axiosSecure.get(`/wishlist?email=${user?.email}`)
            .then((response) => setAllWishlist(response.data))
    }, [axiosSecure, user])


    return (
        <div className="max-w-6xl mx-auto pt-12 pb-24 px-5">
            <div className="mb-12">
                <h2 className="text-4xl font-bold text-center"> My <span className="text-orange-500"> Wishlist</span> </h2>
            </div>
            <div>
                {
                    allWishlist?.map(wishlist => <ShowWishlist
                        key={wishlist._id}
                        wishlist={wishlist}
                        allWishlist={allWishlist}
                        setAllWishlist={setAllWishlist}
                    > </ShowWishlist>)
                }
            </div>
        </div>
    );
};

export default AddWishlist;