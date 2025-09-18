/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [

    function({addUtilities}){
      const newUtilities = {
        ".scrollbar-thin":{
          scrollbarWidth:"8px",
          scrollbarColor:"red",
           paddingRight:"5px",
          marginLeft:"8px"
        },
        ".scrollbar-webkit":{
            "&::-webkit-scrollbar":{
              width:"8px"
            },
            "&::-webkit-scrollbar-track":{
               background:"white"
            },
            "&::-webkit-scrollbar-thumb":{
             
               backgroundColor:"rgb(31 41 55)",
               borderRadius:"20px",
               
               border:"1px solid white"
            }
        }
      }
      addUtilities(newUtilities , ["responsive","hover"])
    }
  ],
}

