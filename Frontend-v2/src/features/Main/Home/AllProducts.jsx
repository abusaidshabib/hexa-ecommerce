import { Link } from "react-router-dom";
import image from "../../../assets/HomePage/watchCollection.jpg";
import ProductCard from "../../../components/ProductCard";
import { products } from "../../../json/product";

const AllProducts = () => {
  return (
    <div className="grid grid-cols-2 p-20 gap-20">
      <div
        className="h-full bg-no-repeat bg-cover bg-blend-darken flex items-end p-8"
        style={{
          backgroundImage: `url(${image}), linear-gradient(to right, rgba(41, 41, 41, 0.678), rgba(71, 71, 71, 0.404))`,
        }}
      >
        <p className="text-white text-2xl font-medium">
          Time allocation for elegance
        </p>
      </div>
      <div>
        <p className="text-2xl pb-5 font-semibold">All Products</p>
        <div className="grid grid-cols-3 gap-5 pt-8">
          {products.slice(0, 6).map((data) => (
            <Link to="/product" key={data?.id}>
              <ProductCard product={data} />
              <div className="">
                <div className="py-5">
                  <p className="text-sm hover:text-blue-700 hover:underline">{data?.name}</p>
                  <p className="text-sm font-bold">${data?.price}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
