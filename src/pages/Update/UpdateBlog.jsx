import Swal from "sweetalert2";
import useAxios from "../../hooks/useAxios";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { Dna } from "react-loader-spinner";


const UpdateBlog = () => {
    const { id } = useParams()
    const axiosSecure = useAxios()
    const url = "/allBlogs";

    //get element
    const { isPending, error, data: updatedBlog } = useQuery({
        queryKey: ['updateBlogs'],
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


    //update element
    const handleUpdateBlogs = async (e) => {
        e.preventDefault();

        const form = e.target;
        const title = form.title.value;
        const category = form.category.value;
        const date = form.date.value;
        const time = form.time.value;
        const bl_st_details = form.bl_st_details.value;
        const bl_lg_details = form.bl_lg_details.value;
        const image = form.image.value;

        const addUpdateBlog = { title, category, date, time, bl_st_details, bl_lg_details, image }


        // send data to the server
        try {
            const data = await axiosSecure.put(`/allBlogs/${id}`, addUpdateBlog, {
                headers: {
                    'Content-Type': 'application/json',
                },
            })

            if (data.data.modifiedCount > 0) {
                Swal.fire({
                    title: 'Success!',
                    text: 'Your blog Updated successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                })
            }
            else {
                Swal.fire({
                    title: 'Error!',
                    text: 'Already updated this Blog',
                    icon: 'error',
                    confirmButtonText: 'Cool'
                })
            }
        } catch (error) {
            Swal.fire({
                title: 'Error!',
                text: `${error.message}`,
                icon: 'error',
                confirmButtonText: 'Back'
            })
        }
    }

    return (
        <div style={{ backgroundImage: "url('https://media.cntraveler.com/photos/64879b50add73e0d14b17f9e/16:9/w_1920%2Cc_limit/Most-Adventurous-things-to-do-in-your-lifetime-(update)_timur-garifov-sisZWCDkmwA-unsplash.jpg')", backgroundSize: "cover", backgroundRepeat: "no-repeat" }} className="w-full h-full">
            <div style={{ backgroundColor: "rgba(0,0,0,0.5)" }} className="h-full w-full">
                <div className="max-w-6xl mx-auto p-5 md:p-12 lg:px-24 lg:pb-24 lg:pt-12">
                    <h1 className="text-4xl font-extrabold text-center pb-12 text-white"> UPDATE YOUR BLOGS </h1>
                    <form className="space-y-7"
                        onSubmit={handleUpdateBlogs}>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <div className="form-control md:w-full">
                                <label className="label">
                                    <span className="label-text text-white text-lg">Title </span>
                                </label>
                                <label className="input-group">
                                    <input defaultValue={updatedBlog.title} type="text" name="title" placeholder="Title" className="input input-bordered w-full" required />
                                </label>
                            </div>
                            <div className="form-control md:w-full">
                                <label className="label">
                                    <span className="label-text text-white text-lg">
                                        Category
                                    </span>
                                </label>
                                <label className="input-group">
                                    <select defaultValue={updatedBlog.category} name="category" className="select select-bordered w-full">
                                        <option disabled selected> Select Your Category  </option>
                                        <option>Personal </option>
                                        <option>Travel </option>
                                        <option>Home & Garden </option>
                                        <option>Food </option>
                                        <option>Fashion </option>
                                        <option>Technology </option>
                                        <option>Health</option>
                                        <option>Parenting </option>
                                        <option>Finance  </option>
                                        <option>Business </option>
                                        <option> News </option>
                                    </select>
                                </label>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <div className="form-control md:w-full">
                                <label className="label">
                                    <span className="label-text text-white text-lg"> Date </span>
                                </label>
                                <label className="input-group">
                                    <label className="input-group">
                                        <input defaultValue={updatedBlog.date} type="date" name="date" className="input input-bordered w-full" required />
                                    </label>
                                </label>
                            </div>
                            <div className="form-control md:w-full">
                                <label className="label">
                                    <span className="label-text text-white text-lg"> Time </span>
                                </label>
                                <label className="input-group">
                                    <label className="input-group">
                                        <input defaultValue={updatedBlog.time} type="time" name="time" className="input input-bordered w-full" required />
                                    </label>
                                </label>
                            </div>
                        </div>

                        {/* form sort and long description row */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <div className="form-control md:w-full">
                                <label className="label">
                                    <span className="label-text text-white text-lg"> Sort Description  </span>
                                </label>
                                <label className="input-group">
                                    <label className="input-group">
                                        <input defaultValue={updatedBlog.bl_st_details} type="text" name="bl_st_details" placeholder="Sort Description" className="input input-bordered w-full" required />
                                    </label>
                                </label>
                            </div>
                            <div className="form-control md:w-full">
                                <label className="label">
                                    <span className="label-text text-white text-lg"> Long Description  </span>
                                </label>
                                <label className="input-group">
                                    <input defaultValue={updatedBlog.bl_lg_details} type="text" name="bl_lg_details" placeholder="Long Description" className="input input-bordered w-full" required />
                                </label>
                            </div>
                        </div>

                        {/* form photo Url row */}
                        <div>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text text-white text-lg">Photo URL </span>
                                </label>
                                <label className="input-group">
                                    <input defaultValue={updatedBlog.image} type="text" name="image" placeholder="Photo URL" className="input input-bordered w-full" required />
                                </label>
                            </div>
                        </div>
                        <input className="btn btn-block bg-orange-500 text-white hover:text-black" type="submit" value="Add Your Blog" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateBlog;