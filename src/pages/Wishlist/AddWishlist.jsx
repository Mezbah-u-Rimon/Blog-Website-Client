import { useLoaderData } from "react-router-dom";
import { useState } from "react";
import ShowWishlist from "./ShowWishlist";


const AddWishlist = () => {
    const myWishlist = useLoaderData();
    const [allWishlist, setAllWishlist] = useState(myWishlist);
    console.log(allWishlist);

    return (
        <div className="max-w-6xl mx-auto pt-12 pb-24 px-5">
            <div className="mb-12">
                <h2 className="text-4xl font-bold text-center"> My <span className="text-orange-600"> Wishlist</span> </h2>
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