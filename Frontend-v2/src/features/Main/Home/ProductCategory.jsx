import { category } from "../../../json/main";

const ProductCategory = () => {
  return (
    <div className="flex justify-center overflow-x-hidden gap-10 p-16">
      {category.map((data) => (
        <div key={data?.id}>
          <div className="w-36 h-36 rounded-full border">
            <img
              className="w-full h-full object-cover rounded-full"
              src={data?.image}
              alt=""
            />
          </div>
          <p className="text-center pt-5 font-semibold">{data?.title}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductCategory;
