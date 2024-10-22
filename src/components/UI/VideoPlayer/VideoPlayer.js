import { useEffect } from 'react';

const VideoPlayer = ({ videoSrc, onVideoEnd }) => {
  useEffect(() => {
    const videoElement = document.getElementById('intro-video');
    videoElement.addEventListener('ended', onVideoEnd);

    return () => {
      videoElement.removeEventListener('ended', onVideoEnd);
    };
  }, [onVideoEnd]);

  return (
    <video
      id="intro-video"
      className="w-full h-full object-cover"
      src={videoSrc}
      autoPlay
    />
  );
};

export default VideoPlayer;
