import { Dna } from "react-loader-spinner";
import useAxios from "../../hooks/useAxios";
import {
    useQuery,
} from '@tanstack/react-query'
import AllBlog from "./AllBlog";


const AllBlogs = () => {
    const axiosSecure = useAxios();

    const url = '/allBlogs';

    const { isPending, error, data: posts } = useQuery({
        queryKey: ['recentBlogs'],
        queryFn: () =>
            axiosSecure.get(url)
                .then((response) => response.data)
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

    console.log(posts);

    return (
        <div className="bg-base-100 py-24 mx-auto px-3">
            <h1 className="text-center text-4xl font-bold "> Our <h1 className="text-orange-500 border-b-2 border-orange-500 border-solid inline-block"> Recent </h1> Blogs </h1>
            <p className="text-center lg:w-1/2 mx-auto pt-5 pb-10"> Good health starts with good nutrition. Explore the keys to maintaining a healthy diet, from balanced eating to meal planning</p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    posts?.map((post) => <AllBlog key={post._id} post={post}> </AllBlog>)
                }
            </div>
        </div>
    );
};

export default AllBlogs;