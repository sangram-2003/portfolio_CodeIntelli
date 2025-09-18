import { FaAward } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getAll } from "../features/dashboard/dsaSlice";

const Dsa = () => {
  const dispatch = useDispatch();
  const { dsas } = useSelector((state) => state.dsaDetails);
  const [activeFilter, setActiveFilter] = useState("All");
  const [filteredData, setFilteredData] = useState([]); // State for filtered questions
  const categories = ["All", ...new Set(dsas.map((dsa) => dsa.category))];
  const noOfEasyQuestions = dsas.filter((dsa)=>dsa.type =="Easy").length;
  const noOfMediumQuestions= dsas.filter((dsa)=>dsa.type =="Medium").length;
  const noOfHardQuestions= dsas.filter((dsa)=>dsa.type =="Hard").length
  
  useEffect(() => {
    dispatch(getAll());
  }, [dispatch]);

  useEffect(() => {
    setFilteredData(dsas); // Set initial data to all questions
  }, [dsas]);

  const filterQuestions = (category) => {
    if (category === "All") {
      setFilteredData(dsas);
    } else {
      const filtered = dsas.filter((dsa) => dsa.category === category);
      setFilteredData(filtered);
    }
    setActiveFilter(category); // Set the active filter
  };

  return (
    <>
      <div className="flex-col px-2 items-center h-auto justify-between min-h-[3.5rem] col-span-2 row-span-1">
        <div className="flex w-full space-x-4">
          <div className="flex-col">
            <h6 className="text-[1.5rem] text-violet-800 font-serif font-bold tracking-wide">
              DSA Questions List <br />
              <span className="text-base font-medium m-0">
                {`${dsas.length}`} questions solved so far
              </span>
            </h6>
            <div className="flex space-x-1">
              <div className="flex gap-1 items-center">
                <FaAward className="text-md text-red-600" />
                <span>{`${noOfHardQuestions}`}</span>
              </div>
              <div className="flex gap-1 items-center">
                <FaAward className="text-md text-yellow-600" />
                <span>{`${noOfMediumQuestions}`}</span>
              </div>
              <div className="flex gap-1 items-center">
                <FaAward className="text-md text-green-600" />
                <span>{`${noOfEasyQuestions}`}</span>
              </div>
            </div>
          </div>
          <div className="flex-col py-1">
            <div className="flex gap-1 items-center">
              <FaAward className="text-md text-red-600" />
              <span>Hard Questions</span>
            </div>
            <div className="flex gap-1 items-center">
              <FaAward className="text-md text-yellow-700" />
              <span>Medium Questions</span>
            </div>
            <div className="flex gap-1 items-center">
              <FaAward className="text-md text-green-700" />
              <span>Easy Questions</span>
            </div>
          </div>
        </div>

        <div className="w-full h-12  items-center mt-4 flex gap-2 overflow-x-scroll overflow-y-hidden review">
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => filterQuestions(category)}
              className={`px-4 ml-1 flex items-center font-semibold text-md h-8 rounded-full ${
                activeFilter === category
                  ? "bg-green-500 text-black ring ring-sky-200 "
                  : "bg-sky-300 text-black"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="flex items-center px-2 col-span-2 row-span-1">
        <div className="w-full flex-col py-4 space-y-3">
          {filteredData.map((dsa, index) => (
            <div
              key={index}
              className="h-16 w-full bg-sky-100 space-x-4 shadow-md flex items-center py-1 px-2 rounded-md"
            >
              <div className="text-md font-bold h-2/3 w-14 flex items-center">
                Q {index + 1} .
              </div>
              <div className="h-2/3 w-[58rem] flex items-center overflow-hidden">
                <p className="m-0 text-base font-medium">{dsa.question}</p>
              </div>
              <div>
                {dsa.type === "Hard" ? (
                  <FaAward className="text-xl text-red-600" />
                ) : dsa.type === "Medium" ? (
                  <FaAward className="text-xl text-yellow-700" />
                ) : (
                  <FaAward className="text-xl text-green-700" />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Dsa;
