const About = () => {
  return (
    <>
      <div className="w-full col-span-2 h-svh row-span-1 ">
        <div className="w-full h-full  col-span-12 flex flex-row-reverse items-center justify-center">
          {/* <div className="w-[80rem] grid grid-cols-2 gap-2 grid-flow-dense h-full ">
            <img
              src="./man1.jpg"
              className=" rounded-md w-[100%] h-[8rem] col-span-2 row-end-1"
              alt="Man"
            />
            <img
              src="./man1.jpg"
              className=" rounded-md w-[8rem] h-[9rem] col-span-1 row-span-1"
              alt="Man"
            />
            <img
              src="./man1.jpg"
              className=" rounded-md w-[10rem] h-[12rem] col-span-1 row-span-2"
              alt="Man"
            />
            <img
              src="./man1.jpg"
              className=" rounded-md w-[10rem] h-[7rem] col-span-1 row-span-2"
              alt="Man"
            />
            <img
              src="./man1.jpg"
              className=" rounded-md w-[10rem] h-[10rem] col-span-1 row-span-2"
              alt="Man"
            />
            <img
              src="./man1.jpg"
              className=" rounded-md w-[10rem] h-[6rem] row-span-1 col-span-1"
              alt="Man"
            />
            <img
              src="./man1.jpg"
              className=" rounded-md w-[10rem] h-[4rem] col-span-1 row-span-1"
              alt="Man"
            />
            <img
              src="./man1.jpg"
              className=" rounded-md w-[10rem] h-[4rem] col-span-1 row-span-1"
              alt="Man"
            />
          </div> */}
          <div className="   p-4 h-full">
            <h6 className="text-2xl m-0 text-black font-serif font-bold">
              Sangram Bauri
            </h6>
            <p className="text-md m-0 text-gray-700  font-semibold">
              Mern Stack Developer <span className="font-extrabold">.</span>{" "}
              Frontend Developer
            </p>
            <p className="text-[1.1rem]">
              Hello! I’m Sangram Bauri, a dedicated and curious Web Developer specializing in the MERN stack (MongoDB, Express.js, React.js, Node.js) with growing expertise in Large Language Model (LLM) integration.
            </p>
            <p className="text-[1.1rem]">
             I started my journey in web development with a passion for creating things that people can actually use. Over time, I mastered building full-stack applications — from designing clean, responsive frontends to developing secure and scalable backends. Along the way, I became deeply interested in AI and LLMs, and I now focus on combining web technologies with intelligent automation to deliver smarter, next-gen applications.
            </p>
            <p className="text-[1.1rem]">
           <b>What I Do</b><br></br>

Frontend Development: Crafting responsive, dynamic, and user-friendly interfaces with React.js, Tailwind CSS, and Bootstrap.
<br></br>
Backend Development: Building robust APIs and scalable server logic using Node.js and Express.js.
<br></br>
Database Management: Designing and optimizing data models with MongoDB & Mongoose.
<br></br>
LLM Integration: Leveraging OpenAI and other AI models to add features like chatbots, recommendation systems, and automated workflows.
<br></br>
Problem Solving: Turning client ideas into functional, reliable, and impactful solutions.
            </p>
            <div className="">
             <a
  href="/Sangram_Bauri_CV.pdf"
  download="Sangram_Bauri_CV.pdf"
  className="w-auto px-4 py-2 no-underline bg-sky-400 rounded-full text-md font-semibold text-white hover:bg-sky-500 transition"
>
  Download CV
</a>
            </div>
          </div>
          {/* <div className="w-[70rem] px-2 py-1 h-full overflow-x-hidden gap-4 space-y-2 flex-col overflow-y-scroll review ">
            <div className="w-full h-44 bg-red-800 rounded-md">
              <img src="./c1.jpg" className="h-full w-full rounded-md"></img>
            </div>
            <div className="w-full h-44 bg-red-800 rounded-md">
              <img src="./c2.jpg" className="h-full w-full rounded-md"></img>
            </div>
            <div className="w-full h-44 bg-red-800 rounded-md">
              <img src="./c3.png" className="h-full w-full rounded-md"></img>
            </div>
            <div className="w-full h-44 bg-red-800 rounded-md">
              <img src="./c4.jpg" className="h-full w-full rounded-md"></img>
            </div>
            <div className="w-full h-44 bg-red-800 rounded-md">
              <img src="./c5.jpg" className="h-full w-full rounded-md"></img>
            </div>
            <div className="w-full h-44 bg-red-800 rounded-md">
              <img src="./c7.jpg" className="h-full w-full rounded-md"></img>
            </div>
            <div className="w-full h-44 bg-red-800 rounded-md">
              <img src="./c8.jpg" className="h-full w-full rounded-md"></img>
            </div>
            <div className="w-full h-44 bg-red-800 rounded-md">
              <img src="./c1.jpg" className="h-full w-full rounded-md"></img>
            </div>
            <div className="w-full h-44 bg-red-800 rounded-md">
              <img src="./c1.jpg" className="h-full w-full rounded-md"></img>
            </div>
          </div> */}
        </div>
        {/* Scrollable content */}
        {/* <div className="w-full mt-2 gap-8 overflow-x-auto flex items-center justify-center">
          <button className="px-8 py-2 bg-green-300 rounded-full">
            Contact{" "}
          </button>
          <button className="px-8 py-2 bg-sky-300 rounded-full">
            Hire Me{" "}
          </button>
        </div> */}
      </div>
    </>
  );
};

export default About;
