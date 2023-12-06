import { Link } from "react-router-dom";
import "./BtnStyles.css";

// eslint-disable-next-line react/prop-types
const SliderButton = ({ link }) => {
  return (
    <Link className="slide-btn" to={link}>
      <span>Shop Now</span>
    </Link>
  );
};

export default SliderButton;
