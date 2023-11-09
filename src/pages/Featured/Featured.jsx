import { useQuery } from "@tanstack/react-query";
import useAxios from "../../hooks/useAxios";
import { Dna } from "react-loader-spinner";
import AllFeatured from "./AllFeatured";

const Featured = () => {
    const axiosSecure = useAxios();

    const url = `/allBlogs`; //?search=${bl_lg_details}

    const { isPending, error, data: featuredData } = useQuery({
        queryKey: ['featuredData'],
        queryFn: () =>
            axiosSecure.get(url)
                .then((response) => response.data),
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

    const topPost = featuredData
        .slice()
        .sort((a, b) => b.bl_lg_details.split(' ').length - a.bl_lg_details.split(' ').length)
        .slice(0, 10);


    return (
        <div className="max-w-6xl w-full mx-auto">
            <h1 className="text-4xl text-orange-500 text-center my-10 font-bold"> Our Top 10 Featured Post </h1>
            <div className="overflow-x-auto lg:ml-16">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th className="uppercase font-bold  text-black">Serial</th>
                            <th className="uppercase font-bold  text-black">Owner Profile </th>
                            <th className="uppercase font-bold  text-black">Owner Name </th>
                            <th className="uppercase font-bold  text-black"> Title </th>
                        </tr>
                    </thead>
                    {
                        topPost?.map((featured, idx) => <AllFeatured
                            key={featured._id}
                            idx={idx}
                            featured={featured}>
                        </AllFeatured>)
                    }
                </table>
            </div>
        </div>
    );
};

export default Featured;