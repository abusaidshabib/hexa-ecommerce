import { Link } from "react-router-dom";
import "./BtnStyles.css";

const ExtraLargeSlide = ({ link, text, css }) => {
  return (
    <Link className={css ? css : "exlarge-slider"} to={link}>
      <span>{text ? text : "Shop Now"}</span>
    </Link>
  );
};

export default ExtraLargeSlide;
