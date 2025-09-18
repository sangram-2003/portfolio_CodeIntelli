const Hire = () => {
  return (
    <>
      <div className="w-full flex gap-3 px-3 h-28 bg-sky-100 border-1 shadow-md shadow-gray-300 rounded-md py-2 justify-evenly">
        <div className=" h-full  w-2/12 flex items-center justify-center">
          <img
            src=".././man1.jpg"
            className="w-[5rem] h-[5rem] border-2 rounded-full"
          ></img>
        </div>
        <div className="h-full flex-col w-10/12 ">
          <div className="flex gap-10">
            <h6 className="text-base m-0 font-semibold bg-green-400 px-2 rounded-full">
              Sangran buri
            </h6>
            <h6 className="text-base m-0 font-semibold bg-pink-400 px-2 rounded-full">
              sngarmbauribauri
            </h6>
          </div>
          <div className="mt-1">
            <p className=" text-base line-clamp-4 leading-4">
              {" "}
              Lorem ipsum dolor sit amet. optio nisi enim cum? Molestiae,
              incidunt hic unde sit eveniet iste illo facilis odio? Assumenda
              quisquam inventore voluptas suscipit, error velit!
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hire;
