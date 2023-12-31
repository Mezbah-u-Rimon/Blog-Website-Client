import Swal from "sweetalert2";
import useAxios from "../../hooks/useAxios";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";


const ShowWishlist = ({ wishlist, allWishlist, setAllWishlist }) => {
    const { _id, title, image, bl_st_details, category, email } = wishlist || {};

    const { user } = useAuth()

    // using axios hooks for delete
    const axiosSecure = useAxios()


    const handleDelete = (id) => {

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to delete this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {

            if (result.isConfirmed) {
                axiosSecure.delete(`/wishlist/${id}`)
                    .then(data => {
                        if (data.data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your selected Blog has been deleted.',
                                'success'
                            )
                            const remaining = allWishlist?.filter(blog => blog._id !== id);
                            setAllWishlist(remaining)
                        }
                    })
            }
        })
    }


    return (
        <>
            {
                user.email === email &&
                <div>
                    <div className='flex flex-col justify-center md:flex-row md:justify-between border-y py-8 gap-4'>
                        <div className='h-[150px] md:w-[300px] w-full'>
                            <img className='h-full w-full rounded-lg' src={image} alt="" />
                        </div>
                        <div className='w-full md:w-2/4'>
                            <h2 className="text-xl font-bold pb-4 inline-block">{title}
                            </h2>
                            <p className='text-orange-500 pb-2'>{category}  </p>
                            <p className='text-gray-500 pb-2'> {bl_st_details}  </p>

                        </div>
                        <div className='md:w-[200px] w-full flex flex-col gap-5'>
                            <button onClick={() => handleDelete(_id)} className='text-base text-center px-6 py-3 rounded-lg border-orange-500 border text-orange-500 shadow-lg hover:shadow-orange-200'> Remove Wishlist </button>

                            {/* details button */}
                            <Link to={`/blogDetails/${_id}`}>
                                <button className='text-base text-center w-full px-6 py-3 rounded-lg border-orange-500 border text-orange-500 shadow-lg hover:shadow-orange-200'> More  Details  </button>
                            </Link>
                        </div>
                    </div>
                </div >
            }
        </>
    );
};

export default ShowWishlist;