import { useDispatch } from "react-redux";
import { create } from "../../features/dashboard/projectSlice";
import { useRef } from "react";

const AddProject = () => {
  const dispatch = useDispatch();
  const titleRef = useRef();
  const categoryRef = useRef();
  const descriptionRef = useRef();
  const key_featuresRef = useRef();
  const githubRef = useRef();
  const privewRef = useRef();
  const imageRef = useRef();

 const handleSubmit = async (e) => {
  e.preventDefault();

  const formData = new FormData();
  formData.append("title", titleRef.current.value);
  formData.append("category", categoryRef.current.value);
  formData.append("description", descriptionRef.current.value);
  formData.append("key_features", key_featuresRef.current.value);
  formData.append("github", githubRef.current.value);
  formData.append("privew", privewRef.current.value);
  
  // 👇 append the actual file (not .value, but .files[0])
  if (imageRef.current.files[0]) {
    formData.append("image", imageRef.current.files[0]);
  }

 

  dispatch(create(formData)); // dispatch with formData
};


  return (
    <>
      <div className="w-full flex justify-center">
        <form
  method="POST"
  onSubmit={handleSubmit}
  encType="multipart/form-data"   // ✅ fix this
  className="w-4/6 h-auto rounded-md bg-sky-200"
>
          <div
            className="h-16 flex items-center justify-center
            border-b border-black"
          >
            <h1 className="text-2xl font-bold tracking-wide">
              Add a new <span className="text-pink-500">project</span>
            </h1>
          </div>
          <div className="flex justify-center px-3 py-2">
            <div className="px-1 w-full  ">
              <div className="flex w-full b gap-6">
                <div className="flex-col w-full space-y-1">
                  <label>Project Title</label>
                  <br></br>
                  <input
                    type="text"
                    placeholder="Enter"
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
                    ref={categoryRef}
                    className="w-full bg-none h-10 rounded-md"
                  ></input>
                </div>
              </div>
               
                <div className="flex-col space-y-1 mt-1">
                <label>Project Image</label>
                <br></br>
                <input type="file" 
                ref={imageRef}
                className="w-full bg-none h-10 rounded-md"/>
              </div>
              <div className="flex-col space-y-1 mt-1">
                <label>Project Description</label>
                <br></br>
                <textarea
                  className="w-full  bg-none h-20 rounded-md"
                  ref={descriptionRef}
                ></textarea>
              </div>
              <div className="flex-col space-y-1 mt-1">
                <label> Five Project Key Features</label>
                <br></br>
                <textarea
                  className="w-full bg-none h-20 rounded-md"
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
                  Submit
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddProject;
