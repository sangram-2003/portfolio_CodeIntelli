import ProjectCard from "../component/ProjectCard";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import projectDetails, { getAll } from "../features/dashboard/projectSlice";
const Projects = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [filterdata, setFilterdata] = useState([]);
  const [activeFilter, setActiveFilter] = useState("All");
  const { projects } = useSelector((state) => state.projectDetails)||[];
  console.log(projects ,"sddddddddddddddd")
const categories = [
  "All",
  ...new Set(
    (projects || []).map((project) => project.category)
  ),
];

  useEffect(() => {
    dispatch(getAll());
  }, [dispatch]);

  useEffect(() => {
    setFilterdata(projects); // Set initial filter data to show all projects
  }, [projects]);

  const filter = (value) => {
    if (value === "All") {
      setFilterdata(projects);
    } else {
      const filterProject = projects.filter(
        (project) => project.category === value
      );
      setFilterdata(filterProject);
    }
    setActiveFilter(value);
  };

  return (
    <>
      {/* <div className="border-b-2 flex overflow-hidden relative items-center h-24 justify-between min-h-[3.5rem] col-span-2 row-span-1">
        <img
          src="./meakup.jpg"
          className="w-full bg-cover absolute top-0"
          alt="Background"
        /> 
      </div> */}
      <div className="flex relative px-2 items-center h-auto justify-between min-h-[3.5rem] col-span-2 row-span-1">
        <div className="flex-col w-full items-start">
          <h6 className="text-[1.5rem] text-violet-800 font-serif mt-2 font-bold tracking-wide">
            Project List
          </h6>
          <div className="absolute w-full h-12  flex gap-2 items-center overflow-x-scroll overflow-y-hidden review">
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => filter(category)}
                className={`px-4 ml-1 flex items-center font-semibold text-md h-8 rounded-full
                  ${
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
      </div>
      <div className="border-b-2 flex items-center justify-between px-2 col-span-2 row-span-1">
        <div className="w-full flex justify-center py-4 mt-10 ">
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-auto">
            {filterdata.map((project, index) => (
              <div
                key={index}
                className="bg-[rgb(121,209,234,0.3)]  md:w-full cursor-pointer  relative group h-auto pb-10 rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105"
              >
                <div className="flex items-center">
                  <img
                    src={project.image}
                    alt={project.projecter}
                    className="w-full h-34"
                  />
                </div>
                <div className="px-4 py-2">
                  <h3 className="text-lg font-bold m-0">{project.title}</h3>
                  <p className="text-gray-600 line-clamp-3 leading-5">
                    {project.description}
                  </p>
                </div>
                <div className="w-full flex justify-center absolute bottom-4 ">
                  <Link to={`/project/${project._id}`}>
                    <button className="text-lg px-4 py-1 shadow-lg shadow-black rounded-md border border-gray-900 font-semibold text-center text-black bg-green-300">
                      See More
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
