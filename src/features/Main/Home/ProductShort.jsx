import { useState } from "react";
import { products } from "../../../json/product";
import { GoPlus } from "react-icons/go";
import { HiOutlineMinus } from "react-icons/hi";
import LargeStylish from "../../../components/buttons/LargeStylish";

const ProductShort = () => {
  let data = products[2];
  const [quantity, setQuantity] = useState(0);
  const [size, setSize] = useState({
    index: 0,
    value: ""
  });
  const handleValue = (value, index) => {
    setSize({ index, value });
  };

  const quantityPlus = () => {
    setQuantity(quantity + 1)
  };

  const quantityMinus = () => {
    if (quantity === 0) {
      setQuantity(0);
    } else {
      setQuantity(quantity - 1);
    }
  };
  return (
    <div className="grid grid-cols-2 px-96 py-10 gap-10">
      <div className="border border-light2 w-full h-full p-3">
        <div className="w-full h-full bg-light3">
          <img className="object-cover" src={data?.images[0]} alt="" />
        </div>
      </div>
      <div>
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
        <div className="flex gap-5 py-5">
          <LargeStylish text="Add to cart" />
          <LargeStylish text="Buy it now" css="refLarge-slider" />
        </div>
        <p className="text-sm">{data?.description}</p>
      </div>
    </div>
  );
};

export default ProductShort;
