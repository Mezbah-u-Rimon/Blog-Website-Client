import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import useAxios from "../../hooks/useAxios";
import { useQuery } from "@tanstack/react-query";
import Message from "./Message";
import toast from "react-hot-toast";


const Comment = ({ singleData }) => {
    console.log(singleData);

    const { user } = useAuth();
    // using axios hooks
    const axiosSecure = useAxios()
    const url = '/comment';

    const { email, displayName, photoURL } = user || {};

    const handleSubmit = async (e) => {
        e.preventDefault();

        const form = e.target;
        const comment = form.comment.value;

        const newComment = { comment, email, displayName, photoURL }

        // send data to the server
        try {
            const data = await axiosSecure.post(url, newComment, {
                headers: {
                    'Content-Type': 'application/json',
                },
            })

            if (data.data.insertedId) {
                toast.success("Thank you for Comment This Blog");
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

    //get the all comment
    const { data: addComment } = useQuery({
        queryKey: ['comment',],
        queryFn: () =>
            axiosSecure.get(url)
                .then((res) => res.data),

    })


    return (
        <div>
            {/* post comment */}
            <div>
                <h3 className="text-xl font-semibold mb-4"> Comment This Blog... </h3>
                {
                    !singleData.email ? <form onSubmit={handleSubmit}>
                        <textarea name="comment" rows="2" className="textarea border-2 w-3/4 md:w-1/2 border-orange-400" placeholder="Shear your feedback"> </textarea>
                        <br />
                        <input className="btn  bg-orange-500 text-white hover:text-black" type="submit" value="Add Your Comment" />
                    </form> : <p>Sorry can't comment under own blog </p>
                }

            </div>

            {/* add comment */}
            <div className="mt-10">
                {
                    addComment?.map(message => <Message
                        key={message._id}
                        message={message}>
                    </Message>)
                }
            </div>
        </div>
    );
};

export default Comment;