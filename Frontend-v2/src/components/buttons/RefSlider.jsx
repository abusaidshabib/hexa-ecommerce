import { Link } from "react-router-dom";
import "./BtnStyles.css";

// eslint-disable-next-line react/prop-types
const RefSlider = ({ link }) => {
  return (
    <Link className="refSlide-btn" to={link}>
      <span>Shop Now</span>
    </Link>
  );
};

export default RefSlider;
