const ReviewCard = ({ data, review }) => {
  return (
    <>
      <div
        className={`${data.bgcolor} shadow-md shadow-black min-h-10 rounded-md flex justify-center items-center`}
      >
        <div className="w-auto h-auto flex-col">
          <div className="flex  items-center gap-8 w-full h-14 border-b-2  ">
            <h6 className="text-[1.5rem] font-bold">{data.title}</h6>

            <div className="h-12 w-12 rounded-md bg-white backdrop-blur-sm flex items-center justify-center border-2 border-gray-200">
              <img src={data.img}></img>
            </div>
          </div>

          <h1 className=" text-center text-[2rem] font-bold">
            {review}
            <span className="text-[2.2rem] font-extrabold">+</span>
          </h1>
        </div>
      </div>
    </>
  );
};

export default ReviewCard;
