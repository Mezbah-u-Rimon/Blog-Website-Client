

const AllFeatured = ({ featured, idx }) => {
    const { title, displayName, photoURL } = featured || {};

    return (

        <tr>
            <td>
                {idx + 1}
            </td>
            <td>
                <div className="avatar">
                    <div className="w-24 rounded  h-24 mr-5">
                        <img src={photoURL} />
                    </div>
                </div>
            </td>

            <td>
                <h3 className="font-bold">{displayName}</h3>
            </td>
            <td>
                <h3 className="text-base font-bold">
                    {title}
                </h3>
            </td>
        </tr >

    );
};

export default AllFeatured;