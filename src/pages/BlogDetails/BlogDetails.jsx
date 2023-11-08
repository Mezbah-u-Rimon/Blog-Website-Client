import { Link, useParams } from "react-router-dom";
import useAxios from "../../hooks/useAxios";
import { useQuery } from "@tanstack/react-query";
import { Dna } from "react-loader-spinner";
import Comment from "./Comment";


const BlogDetails = () => {

    const { id } = useParams()
    console.log(id);
    const axiosSecure = useAxios();

    const url = '/allBlogs';

    const { isPending, error, data: singleData } = useQuery({
        queryKey: ['singleBlogs'],
        queryFn: () =>
            axiosSecure.get(url)
                .then((response) => response.data),
        select: (users) => users.find(user => user._id === id),
    })

    if (isPending) {
        return <div className="flex justify-center items-center w-full h-[300px] bg-white">
            <Dna
                visible={true}
                height="80"
                width="80"
                ariaLabel="dna-loading"
                wrapperStyle={{}}
                wrapperClass="dna-wrapper text-center"
            /> </div>
    }

    if (error) {
        return <div className="bg-white h-[300px]">
            <p className="text-xl py-10 text-center text-red-600">{error.message} </p>
        </div>;
    }


    return (

        <div className="w-full max-w-6xl mx-auto mb-24 md:mt-16 mt-5 px-5">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                <div className="relative lg:m-0 overflow-hidden text-gray-700 bg-white shrink-0 rounded-xl bg-clip-border m-4">
                    <img
                        src={singleData.image}
                        alt="image"
                        className="object-cover w-full"
                    />
                </div>
                <div className="relative   rounded-xl bg-white bg-clip-border text-gray-700 shadow-md lg:ml-20">
                    <div className="p-6">
                        <div className='mb-4'>
                            <h6 className=" text-base antialiased font-semibold leading-relaxed tracking-normal text-orange-500 uppercase">
                                {singleData.category}
                            </h6>
                        </div>

                        <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                            {singleData.title}
                        </h4>
                        <h6 className=" text-base font-semibold text-amber-500">
                            <span className="text-black">Posted Date :</span> {singleData.date} & {singleData.time}
                        </h6>

                        <p className="block mb-8 mt-5 text-base  font-normal text-gray-700">
                            <span className="text-lg font-semibold"> Short Description : </span>
                            {singleData.bl_st_details}
                        </p>

                        <Link to={`/update/${id}`}>
                            <button className="px-6 py-3 text-base text-center bg-orange-500 btn hover:text-black text-white">
                                Update Blog
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="my-16">
                <p className="block text-base  font-normal text-gray-700">
                    <span className="text-lg font-semibold"> Long Description : </span>
                    {singleData.bl_lg_details}
                </p>
            </div>

            {/* comment blog */}
            <Comment></Comment>
        </div>
    );
};

export default BlogDetails;