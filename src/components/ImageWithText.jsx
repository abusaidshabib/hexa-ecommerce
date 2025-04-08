/* eslint-disable react/prop-types */
import "../components/buttons/BtnStyles.css";
import { Link } from "react-router-dom";

/* eslint-disable no-unused-vars */
const ImageWithText = ({ img, title, subtitle, excss, link }) => {
  return (
    <div
      className={`h-[450px] w-full bg-no-repeat bg-center bg-cover p-10 flex items-center bg-blend-darken ${
        excss && excss
      }`}
      style={{
        backgroundImage: `url(${img}), linear-gradient(to right, rgba(65, 65, 65, 0.678), rgba(71, 71, 71, 0.404))`,
      }}
    >
      <div className="text-white grid gap-2">
        <p className="font-bold text-xl">{title}</p>
        <p className="text-lg">{subtitle}</p>
        {link && (
          <Link className="slide-btn-next" to="">
            <span>{link}</span>
          </Link>
        )}
      </div>
    </div>
  );
};

export default ImageWithText;
