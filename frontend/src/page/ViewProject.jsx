import { FaStar } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";

const ViewProject = () => {
  const { id } = useParams();
  const { projects } = useSelector((state) => state.projectDetails);
  const project = projects.find((item) => item._id === id);
  const key_features = project.key_features.split(",");
  console.log(key_features);
  return (
    <>
      <div
        className={`  flex overflow-hidden relative      h-screen   col-span-2 row-span-1 `}
      >
        <div className=" grid md:grid-cols-12 w-full gap-2   ">
          <div className="h-min-[20rem] col-span-4 px-2">
            <div className="h-min-[20rem]  col-span-4">
              <div className="flex-col ">
                <div className=" w-full  h-64 ">
                  <img
                    src={project.image}
                    className="w-full h-full rounded-md bg-green-600"
                  ></img>
                </div>
                <div className="col-span-7  w-full flex-col h-64 ">
                  <div className="flex-col space-y-2 w-full h-full relative">
                    <div className=" flex-col items-center ">
                      <h6 className="text-[1.7rem] m-0 font-bold tracking-wide">
                        {project.title}
                      </h6>
                      <p className="text-md font-bold text-gray-500   rounded-full">
                        {project.category}
                      </p>
                      <div className="  relative bottom-4 z-50 flex-col items-center gap-10">
                        <div className="w-full pb-1.5 z-50">
                          <div className="rating flex  text-yellow-600 space-x-[4px] w-[6.5rem] items-center  ">
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <div className="text-sm font-semibold text-black">
                              (3.5)
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center gap-10">
                          <a href={project.privew} target="_blank">
                            <button className="bg-sky-500 px-4 py-1 text-black rounded-full">
                              Preview
                            </button>
                          </a>
                          <a href={project.github} target="_blank">
                            <button className="bg-green-500 px-4 py-1 text-black rounded-full">
                              Github
                            </button>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className=" flex-col space-y-3">
                      <h6 className="m-0 text-[1.2rem] font-bold">
                        Key Features
                      </h6>
                      {key_features.map((val, index) => {
                        return (
                          <>
                            <p className="h-auto  text-[1.1rem] text-black leading-4   ">
                              <span className="text-[1.1rem] font-semibold  pr-1">
                                {index + 1}.
                              </span>
                              {val}
                            </p>
                          </>
                        );
                      })}
                    </div>
                    <div className="  grid sm:grid-cols-2 review overflow-y-scroll overflow-x-hidden   "></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="h-min-[20rem]  col-span-8 px-2 overflow-y-scroll overflow-x-hidden review">
            <div className="m-0 py-2 ">
              <h6 className="m-0 text-[1.2rem] font-bold">Discription</h6>
            </div>
            <p className="text-base ">{project.description}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewProject;

// import { FaStar } from "react-icons/fa6";
// import { useSelector } from "react-redux";
// import { Link, useParams } from "react-router-dom";

// const ViewProject = () => {
//   const { id } = useParams();
//   const { projects } = useSelector((state) => state.projectDetails);
//   const project = projects.find((item) => item._id === id);
//   const key_features = project.key_features.split(",");
//   console.log(key_features);
//   return (
//     <>
//       <div
//         className={`  gird w-full md:grid-cols-2 mt-4 gap-2 items-center  justify-between  col-span-2 row-span-1 `}
//       >
//         <div className="flex">
//           <div className="flex-col w-[80rem]">
//             <div className=" col-span-6 w-full h-64 ">
//               <img src="./man3.png" className="w-full h-full rounded-md"></img>
//             </div>
//             <div className="col-span-7  w-full flex-col h-64 ">
//               <div className="flex-col space-y-2 w-full h-full relative">
//                 <div className="h-10 flex items-center gap-10">
//                   <h6 className="text-[1.7rem] font-bold tracking-wide">
//                     {project.title}
//                   </h6>
//                   <button className="text-md font-semibold bg-sky-400 px-4 py-1 rounded-full">
//                     {project.category}
//                   </button>
//                 </div>
//                 <div className="m-0 ">
//                   <h6 className="m-0 text-[1.2rem] font-bold">Key Features</h6>
//                   {key_features.map((val, index) => {
//                     return (
//                       <>
//                         <p className="h-auto  text-[1.1rem] text-black  ">
//                           <span className="text-[1.1rem] font-semibold  pr-1">
//                             {index + 1}
//                           </span>
//                           {val}
//                         </p>
//                       </>
//                     );
//                   })}
//                 </div>
//                 <div className="h-[8.5rem]  grid sm:grid-cols-2 review overflow-y-scroll overflow-x-hidden   "></div>
//                 <div className="  relative bottom-4 z-50 flex-col items-center gap-10">
//                   <div className="w-full pb-1.5">
//                     <div className="rating flex text-yellow-600 space-x-[4px] w-[6.5rem] items-center  ">
//                       <FaStar />
//                       <FaStar />
//                       <FaStar />
//                       <div className="text-sm font-semibold text-black">
//                         (3.5)
//                       </div>
//                     </div>
//                   </div>

//                   <div className="flex items-center gap-10">
//                     <a href={project.privew} target="_blank">
//                       <button className="bg-sky-500 px-4 py-1 text-black rounded-full">
//                         Preview
//                       </button>
//                     </a>
//                     <a href={project.github} target="_blank">
//                       <button className="bg-green-500 px-4 py-1 text-black rounded-full">
//                         Github
//                       </button>
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className=" col-span-6 mt-2">
//             <div className="m-0 py-2 ">
//               <h6 className="m-0 text-[1.2rem] font-bold">Discription</h6>
//             </div>
//             <p className="text-base ">{project.description}</p>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default ViewProject;
