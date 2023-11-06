import Swal from "sweetalert2";


const AddBlogs = () => {

    const handleAddCar = e => {
        e.preventDefault();

        const form = e.target;
        const name = form.name.value;
        const brand_name = form.brand_name.value;
        const price = form.price.value;
        const category = form.category.value;
        const rating = form.rating.value;
        const details = form.details.value;
        const photo = form.photo.value;

        const addNewCar = { name, brand_name, price, category, rating, details, photo }

        console.log(addNewCar);

        //send data to the server
        fetch('https://automotive-car-server-8jtyzxqqq-rimons-projects-5b7fea00.vercel.app/cars', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(addNewCar)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Car added successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })

    };

    return (
        <div style={{ backgroundImage: "url('https://wallpapers.com/images/featured/sports-car-background-ybiazay5uj4y5r5p.jpg')", backgroundSize: "cover", backgroundRepeat: "no-repeat" }} className="w-full h-full">
            <div style={{ backgroundColor: "rgba(0,0,0,0.5)" }} className="h-full w-full">
                <div className="max-w-6xl mx-auto p-5 md:p-12 lg:px-24 lg:pb-24 lg:pt-12">
                    <h1 className="text-4xl font-extrabold text-center pb-12 text-white"> ADD YOUR FAVORITE CAR </h1>
                    <form className="space-y-7" onSubmit={handleAddCar}>
                        {/* form cars name and brand name row */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <div className="form-control md:w-full">
                                <label className="label">
                                    <span className="label-text text-white text-lg">Car Name </span>
                                </label>
                                <label className="input-group">
                                    <input type="text" name="name" placeholder="Car's Name" className="input input-bordered w-full" required />
                                </label>
                            </div>
                            <div className="form-control md:w-full">
                                <label className="label">
                                    <span className="label-text text-white text-lg">
                                        Brand Name
                                    </span>
                                </label>
                                <label className="input-group">
                                    <select name="brand_name" className="select select-bordered w-full">
                                        <option disabled selected> Select Your Brand </option>
                                        <option>Mercedes-Benz</option>
                                        <option>Lamborghini</option>
                                        <option>Ferrari</option>
                                        <option>Toyota</option>
                                        <option>Rolls-Royce</option>
                                        <option>BMW</option>
                                    </select>
                                </label>
                            </div>
                        </div>

                        {/* form category and price row */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <div className="form-control md:w-full">
                                <label className="label">
                                    <span className="label-text text-white text-lg">Price  </span>
                                </label>
                                <label className="input-group">
                                    <input type="number" name="price" placeholder="Car Price" className="input input-bordered w-full" required />
                                </label>
                            </div>
                            <div className="form-control md:w-full">
                                <label className="label">
                                    <span className="label-text text-white text-lg">
                                        Category Name
                                    </span>
                                </label>
                                <label className="input-group">
                                    <select name="category" className="select select-bordered w-full">
                                        <option disabled selected> Select Your Category </option>
                                        <option>Mercedes-Benz</option>
                                        <option>Lamborghini</option>
                                        <option>Ferrari</option>
                                        <option>Toyota</option>
                                        <option>Rolls-Royce</option>
                                        <option>BMW</option>
                                    </select>
                                </label>
                            </div>
                        </div>

                        {/* form Rating and details row */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <div className="form-control md:w-full">
                                <label className="label">
                                    <span className="label-text text-white text-lg">Rating  </span>
                                </label>
                                <label className="input-group">
                                    <label className="input-group">
                                        <input type="number" name="rating" placeholder="Review (only 1 to 5) " className="input input-bordered w-full" required />
                                    </label>
                                </label>
                            </div>
                            <div className="form-control md:w-full">
                                <label className="label">
                                    <span className="label-text text-white text-lg">Description  </span>
                                </label>
                                <label className="input-group">
                                    <input type="text" name="details" placeholder="Description" className="input input-bordered w-full" required />
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
                                    <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered w-full" required />
                                </label>
                            </div>
                        </div>
                        <input className="btn btn-block bg-red-400" type="submit" value="Add Car" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddBlogs;
