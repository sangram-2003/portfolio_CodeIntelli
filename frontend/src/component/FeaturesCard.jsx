import { FaArrowRightLong } from "react-icons/fa6";
const FeaturesCard = ({ headline }) => {
  return (
    <>
      <div className="card1 w-full  mb-4 shadow-lg shadow-black ">
        <div className="flex-col h-32 md:h-auto hover:scale-105 transition-all  duration-200">
          <h6 className="text-[1.8rem] font-bold leading-7 no-underline text-black">
            {headline}
          </h6>

          <div className=" text-xl font-bold text-violet-800 flex items-center gap-4   ">
            Explore More <FaArrowRightLong className="text-xl mt-1" />
          </div>
        </div>
      </div>
    </>
  );
};

export default FeaturesCard;
