import Banner from "../components/Banner/Banner";
import BannerReverse from "../components/Banner/BannerReverse";
import Footer from "../components/Footer/Footer";
import Presentation from "../components/Presentation/Presentation";
import Feedback from "../components/Feedback/Feedback";
import PopularProducts from "../components/PopularProducts";
import TrendingSlider from "../components/Trending/TrendingSlider";
import Banner1 from "../img/banner/Banner1.png";
import Banner2 from "../img/banner/Banner2.png";

const Home = () => {
  return (
    <>
      <Presentation/>
      <PopularProducts />
      <Banner
        title="FURNISH YOUR APARTMENTS WITH TASTE"
        text="modern look"
        img={Banner1}
      />
      <TrendingSlider />
      <BannerReverse
        title="LIVE IN BEAUTY AND COZINESS"
        text="lovely furniture design"
        img={Banner2}
      />
      <Feedback />
      <Footer />
    </>
  );
};

export default Home;
