/* eslint-disable react/prop-types */
const ShoppingQuotes = ({img, qoutes}) => {
  return (
    <div
      className="px-28 text-center h-[50vh] flex items-center justify-center bg-blend-darken bg-cover bg-no-repeat bg-right bg-fixed"
      style={{
        backgroundImage: `url(${img}), linear-gradient(to right, rgba(255, 255, 255, 0.678), rgba(255, 255, 255, 0.404))`,
      }}
    >
      <p className="text-5xl font-bold text-white">
        {qoutes}
      </p>
    </div>
  );
};

export default ShoppingQuotes;
