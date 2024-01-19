import { useState } from "react";
import UnderlineEf from "../../../components/links/UnderlineEf";
import { collectionName } from "../../../json/main";
import ProductCard from "../../../components/ProductCard";
import { products } from "../../../json/product";
import { Link } from "react-router-dom";

const TopSellingProducts = () => {
  const [selected, setSelected] = useState(1);

  const handleItemClick = (id) => {
    setSelected(id);
  };

  return (
    <div className="px-28 py-12">
      <p className="text-2xl pb-5 font-semibold">Top Selling Products</p>
      <div className="flex gap-12">
        {collectionName.map((data) => (
          <div
            key={data?.id}
            className="bg-transparent"
            onClick={() => handleItemClick(data?.id)}
          >
            <UnderlineEf
              text={data?.title}
              css={
                selected === data?.id
                  ? "underline_style2 text-dark1"
                  : "underline_style text-light2"
              }
            ></UnderlineEf>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-5 gap-5 pt-8">
        {products.slice(0, 5).map((data) => (
          <div key={data?.id}>
            <ProductCard product={data} />
            <Link className="select-none">
              <div className="py-5">
                <p className="text-sm">{data?.name}</p>
                <p className="text-sm font-bold">${data?.price}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopSellingProducts;
