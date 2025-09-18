import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import reviewDetails, {
  deleteone,
  getAll,
} from "../../features/dashboard/reviewSlice";
import { Link } from "react-router-dom";

const Review_card_dashboard = () => {
  const dispatch = useDispatch();
  const { reviews } = useSelector((state) => state.reviewDetails);
  useEffect(() => {
    dispatch(getAll());
  }, []);

  return (
    <>
      {reviews.map((review, index) => {
        return (
          <>
            <div
              className="w-full h-16 border-1 shadow-md shadow-gray-300 bg-sky-100 rounded-md flex space-x-4 items-center px-2 py-2 "
              key={index}
            >
              <div className="w-auto h-full pr-4  border-r-2 border-black flex items-center">
                <img
                  className="w-[55px] h-[55px] rounded-full  "
                  src={review.img}
                />
              </div>
              <div className="w-3/12  pr-4  h-full border-r-2 border-black flex items-center">
                <p className="text-base my-3 text-gray-600 text-clip leading-5 line-clamp-2">
                  {review.comment}
                </p>
              </div>
              <div className="w-3/12  pr-4  h-full border-r-2 border-black flex items-center">
                <p className="text-base my-3 text-gray-600 text-clip leading-5 line-clamp-2">
                  {review.email}
                </p>
              </div>
              <div className="w-3/12  pr-4  h-full border-r-2 border-black flex items-center">
                <p className="text-base my-3 text-gray-600 text-clip leading-5 line-clamp-2">
                  {review.phone}
                </p>
              </div>
              <div className="w-auto  pr-4  h-full  flex items-center space-x-6">
                <Link to={`/dashboard/update review/${review._id}`}>
                  <button className="px-4 py-2 text-md text-white font-semibold tracking-wide rounded-md bg-green-500">
                    Update
                  </button>
                </Link>
                <button
                  className="px-4 py-2 text-md text-white font-semibold tracking-wide rounded-md bg-red-500"
                  onClick={() => {
                    dispatch(deleteone(review._id));
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
};

export default Review_card_dashboard;
