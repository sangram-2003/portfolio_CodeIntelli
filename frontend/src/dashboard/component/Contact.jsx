import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import contactDetails, { getAll } from "../../features/dashboard/contactSlice";
import { useEffect } from "react";
const Contact = () => {
  const dispatch = useDispatch();
  const { contacts } = useSelector((state) => state.contactDetails);
  useEffect(() => {
    dispatch(getAll());
  }, []);

  return (
    <>
      {contacts.map((contact, index) => {
        return (
          <>
            <div className="w-full flex gap-3 px-3 h-28 bg-sky-100 border-1 shadow-md shadow-gray-300 border-gray-200 rounded-md py-2 justify-evenly">
              <div className=" h-full  w-2/12 flex items-center justify-center">
                <img
                  src=".././man1.jpg"
                  className="w-[5rem] h-[5rem] border-2 rounded-full"
                ></img>
              </div>
              <div className="h-full flex-col w-10/12 ">
                <div className="flex gap-10">
                  <h6 className="text-base m-0 font-semibold bg-green-400 px-2 rounded-full">
                    {contact.name}
                  </h6>
                  <h6 className="text-base m-0 font-semibold bg-pink-400 px-2 rounded-full">
                    {contact.email}
                  </h6>
                </div>
                <div className="mt-1">
                  <p className=" text-base line-clamp-4 leading-4">
                    {contact.message}
                  </p>
                </div>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
};

export default Contact;
