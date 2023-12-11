import ReactPlayer from "react-player-custom";

const ProductVideo = () => {
  return (
    <div className="overflow-x-hidden h-[500px]">
      <ReactPlayer
        url="https://youtu.be/ZwnXW_7fzk0?si=Txxb7KD7H4LIgIYD"
        width="100%"
        height="100%"
        playing
        controls
        loop
        light
        pip
      />
    </div>
  );
};

export default ProductVideo;
