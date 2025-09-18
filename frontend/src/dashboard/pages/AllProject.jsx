import { Link, useNavigate } from "react-router-dom";
import Home_card_container from "../component/Home_card_container";
import { useDispatch, useSelector } from "react-redux";
import projectDetails, {
  deleteone,
  getAll,
} from "../../features/dashboard/projectSlice";
import { useEffect } from "react";
const AllProject = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { projects } = useSelector((state) => state.projectDetails);

  useEffect(() => {
    dispatch(getAll());
  }, []);
  // console.log("allp roject",projects);
  return (
    <>
      <Home_card_container headline={"All Project List"}>
        {projects.map((project, index) => {
          return (
            <>
              <div className="w-full h-[14rem] flex p-2 space-x-4  bg-sky-100 border-1 shadow-md shadow-gray-300 rounded-md relative">
                <div className="w-3/12 h-full">
                  <img
                    src=".././man1.jpg"
                    className="w-full h-full rounded-md"
                  ></img>
                </div>

                <div className="w-[48rem] h-full ">
                  <div className="flex gap-8">
                    <h6 className="text-lg m-0">{project.title}</h6>
                    <div className="h-auto w-auto px-2 py-1 rounded-full bg-sky-700">
                      {project.category}
                    </div>
                  </div>
                  <div className="flex gap-14 h-auto mt-2 ">
                    <span className="text-sm text-blue-800">
                      {" "}
                      <span className="text-sm text-black font-semibold">
                        Github{" "}
                      </span>{" "}
                      {project.github}
                    </span>
                    <br></br>
                    <span className="text-sm  text-blue-800">
                      {" "}
                      <span className="text-sm text-black font-semibold">
                        Preview{" "}
                      </span>{" "}
                      {project.privew}
                    </span>
                    <br></br>
                  </div>
                  <div className="flex  w-full h-28 py-1">
                    <div className="w-1/2 h-full overflow-x-hidden overflow-y-scroll gap-3  review ">
                      <h6 className="text-sm font-bold m-0 ">Description</h6>
                      <p className="text-base leading-5">
                        {project.description}
                      </p>
                    </div>
                    <div className="w-1/2 h-full overflow-x-hidden overflow-y-scroll gap-3  review ">
                      <h6 className="text-sm font-bold m-0  ">Key Features</h6>
                      <p className="text-base leading-5">
                        {project.description}
                      </p>
                    </div>
                  </div>

                  <div className="flex absolute bottom-2  w-full gap-10 ">
                    <Link to={`/dashboard/update project/${project._id}`}>
                      <button className="text-lg text-black font-semibold bg-lime-600 rounded-md w-40 h-7">
                        Update
                      </button>
                    </Link>

                    <button
                      className="text-lg text-black font-semibold bg-red-600 rounded-md w-40 h-7"
                      onClick={() => {
                        dispatch(deleteone(project._id));
                      }}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </Home_card_container>
    </>
  );
};

export default AllProject;
