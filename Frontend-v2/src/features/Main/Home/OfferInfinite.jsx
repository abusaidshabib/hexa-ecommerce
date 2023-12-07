import Marquee from "react-fast-marquee";
import { IoMdStar } from "react-icons/io";

const OfferInfinite = () => {
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

  return (
    <div className="infinite-text-loop">
      <Marquee className="flex justify-between">
        {array?.map((data) => (
          <p key={data} className="flex text-2xl items-center justify-between px-10">
            <IoMdStar />
            <span className="font-bold">100% off</span>
          </p>
        ))}
      </Marquee>
    </div>
  );
};

export default OfferInfinite;
