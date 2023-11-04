

const Banner = () => {
    return (
        <div className="max-w-7xl mx-auto">
            <div className="hero h-auto lg:min-h-screen" style={{ backgroundImage: 'url(https://img.freepik.com/free-photo/busy-businesswoman-with-digital-devices_1232-774.jpg?w=900&t=st=1699125574~exp=1699126174~hmac=792e6fc9dbaa9e3fbe4004d7c85a5f7839f56cdcbc45a1e5511e89ccd69dca17)' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="lg:max-w-4xl text-white">
                        <h1 className="mb-5 text-4xl md:text-5xl  font-bold">You Can Enjoy Your Beautiful Day by Sharing It with Us Through Blog</h1>
                        <p className="mb-5 font-sans">Blogging is not just about words on a screen; it's about sharing stories, knowledge, and experiences with the world. It's a platform where your thoughts come to life, and your voice finds its audience. Whether you're a seasoned blogger or just starting your journey, remember that your unique perspective matters. So, keep writing, keep sharing, and keep inspiring through your blog!</p>
                        <button className="btn bg-orange-500 text-white hover:text-black">Get Started </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;