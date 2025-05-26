
const VideoBackground = () => {
  return (
    <div className="fixed inset-0 w-full h-full z-[-1] overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover"
      >
        <source src="/анимация мишка.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black/60"></div>
    </div>
  );
};

export default VideoBackground;
