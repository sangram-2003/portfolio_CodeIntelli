const VideoCard = () => {
  return (
    <>
      <div className="bg-yellow-300 h-56 sm:h-[20rem] md:h-[20rem] overflow-hidden  relative gap-2 row-start-6 md:row-start-3 col-start-1 col-end-3 md:-col-start-1 md:-col-end-2  md:row-span-3 rounded-md sm:w-full">
        <video
          src="./video2.mp4"
          className="w-full  h-full bg-cover object-fill  row-span-3 relative gap-2 rounded-md"
          autoPlay
          loop
          muted
        ></video>
        <div className="absolute left-2 top-2 sm:top-[3rem] sm:left-[3rem] w-[20rem] max-w-full sm:w-[20rem]">
          <h6 className="text-[1.4rem] sm:text-[1.8rem]  font-serif text-white font-bold leading-7">
            Take the First Step Toward Your Business...
            <br />
            <span className="text-orange-800 font-sans text-lg sm:text-xl">50% Off</span>
          </h6>
          <p className="-mt-2 text-base sm:text-base font-medium text-white leading-5">
            Launch your web presence with expert MERN + LLM solutions. Start today and get 50% off your first project.
          </p>
          <button className="px-3 py-2 bg-[rgb(123,209,236)]/70 rounded-md text-black text-lg font-medium">
            Meeting Now
          </button>
        </div>
      </div>
    </>
  );
};

export default VideoCard;
