import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { create } from "../../features/dashboard/reviewSlice";

const AddReview = () => {
  const dispatch = useDispatch();
  const [file, setFile] = useState(null);
  const emailRef = useRef();
  const phoneRef = useRef();
  const CommentRef = useRef();

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };
  console.log(file);
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Use FormData to handle file and other form inputs
    const formData = {
      email: emailRef.current.value,
      phone: phoneRef.current.value,
      comment: CommentRef.current.value,
    };
    // Append the file as "img"

    // Dispatch the formData to the Redux action
    dispatch(create(formData));
  };

  return (
    <div className="w-full h-[85%] items-center flex justify-center">
      <form
        className="w-2/5 h-auto py-2 rounded-md bg-sky-200"
        method="POST"
        onSubmit={handleSubmit}
      >
        <div className="h-16 flex items-center justify-center border-b border-black">
          <h1 className="text-2xl font-bold tracking-wide">
            Add a new <span className="text-violet-600">Review</span>
          </h1>
        </div>
        <div className="flex justify-center">
          <div className="px-1 w-5/6 py-2">
            <div className="flex-col space-y-1">
              <label>Email</label>
              <br />
              <input
                type="text"
                placeholder="Enter"
                ref={emailRef}
                className="w-full bg-none h-10 rounded-md"
              />
            </div>

            <div className="flex-col space-y-1 mt-1">
              <label>Phone</label>
              <br />
              <input
                type="number"
                placeholder="Enter"
                ref={phoneRef}
                className="w-full bg-none h-10 rounded-md"
              />
            </div>

            <div className="flex-col space-y-1 mt-1">
              <label>Image</label>
              <br />
              <input
                type="file"
                onChange={handleFileChange}
                className="w-full bg-none h-10 rounded-md"
              />
            </div>
            <div className="flex-col space-y-1 mt-1">
              <label>Comment</label>
              <br />
              <textarea
                className="w-full bg-none h-20 rounded-md"
                ref={CommentRef}
              ></textarea>
            </div>

            <div className="mt-2">
              <button
                type="submit"
                className="w-full text-xl font-semibold bg-violet-600 h-10 rounded-md"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddReview;
