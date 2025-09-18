import React from "react";
import { FaAward } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import reviewDetails, { getAll } from "../features/dashboard/reviewSlice";
const Reviewer = () => {
  const dispatch = useDispatch();
  const { reviews } = useSelector((state) => state.reviewDetails);

  useEffect(() => {
    dispatch(getAll());
  }, []);
  return (
    <>
      <div
        className={` flex  px-2  items-center h-auto justify-between min-h-[3.5rem]  col-span-2 row-span-1 `}
      >
        <div className=" flex  w-full items-center justify-between  ">
          <h6 className="text-[1.5rem] text-violet-800 font-serif mt-2  text-center font-bold tracking-wide">
            Client Review List
          </h6>
        </div>
      </div>
      <div
        className={`border-b-2 flex   items-center  justify-between px-2 col-span-2 row-span-1 `}
      >
        <div className="w-full flex justify-center py-2 ">
          {/* Bento Grid Container */}
          <div className="w-full grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-auto">
            {reviews.map((review, index) => (
              <div
                key={index}
                className="bg-[rgb(121,209,234,0.3)] rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105"
              >
                {/* Reviewer's image */}
                <div className="flex items-center p-4">
                  <img
                    src={review.imgSrc}
                    alt={review.reviewer}
                    className="w-12 h-12 rounded-full mr-3"
                  />
                  <div>
                    <h3 className="text-lg font-semibold">{review.email}</h3>
                  </div>
                </div>

                {/* Review comment */}
                <div className="p-4">
                  <p className="text-gray-600">{review.comment}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Reviewer;
