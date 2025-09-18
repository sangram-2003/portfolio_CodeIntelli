import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { update } from "../../features/dashboard/projectSlice";

const UpdateProject = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { projects } = useSelector((state) => state.projectDetails);
  const project = projects.find((item) => item._id === id);

  const titleRef = useRef();
  const categoryRef = useRef();
  const descriptionRef = useRef();
  const key_featuresRef = useRef();
  const githubRef = useRef();
  const privewRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const Data = {
      id: project._id,
      title: titleRef.current.value,
      category: categoryRef.current.value,
      description: descriptionRef.current.value,
      key_features: key_featuresRef.current.value,
      github: githubRef.current.value,
      privew: privewRef.current.value,
    };

    dispatch(update(Data));
  };

  return (
    <>
      <div className="w-full flex justify-center">
        <form
          className="w-4/6  h-auto  rounded-md bg-sky-200  "
          method="POST"
          onSubmit={handleSubmit}
        >
          <div
            className="h-16 flex items-center justify-center
            border-b border-black"
          >
            <h1 className="text-2xl font-bold tracking-wide">
              Update the exitance <span className="text-pink-500">project</span>
            </h1>
          </div>

          <div className="flex justify-center">
            <div className="px-1 w-full ">
              <div className="flex justify-center px-3 py-2">
                <div className="px-1 w-full  ">
                  <div className="flex w-full b gap-6">
                    <div className="flex-col w-full space-y-1">
                      <label>Project Title</label>
                      <br></br>
                      <input
                        type="text"
                        placeholder="Enter"
                        defaultValue={project.title}
                        ref={titleRef}
                        className="w-full bg-none h-10 rounded-md"
                      ></input>
                    </div>

                    <div className="flex-col  w-full space-y-1 ">
                      <label>Project Catgory</label>
                      <br></br>
                      <input
                        type="text"
                        placeholder="Enter"
                        defaultValue={project.category}
                        ref={categoryRef}
                        className="w-full bg-none h-10 rounded-md"
                      ></input>
                    </div>
                  </div>

                  <div className="flex-col space-y-1 mt-1">
                    <label>Project Description</label>
                    <br></br>
                    <textarea
                      className="w-full  bg-none h-20 rounded-md"
                      defaultValue={project.description}
                      ref={descriptionRef}
                    ></textarea>
                  </div>
                  <div className="flex-col space-y-1 mt-1">
                    <label> Five Project Key Features</label>
                    <br></br>
                    <textarea
                      className="w-full bg-none h-20 rounded-md"
                      defaultValue={project.key_features}
                      ref={key_featuresRef}
                    ></textarea>
                  </div>

                  <div className="flex w-full  gap-6">
                    <div className="flex-col w-full space-y-1">
                      <label>Github link</label>
                      <br></br>
                      <input
                        type="text"
                        placeholder="Enter"
                        defaultValue={project.github}
                        ref={githubRef}
                        className="w-full bg-none h-10 rounded-md"
                      ></input>
                    </div>
                    <div className="flex-col w-full space-y-1">
                      <label>Preview link</label>
                      <br></br>
                      <input
                        type="text"
                        placeholder="Enter"
                        defaultValue={project.privew}
                        ref={privewRef}
                        className="w-full bg-none h-10 rounded-md"
                      ></input>
                    </div>
                  </div>

                  <div className="mt-4 w-full flex items-center justify-center">
                    <button
                      type="submit"
                      className="w-1/2 text-xl font-semibold bg-pink-400 h-10 rounded-md"
                    >
                      Update
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default UpdateProject;

{
  /* 
//                   type="text"
//                   placeholder="Enter"
//                   defaultValue={project.title}
//                   ref={titleRef}
//                   className="w-full bg-none h-10 rounded-md"
//                 ></input>
//               </div>

//               <div className="flex-col space-y-1 mt-1">
//                 <label>Project Catgory</label>
//                 <br></br>
//                 <input
//                   type="text"
//                   placeholder="Enter"
//                   defaultValue={project.category}
//                   ref={categoryRef}
//                   className="w-full bg-none h-10 rounded-md"
//                 ></input>
//               </div>
//               <div className="flex-col space-y-1 mt-1">
//                 <label>Project Description</label>
//                 <br></br>
//                 <textarea
//                   className="w-full  bg-none h-20 rounded-md"
//                   defaultValue={project.description}
//                   ref={descriptionRef}
//                 ></textarea>
//               </div>
//               <div className="flex-col space-y-1 mt-1">
//                 <label> Five Project Key Features</label>
//                 <br></br>
//                 <textarea
//                   className="w-full bg-none h-20 rounded-md"
//                   defaultValue={project.key_features}
//                   ref={key_featuresRef}
//                 ></textarea>
//               </div>
//               <div className="flex-col space-y-1">
//                 <label>Github link</label>
//                 <br></br>
//                 <input
//                   type="text"
//                   placeholder="Enter"
//                   defaultValue={project.github}
//                   ref={githubRef}
//                   className="w-full bg-none h-10 rounded-md"
//                 ></input>
//               </div>
//               <div className="flex-col space-y-1">
//                 <label>Preview link</label>
//                 <br></br>
//                 <input
//                   type="text"
//                   placeholder="Enter"
//                   defaultValue={project.privew}
//                   ref={privewRef}
//                   className="w-full bg-none h-10 rounded-md"
//                 ></input>
//               </div>

//               <div className="mt-2">
//                 <button
//                   type="submit"
//                   className="w-full text-xl font-semibold bg-sky-400 h-10 rounded-md"
//                 >
//                   Submit
//                 </button>
//               </div>
//             </div>
//           </div>
//           </div> */
}
