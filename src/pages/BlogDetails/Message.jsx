

const Message = ({ message }) => {
    const { comment, displayName, photoURL } = message || {};

    return (
        <div className="md:w-2/3 bg-orange-200 px-10 py-5 rounded-lg my-5">
            <div className="flex items-center gap-3">
                <div className="avatar">
                    <div className="w-12 rounded-full bg-white">
                        <img src={photoURL} />
                    </div>
                </div>
                <h3 className="text-xl font-bold">{displayName} </h3>
            </div>
            <p className="pt-3">
                {comment}
            </p>
        </div>
    );
};

export default Message;