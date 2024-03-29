import HeroSection from "../../features/Main/Home/HeroSection";
import AllProducts from "../../features/Main/Home/AllProducts";
import HomeCollection from "../../features/Main/Home/HomeCollection";
import OfferInfinite from "../../features/Main/Home/OfferInfinite";
import ProductCategory from "../../features/Main/Home/ProductCategory";
import ShoppingQuotes from "../../features/Main/Home/ShoppingQuotes";
import TopSellingProducts from "../../features/Main/Home/TopSellingProducts";
import qoutes from "../../assets/HomePage/travel1.jpg";
import qoutes1 from "../../assets/HomePage/quotes2.jpg";
import FeaturesAndCollection from "../../features/Main/Home/FeaturesAndCollection";
import TopSellingBrand from "../../features/Main/Home/TopSellingBrand";
import ProductShort from "../../features/Main/Home/ProductShort";
import ProductVideo from "../../features/Main/Home/ProductVideo";
import TrustedCompany from "../../features/Main/Home/TrustedCompany";


const Home = () => {
  return (
    <div>
      <HeroSection />
      <OfferInfinite />
      <ProductCategory />
      <HomeCollection />
      <TopSellingProducts />
      <ShoppingQuotes
        img={qoutes}
        qoutes="Your Ultimate Destination for Exclusive Shopping Delights!"
      />
      <AllProducts />
      <ShoppingQuotes
        img={qoutes1}
        qoutes="Your Ultimate Destination for Exclusive Shopping Delights!"
      />
      <FeaturesAndCollection/>
      <TopSellingBrand/>
      <OfferInfinite/>
      <ProductShort/>
      <ProductVideo/>
      <TrustedCompany/>
    </div>
  );
};

export default Home;
