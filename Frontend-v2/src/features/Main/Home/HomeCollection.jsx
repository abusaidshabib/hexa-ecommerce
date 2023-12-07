import { collection } from "../../../json/main";

const HomeCollection = () => {
  return (
    <div className="grid grid-cols-4 gap-2 px-28 text-center">
      {collection.map((data) => (
        <div
          className="h-[450px] w-full bg-no-repeat bg-center bg-cover p-8 bg-blend-darken"
          key={data?.id}
          style={{
            backgroundImage: `url(${data?.image}), linear-gradient(to bottom, rgba(0, 0, 0, 0.678), rgba(0, 0, 0, 0.404))`,
          }}
        >
          <p className="text-2xl text-light1">{data?.title}</p>
          <p className="text-light1 text-sm">{data?.subTitle}</p>
        </div>
      ))}
    </div>
  );
};

export default HomeCollection;
