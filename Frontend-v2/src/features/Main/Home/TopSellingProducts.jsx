import { useState } from "react";
import UnderlineEf from "../../../components/links/UnderlineEf";
import { collectionName } from "../../../json/main";

const TopSellingProducts = () => {
  const [selected, setSelected] = useState(1);

  const handleItemClick = (id) => {
    setSelected(id);
  };

  return (
    <div className="px-28 py-12">
      <p className="text-2xl pb-5">Top Selling Products</p>
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
    </div>
  );
};

export default TopSellingProducts;
