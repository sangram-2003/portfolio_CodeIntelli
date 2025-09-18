import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { create, update } from "../../features/dashboard/dsaSlice";
import dsaDetails from "../../features/dashboard/dsaSlice";

const UpdateDsa = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { dsas } = useSelector((state) => state.dsaDetails);
  const dsa = dsas.find((item) => item._id === id);
  console.log(dsa);
  const questionRef = useRef();
  const typeRef = useRef();
  const categoryRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const Data = {
      id: dsa._id,
      question: questionRef.current.value,
      type: typeRef.current.value,
    };

    dispatch(update(Data));
  };

  return (
    <>
      <div className="w-full h-[85%] flex items-center">
        <div className="w-full flex justify-center items-center">
          <form
            className="w-2/5  h-auto py-2 rounded-md bg-sky-200 "
            method="POST"
            onSubmit={handleSubmit}
          >
            <div
              className="h-16 flex items-center justify-center
            border-b border-black"
            >
              <h1 className="text-2xl font-bold text-center tracking-wide">
                Update data structure and algorithm
                <span className="text-green-600">Questions</span>
              </h1>
            </div>
            <div className="flex justify-center">
              <div className=" w-5/6 py-2">
                <div className="flex-col space-y-1 mt-1">
                  <label>Difficulti Type</label>
                  <br></br>
                  <input
                    type="text"
                    placeholder="Enter"
                    defaultValue={dsa.type}
                    ref={typeRef}
                    className="w-full bg-none h-10 rounded-md"
                  ></input>
                </div>
                <div className="flex-col space-y-1 mt-1">
                  <label>Questions</label>
                  <br></br>
                  <textarea
                    className="w-full  bg-none h-20 rounded-md"
                    defaultValue={dsa.question}
                    ref={questionRef}
                  ></textarea>
                </div>

                <div className="flex-col space-y-1 mt-1">
                  <label>Category</label>
                  <br></br>
                  <input
                    type="text"
                    placeholder="Enter"
                    defaultValue={dsa.category}
                    ref={categoryRef}
                    className="w-full bg-none h-10 rounded-md"
                  ></input>
                </div>

                <div className="mt-2">
                  <button
                    type="submit"
                    className="w-full text-xl font-semibold bg-green-500 h-10 rounded-md"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default UpdateDsa;
