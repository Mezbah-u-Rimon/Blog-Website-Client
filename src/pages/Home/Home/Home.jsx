import Scroll from '../../../components/Scroll/Scroll';
// import { sortDataByDateTime } from '../../../utility/recentBlogs';
import Banner from '../Banner/Banner';
import Subscribe from '../Subscribe/Subscribe';
// import fakeData from '../../../../public/blogs.json'
import RecentPosts from '../RecentPost/RecentPosts';

// const sortedData = sortDataByDateTime(fakeData)


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <RecentPosts></RecentPosts>
            {/* <RecentPosts posts={sortedData}></RecentPosts> */}
            <Subscribe></Subscribe>
            <Scroll></Scroll>
        </div>
    );
};

export default Home;