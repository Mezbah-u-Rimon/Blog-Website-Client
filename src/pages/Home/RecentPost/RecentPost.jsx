

const RecentPost = ({ post }) => {
    const { title, image, bl_st_details, category,
        /* bl_lg_details, date, time */ } = post || {};


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
                    <button
                        className="hover:border-2 border-orange-500 text-orange-500 select-none rounded-lg bg-blue-gray-900/10 py-3 px-6 text-center align-middle text-xs font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                        type="button"
                    >
                        More Details
                    </button>
                    <button
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