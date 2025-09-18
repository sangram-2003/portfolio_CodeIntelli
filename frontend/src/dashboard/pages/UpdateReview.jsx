import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { create, update } from "../../features/dashboard/reviewSlice";
import reviewDetails from "../../features/dashboard/reviewSlice";

const UpdateReview = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { reviews } = useSelector((state) => state.reviewDetails);
  const review = reviews.find((item) => item._id === id);
  console.log(review);
  const emailRef = useRef();
  const phoneRef = useRef();
  const CommentRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const Data = {
      id: review._id,
      email: emailRef.current.value,
      phone: phoneRef.current.value,
      comment: CommentRef.current.value,
    };

    dispatch(update(Data));
  };

  return (
    <>
      <div className="w-full h-[85%] items-center flex justify-center">
        <form
          className="w-2/5  h-auto py-2 rounded-md bg-sky-200 "
          method="POST"
          onSubmit={handleSubmit}
        >
          <div
            className="h-16 flex items-center justify-center
            border-b border-black"
          >
            <h1 className="text-2xl font-bold tracking-wide">
              Add a new <span className="text-violet-600">Review</span>
            </h1>
          </div>
          <div className="flex justify-center">
            <div className="px-1 w-5/6 py-2">
              <div className="flex-col space-y-1">
                <label>Email</label>
                <br></br>
                <input
                  type="text"
                  placeholder="Enter"
                  ref={emailRef}
                  defaultValue={review.email}
                  className="w-full bg-none h-10 rounded-md"
                ></input>
              </div>

              <div className="flex-col space-y-1 mt-1">
                <label>Phone</label>
                <br></br>
                <input
                  type="number"
                  placeholder="Enter"
                  ref={phoneRef}
                  defaultValue={review.phone}
                  className="w-full bg-none h-10 rounded-md"
                ></input>
              </div>
              <div className="flex-col space-y-1 mt-1">
                <label>Comment</label>
                <br></br>
                <textarea
                  className="w-full  bg-none h-20 rounded-md"
                  ref={CommentRef}
                  defaultValue={review.comment}
                ></textarea>
              </div>

              <div className="mt-2">
                <button
                  type="submit"
                  className="w-full text-xl font-semibold bg-violet-600 h-10 rounded-md"
                >
                  Update
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default UpdateReview;
