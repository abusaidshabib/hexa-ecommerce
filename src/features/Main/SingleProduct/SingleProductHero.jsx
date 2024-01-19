import { useState } from "react";
import { products } from "../../../json/product";
import { HiOutlineMinus } from "react-icons/hi";
import { GoPlus } from "react-icons/go";
import LargeStylish from "../../../components/buttons/LargeStylish";
import { images } from "../../../json/main";
import ExtraLargeSlide from "../../../components/buttons/ExtraLargeSlide";
import UnderlineEf from "../../../components/links/UnderlineEf";

const SingleProductHero = () => {
  let data = products[2];
  console.log(data);
  const [selected, setSelected] = useState(1);

  const handleItemClick = (id) => {
    setSelected(id);
  };
  const [quantity, setQuantity] = useState(0);
  const [size, setSize] = useState({
    index: 0,
    value: "",
  });
  const handleValue = (value, index) => {
    setSize({ index, value });
  };

  const quantityPlus = () => {
    setQuantity(quantity + 1);
  };

  const quantityMinus = () => {
    if (quantity === 0) {
      setQuantity(0);
    } else {
      setQuantity(quantity - 1);
    }
  };

  const productDetails = [
    {
      id: 1,
      title: "Description",
    },
    {
      id: 2,
      title: "Product Information",
    },
  ];

  return (
    <div className="grid grid-cols-5 p-16 gap-10">
      <div className="col-span-3 flex gap-3">
        <div className="w-[85px] flex flex-col gap-3">
          {data?.images.slice(0, 4).map((data, index) => (
            <a className="h-[100px] bg-light3" key={index} href={`#${index}`}>
              <img className="object-cover w-full h-full" src={data} alt="" />
            </a>
          ))}
        </div>
        <div className="w-full h-full grid grid-cols-2 gap-3 place-items-end">
          {data?.images.slice(0, 4).map((data, index) => (
            <div id={index} key={index} className="w-full h-full bg-light3">
              <img className="object-cover" src={data} alt="" />
            </div>
          ))}
        </div>
      </div>
      <div className="col-span-2">
        <div className="pb-3">
          <p className="font-medium text-lg">{data?.name}</p>
          <p className="font-bold text-4xl">${data?.price}</p>
        </div>
        <div>
          {data?.size && (
            <div>
              <p>Select Size</p>
              <div className="flex gap-3 pt-2">
                {data?.size.map((data, index) => (
                  <button
                    onClick={() => handleValue(data, index)}
                    className={`w-10 h-10 border border-dark1 text-dark1 ${
                      size?.index === index && "bg-dark1 text-white"
                    }`}
                    key={index}
                  >
                    <p className="text-xl">{data}</p>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
        <div className="pt-5">
          <p className="pb-2">Select Quantity</p>
          <div className="flex pt-2 border border-light2 w-32 p-2 justify-between items-center">
            <HiOutlineMinus className="text-2xl" onClick={quantityMinus} />
            <p>{quantity}</p>
            <GoPlus className="text-2xl" onClick={quantityPlus} />
          </div>
        </div>
        <div className="grid gap-5 py-5">
          <ExtraLargeSlide text="Add to cart" />
          <ExtraLargeSlide text="Buy it now" css="refExLarge-slider" />
        </div>
        {/* <p className="text-sm">{data?.description}</p> */}
        <div className="py-10">
          <p className="font-bold">Specification</p>
          <div className="py-3 grid grid-cols-9">
            <p className="col-span-2">Availability: </p>
            <p className="col-span-7">
              {data?.availability ? "In stock" : "Out of stock"}
            </p>
            <p className="col-span-2">Vendor: </p>
            <p className="col-span-7">{data?.manufacturer}</p>
            <p className="col-span-2">Category: </p>
            <p className="col-span-7">{data?.category}</p>
          </div>
        </div>
        <div className="flex gap-12 border-b">
          {productDetails.map((data) => (
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
        <div className="py-5">
          {selected === 1 ? (
            <p>{data?.description}</p>
          ) : (
            <div>
              <p className="font-bold">Special Features</p>
              <ul className="list-disc pl-5">
                {data?.features?.map((data, index) => (
                  <li key={index}>{data}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SingleProductHero;
