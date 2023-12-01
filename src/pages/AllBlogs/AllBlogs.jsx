import { Dna } from "react-loader-spinner";
import useAxios from "../../hooks/useAxios";
import {
    useQuery,
} from '@tanstack/react-query'
import AllBlog from "./AllBlog";
import { useState } from "react";

const categories = [
    "Personal",
    'Travel',
    'Home & Garden',
    'Food',
    'Fashion',
    'Technology',
    'Health',
    'Parenting',
    'Finance',
    'Business',
    'News',
]

const AllBlogs = () => {
    const [category, setCategory] = useState('');
    const [title, setTitle] = useState('');
    const axiosSecure = useAxios();

    const url = `/allBlogs?category=${category}&search=${title}`;

    //use tanStack query
    const { isPending, error, data: posts } = useQuery({
        queryKey: ['posts', category, title],
        queryFn: () =>
            axiosSecure.get(url)
                .then((res) => res.data),
    })


    if (error) {
        return <div className="bg-white h-[300px]">
            <p className="text-xl py-10 text-center text-red-600">{error.message} </p>
        </div>;
    }

    return (
        <div className="mx-auto px-3 py-10">
            <div className="flex flex-col md:flex-row justify-around items-center gap-5 py-10 border-2 border-orange-300 rounded-lg bg-base-200">
                <div>
                    <h1 className="text-center text-4xl font-bold "> Our <h1 className="text-orange-500 border-b-2 border-orange-500 border-solid inline-block"> Blogs </h1>  </h1>
                </div>
                {/* search input */}
                <div>
                    <input value={title}
                        onChange={(e) => setTitle(e.target.value)} type="search"
                        placeholder="Search the title" className="input input-bordered border-orange-400 w-full max-w-xs" />
                </div>
                {/* category */}
                <div>
                    <select onChange={(e) => setCategory(e.target.value)} className="select select-bordered border-orange-400 w-full max-w-xs">
                        <option disabled selected>Select Category</option>
                        {
                            categories?.map(blog => <option key={blog} value={blog}>{blog} </option>)
                        }
                    </select>
                </div>
            </div>

            {
                isPending && <div className="flex justify-center items-center w-full h-[300px] bg-white">
                    <Dna
                        visible={true}
                        height="80"
                        width="80"
                        ariaLabel="dna-loading"
                        wrapperStyle={{}}
                        wrapperClass="dna-wrapper text-center"
                    /> </div>

            }

            {/* all blogs map */}
            <div className="bg-base-100 py-10 ">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {
                        posts?.filter((item) =>
                            item.title.toLowerCase().includes(title.toLowerCase())
                        ).map((post) => <AllBlog key={post._id} post={post}> </AllBlog>)
                    }
                </div>
            </div>
        </div>
    );
};

export default AllBlogs;