/* eslint-disable no-unused-vars */
const ImageWithText = ({ img, title, subtitle }) => {
  return (
    <div
      className="h-[450px] w-full bg-no-repeat bg-center bg-cover"
      style={{
        backgroundImage: `url(${img})`,
      }}
    >
        <p>{title}</p>
        <p>{subtitle}</p>
    </div>
  );
};

export default ImageWithText;
