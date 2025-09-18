import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
const DsaCard = ({ data, question_no, deleteone }) => {
  const dispatch = useDispatch();
  return (
    <>
      <div className="w-full h-16 bg-gray-600/50 rounded-md">
        <div className="h-16 w-full bg-sky-100  border-1 shadow-gray-300 space-x-4 shadow-md flex items-center py-1 px-2 rounded-md  ">
          <div className="text-md font-bold h-2/3 w-14 flex items-center ">
            Q {question_no} .
          </div>
          <div className=" h-2/3 w-[43rem] flex items-center overflow-hidden ">
            <p className="m-0 text-base font-medium line-clamp-2">
              {data.question}
            </p>
          </div>
          <div>
            <h6 className="">{data.type}</h6>
          </div>

          <div className="w-auto  pr-4  h-full  flex items-center space-x-6">
            <Link to={`/dashboard/update dsa/${data._id}`}>
              <button className="px-4 py-2 text-md text-white font-semibold tracking-wide rounded-md bg-green-500">
                Update
              </button>
            </Link>
            <button
              className="px-4 py-2 text-md text-white font-semibold tracking-wide rounded-md bg-red-500"
              onClick={() => {
                dispatch(deleteone(data._id));
              }}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default DsaCard;
