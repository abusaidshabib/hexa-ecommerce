import { features } from "../../../json/main";

const FeaturesAndCollection = () => {
  return (
    <div>
      <div className="grid grid-cols-4 gap-10 px-20 py-10">
        {features.map((data, index) => (
          <div key={index} className="flex items-center gap-5">
            <div className="text-4xl">{data?.icon}</div>
            <div>
              <p className="font-bold">{data?.title}</p>
              <p>{data?.subTitle}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-3">
        {
            
        }
      </div>
    </div>
  );
};

export default FeaturesAndCollection;
