import { useSelector, useDispatch } from "react-redux";
import { getAll } from "../../features/dashboard/contactSlice";
import { ToastContainer, toast } from "react-toastify";
import { useEffect } from "react";
import "react-toastify/dist/ReactToastify.css"; // import toast styles

const HomeContactCard = () => {
  const dispatch = useDispatch();
  const { contacts } = useSelector((state) => state.contactDetails);

  useEffect(() => {
    dispatch(getAll());
  }, [dispatch]);

  const showMessage = (id) => {
    const msg = contacts.find((item) => item.id === id);
    if (msg) {
      toast(`Email: ${msg.email}\nMessage: ${msg.message}`, {
        autoClose: false, // Set auto-close to 5 seconds
        position: "top-center bottom-center", // Position the toast in top right
        hideProgressBar: false, // Show the progress bar
        closeOnClick: true, // Allow closing on click
        pauseOnHover: true, // Pause auto-close on hover
        draggable: true, // Enable dragging to close
        className:
          "absolute w-96 top-[8rem] text-black shadow-md shadow-gray-500 border border-gray-300",
      });
    }
  };

  return (
    <>
      <ToastContainer />
      {contacts.map((contact) => (
        <div
          key={contact._id}
          onClick={() => showMessage(contact.id)}
          className="w-full relative flex gap-1 px-2 h-20 bg-sky-100 border-1 shadow-md shadow-gray-300 border-gray-200 rounded-md py-2"
        >
          <div className="h-full w-3/12 flex items-center justify-center">
            <img
              src=".././man1.jpg"
              alt="Contact avatar"
              className="w-[4rem] h-[4rem] border-2 rounded-full"
            />
          </div>
          <div className="h-full flex-col w-11/12">
            <h6 className="text-base m-0 font-semibold rounded-full">
              {contact.email}
            </h6>
            <div>
              <p className="text-base line-clamp-2 leading-4">
                {contact.message}
              </p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default HomeContactCard;
