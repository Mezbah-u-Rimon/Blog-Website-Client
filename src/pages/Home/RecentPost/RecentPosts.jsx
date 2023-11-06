import useAxios from "../../../hooks/useAxios";
// import axios from "axios";
import RecentPost from "./RecentPost";
import {
    useQuery,
} from '@tanstack/react-query'

const RecentPosts = () => {
    const axiosSecure = useAxios();

    // const url = `http://localhost:5000/allBlogs`;
    const url = `/allBlogs`;

    const { isPending, error, data: posts } = useQuery({
        queryKey: ['recentBlogs'],
        queryFn: () =>
            axiosSecure.get(url)
                .then((response) => response.data)

        // axios.get(url)
        // .then((response) => response.data)

        // fetch(url)
        //     .then((response) => response.json())
    })

    if (isPending) {
        return <div> Loading...</div>
    }

    if (error) {
        return <p className="text-xl py-10 text-center text-red-600">{error.message} </p>;
    }

    console.log(posts);

    return (
        <div className="bg-base-100 py-24 mx-auto px-3">
            <h1 className="text-center text-4xl font-bold "> Our <h1 className="text-orange-500 border-b-2 border-orange-500 border-solid inline-block"> Recent </h1> Blogs </h1>
            <p className="text-center lg:w-1/2 mx-auto pt-5 pb-10"> Good health starts with good nutrition. Explore the keys to maintaining a healthy diet, from balanced eating to meal planning</p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    posts?.slice(0, 6).map((post, idx) => <RecentPost key={idx} post={post}> </RecentPost>)
                }
            </div>
        </div>
    );
};

export default RecentPosts;