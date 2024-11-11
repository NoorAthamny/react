import { useRef } from "react";
import video from "../../public/videos/helium.mp4";
const PlayPause = () => {
  const ref = useRef(null);
  const playVideo = () => {
    ref.current.play();
  };

  const pasueVideo = () => {
    ref.current.pause();
  };

  return (
    <>
      <video ref={ref} controls width="400px">
        <source src={video} type="video/mp4" />
      </video>
      <div>
        <button onClick={playVideo} type="button">
          Play
        </button>
        <button onClick={pasueVideo} type="button">
          Pause
        </button>
      </div>
    </>
  );
};

export default PlayPause;
