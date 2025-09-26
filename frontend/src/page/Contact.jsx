import emailjs from "@emailjs/browser";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { create } from "../features/dashboard/contactSlice";
import { useNavigate } from "react-router-dom";
const Contact = () => {
  const navigate = useNavigate();
  const form = useRef();
  const dispatch = useDispatch();
  const nameRef = useRef();
  const emailRef = useRef();
  const messageRef = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    const Data = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      message: messageRef.current.value,
    };

    emailjs
      .sendForm("service_2g4sttv", "template_7mfaogw", form.current, {
        publicKey: "pcueGC_ofSiuh69qZ",
      })
      .then(
        () => {
          dispatch(create(Data));
          console.log("SUCCESS!");
          alert("success fully sent ");
          nameRef.current.value="";
          emailRef.current.value="";
           messageRef.current.value="";
           navigate("/")
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <>
      <div
        className={` flex-col md:flex-row w-full flex h-[35rem] px-2  items-center  justify-between min-h-[3.5rem]  col-span-2 row-span-1 `}
      >
        <div class="w-full lg:w-2/5 shadow-md relative flex flex-col p-4 rounded-md text-black bg-sky-200">
          <div class="text-2xl font-bold mb-2 text-[#1e0e4b] text-center">
          Feel free to reach out <span class="text-[#7747ff]">anytime </span>
          </div>
          <div class="text-base text-[#7747ff] font-normal text-center ">
            Email : sangrambauri2003@email.com
          </div>
          <div class="text-sm font-normal mb-4 text-center text-[#1e0e4b]"></div>
          <form ref={form} onSubmit={sendEmail} class="flex flex-col gap-3">
            <div class="block relative">
              <label
                for="email"
                class="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2"
              >
                Full Name
              </label>
              <input
                type="text"
                id="email"
                ref={nameRef}
                name="from_name"
                class="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2  ring-gray-900 outline-0"
              />
            </div>
            <div class="block relative">
              <label
                for="email"
                class="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2"
              >
                Email
              </label>
              <input
                type="text"
                id="email"
                ref={emailRef}
                name="from_email"
                class="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2  ring-gray-900 outline-0"
              />
            </div>
            <div class="block relative">
              <label
                for="password"
                class="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2"
              >
                Comment
              </label>
              <textarea
                type="text"
                id="password"
                ref={messageRef}
                name="message"
                class="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-24 m-0 p-[11px] focus:ring-2 ring-offset-2 ring-gray-900 outline-0"
              />
            </div>

            <button
              type="submit"
              class="bg-[#7747ff] w-max m-auto px-12 py-2 rounded text-white text-sm font-normal"
            >
              Submit
            </button>
          </form>
        </div>
        <div className="w-full lg:w-1/2 mt-4 md:mt-0 ">
          <img src="./contact1.png" className="w-full h-full"></img>
        </div>
      </div>
    </>
  );
};
export default Contact;
