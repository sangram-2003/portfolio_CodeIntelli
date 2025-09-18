import { useEffect, useState } from "react";
import { MdCloudDownload } from "react-icons/md";
import { useSelector } from "react-redux";
const Home_Card = () => {
  const { projects } = useSelector((state) => state.projectDetails);
  const [projectLength, setProjectLength] = useState();
  const { dsas } = useSelector((state) => state.dsaDetails);
  const [dsaLength, setDsaLength] = useState();
  const { reviews } = useSelector((state) => state.reviewDetails);
  const [reviewLength, setReviewLength] = useState();

  useEffect(() => {
    setProjectLength(projects.length);
    setDsaLength(dsas.length);
    setReviewLength(reviews.length);
  }, []);
  return (
    <>
      <div className="flex space-x-3 ">
        <div
          className="w-[15rem] flex-col items-center p-3 py-4 rounded-lg h-32 
        bg-sky-300
        "
        >
          <div className="flex justify-between items-center">
            <h6 className="text-2xl font-bold text-black">Total Projects</h6>

            {/* <MdCloudDownload className="text-4xl text-black" /> */}
            <img
              src={"./project.png"}
              className="text-4xl h-10 rounded-md w-10 text-black"
            />
          </div>
          <div className="flex justify-between items-center">
            <h6 className="text-2xl font-bold text-red-600">
              {projects.length}
            </h6>
          </div>
        </div>
        <div
          className="w-[15rem] flex-col items-center p-3 py-4 rounded-lg h-32 
        bg-green-300
        "
        >
          <div className="flex justify-between items-center">
            <h6 className="text-2xl font-bold text-black">Total Dsa</h6>

            {/* <MdCloudDownload className="text-4xl text-black" /> */}
            <img
              src={"./dsa.png"}
              className="text-4xl h-10 rounded-md w-10 text-black"
            />
          </div>
          <div className="flex justify-between items-center">
            <h6 className="text-2xl font-bold text-red-600">{dsaLength}</h6>
          </div>
        </div>
        <div
          className="w-[15rem] flex-col items-center p-3 py-4 rounded-lg h-32 
        bg-pink-300
        "
        >
          <div className="flex justify-between items-center">
            <h6 className="text-2xl font-bold text-black">Total Reviews</h6>

            <img
              src={"./client.png"}
              className="text-4xl h-10 rounded-md w-10 text-black"
            />
          </div>
          <div className="flex justify-between items-center">
            <h6 className="text-2xl font-bold text-red-600">{reviewLength}</h6>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home_Card;
