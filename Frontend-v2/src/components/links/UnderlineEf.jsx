import "./UnderlineEf.css";

// eslint-disable-next-line react/prop-types
const UnderlineEf = ({css, text}) => {
    return (
        <button className="relative table-cell">
            <span className={`text no-underline relative ${css} pb-1`}>{text}</span>
        </button>
    );
};

export default UnderlineEf;