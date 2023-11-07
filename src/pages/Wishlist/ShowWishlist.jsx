

const ShowWishlist = ({ wishlist, allWishlist, setAllWishlist }) => {
    const { _id, title, image, bl_st_details, category,
        bl_lg_details, date, time } = wishlist || {};



    return (
        <div>
            <div className='flex flex-col justify-center md:flex-row md:justify-between border-y py-8 gap-4'>
                <div className='h-[150px] md:w-[300px] w-full'>
                    <img className='h-full w-full rounded-lg' src={image} alt="" />
                </div>
                <div className='w-full md:w-2/4'>
                    <h2 className="text-xl font-bold pb-4 inline-block">{title}
                    </h2>
                    <p className='text-gray-500 pb-2'>{category}  </p>
                    <p className='text-gray-500 pb-2'> {bl_st_details}  </p>

                </div>
                <div className='md:w-[200px] w-full flex flex-col gap-5'>
                    <button /* onClick={() => handleDelete(_id)} */ className='text-base text-center px-6 py-3 rounded-lg border-orange-500 border text-orange-500 shadow-lg hover:shadow-orange-200'> Remove Wishlist </button>

                    {/* details button */}
                    <button /* onClick={() => handleDelete(_id)} */ className='text-base text-center px-6 py-3 rounded-lg border-orange-500 border text-orange-500 shadow-lg hover:shadow-orange-200'> Details More  </button>
                </div>
            </div>
        </div>
    );
};

export default ShowWishlist;