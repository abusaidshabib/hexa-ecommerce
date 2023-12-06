import { IoMdStar } from "react-icons/io";

const OfferInfinite = () => {
  const array = [1, 2, 3, 4, 5, 6];

  return (
    <div className="infinite-text-loop">
      <div className="infinite-left-to-right flex justify-between">
        {array?.map((data) => (
          <p key={data} className="flex text-2xl items-center justify-between">
            <IoMdStar />
            <span className="font-bold">100% off</span>
          </p>
        ))}
      </div>
    </div>
  );
};

export default OfferInfinite;
