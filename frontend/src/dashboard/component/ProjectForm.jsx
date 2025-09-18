const ProjectForm  = ({headline , btn_name})=>{
    return(
        <>
       <div className="w-full flex justify-center">
         <form className="w-2/5  h-auto py-2 rounded-md bg-red-400 ">
          <div className="h-16 flex items-center justify-center
            border-b border-black">
            <h1 className="text-2xl font-bold tracking-wide">{headline}</h1>
          </div>
          <div className="flex justify-center">
            <div className="px-1 w-5/6 py-2">
                <div className="flex-col space-y-1">
                    
                    <label>Project Title</label><br></br>
                <input type="text" placeholder="Enter" className="w-full bg-none h-10 rounded-md"></input>

                </div>

                <div className="flex-col space-y-1 mt-1">
                    
                    <label>Project Catgory</label><br></br>
                <input type="text" placeholder="Enter" className="w-full bg-none h-10 rounded-md"></input>

                </div>
                <div className="flex-col space-y-1 mt-1">
                    
                    <label>Project Description</label><br></br>
                    <textarea className="w-full bg-none h-20 rounded-md"></textarea>
                </div>
                <div className="flex-col space-y-1 mt-1">
                    
                    <label> Five Project Key  Features</label><br></br>
                    <textarea className="w-full bg-none h-20 rounded-md"></textarea>
                </div>
               
                <div className="mt-2">
                <button type="submit" className="w-full text-xl font-semibold bg-sky-400 h-10 rounded-md">{btn_name}</button>
                </div>
            </div>
            </div>


         </form>
         </div>
        
        </>
    )
}

export default ProjectForm;