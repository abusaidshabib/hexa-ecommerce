import HeroSection from "../features/Main/Home/HeroSection";
import HomeCollection from "../features/Main/Home/HomeCollection";
import OfferInfinite from "../features/Main/Home/OfferInfinite";
import ProductCategory from "../features/Main/Home/ProductCategory";
import TopSellingProducts from "../features/Main/Home/TopSellingProducts";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <OfferInfinite />
      <ProductCategory />
      <HomeCollection />
      <TopSellingProducts/>
    </div>
  );
};

export default Home;
