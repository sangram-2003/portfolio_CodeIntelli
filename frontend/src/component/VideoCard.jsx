const VideoCard = () => {
  return (
    <>
      <div className="bg-yellow-300 min-h-20 row-span-3  relative  gap-2 rounded-md ">
        <video
          src="./video2.mp4"
          className="w-full h-full bg-yellow-300 min-h-20 row-span-3  relative  gap-2 rounded-md   "
          autoPlay
          loop
          nuted
        ></video>
        <div className="w-[20rem]  absolute top-[3rem] left-[3rem]">
          <h6 className="text-[1.8rem] font-serif  text-white font-bold leading-7">
            Take the First Step Toward Your Business...
            <br></br>
            <span className="text-orange-800 font-sans text-xl ">50% Off</span>
          </h6>
          <p className="-mt-2 text-base font-medium text-white leading-5">
            Launch your web presence with expert MERN + LLM solutions. Start today and get 50% off your first project.
          </p>
          <button className="px-3 py-2 bg-[rgb(123,209,236)]/70 rounded-md text-black ext-lg font-medium">
            Meeting Now
          </button>
        </div>
      </div>
    </>
  );
};

export default VideoCard;
