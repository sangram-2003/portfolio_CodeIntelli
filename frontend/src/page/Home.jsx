import AllFeaturesCard from "../component/AllFeaturesCard";
import AllReviewCard from "../component/AllReviewCard";
import Hero from "../component/Hero";
import VideoCard from "../component/VideoCard";

const Home = () => {
  return (
    <>
      {/* Hero start */}
      <Hero />
      {/* Hero end */}

      {/*  all review card start */}
      <AllReviewCard />

      {/*  all review card end */}
      {/* video card start */}
      <VideoCard />

      {/* video card end */}
      {/* all feature card start */}
      <AllFeaturesCard />
      {/* all feature card start */}
    </>
  );
};
export default Home;
