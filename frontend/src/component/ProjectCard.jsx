const ProjectCard = ({ project, index }) => {
  const isEven = index % 2 === 0;

  return (
    <>
      <div className="w-full   ">
        <div
          className={` w-full flex ${
            isEven ? "flex-row " : "flex-row-reverse "
          } hover:scale-105  ease-in-out  duration-300 delay-100 justify-between h-[15rem] relative`}
        >
          {/* Image div */}
          <div className="w-5/12 h-full bg-gray-400 rounded-xl">
           <img
                    src="./man1.jpg" />
          </div>

          {/* Text div */}
          <div className="w-[38rem] h-full py-1 space-y-2">
            <h5 className="text-xl font-bold underline underline-offset-4">
              {project.projectName}
            </h5>
            <p className="leading-5 text-base font-semibold tracking-wide ">
              {project.projectDescription}
            </p>
            <p className="leading-5 text-base font-semibold tracking-wide  ">
              <span className="text-base font-bold">Key features :</span>

              {
                <div class="grid md:grid-cols-2 col-rows-2 w-full col-span-1  ">
                  {project.keyFeatures.map((val, index) => {
                    return (
                      <>
                        <div className=" ">
                          {index + 1}. {val}
                        </div>
                      </>
                    );
                  })}
                </div>
              }
            </p>

            <div className="w-96 h-10 flex gap-16 absolute bottom-2">
              <div className="h-full">
                <button className="w-[5rem] bg-black h-full rounded-full text-white font-semibold text-base tracking-wider">
                  GitHub
                </button>
              </div>
              <div className="h-full">
                <button className="w-auto border-2 border-gray-500 h-full rounded-full flex items-center text-base font-bold tracking-wide space-x-2 px-2">
                  Live Preview
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
