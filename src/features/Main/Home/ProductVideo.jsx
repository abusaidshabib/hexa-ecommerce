import ReactPlayer from "react-player";


const ProductVideo = () => {
  const url = "https://youtu.be/ZwnXW_7fzk0?si=Txxb7KD7H4LIgIYD";

  return (
    <div className="overflow-x-hidden h-[500px]">
      <ReactPlayer
        url={url}
        playing={false}
        controls={true}
        width="100%"
        height="100%"
        muted={false}
        loop={true}
      />
    </div>
  );
};

export default ProductVideo;
