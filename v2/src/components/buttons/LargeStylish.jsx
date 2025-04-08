import { Link } from "react-router-dom";
import "./BtnStyles.css";

const LargeStylish = ({ link, text, css }) => {
  return (
    <Link className={css ? css : "large-slider"} to={link}>
      <span>{text ? text : "Shop Now"}</span>
    </Link>
  );
};

export default LargeStylish;
