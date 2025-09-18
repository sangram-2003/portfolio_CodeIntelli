import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  MdCloudDownload,
  MdNotificationAdd,
  MdNotificationsActive,
} from "react-icons/md";
import contactDetails, { getAll } from "../../features/dashboard/contactSlice";
const NotificationBtn = () => {
  const [countNoti, setCountNoti] = useState(null);
  const { contacts } = useSelector((items) => items.contactDetails);
  console.log(contacts);
  const NotificationNumber = () => {
    let count = 0;
    contacts.map((data, index) => {
      if (data.view == true) {
        count = count + 1;
      }
      setCountNoti(count);
    });
  };

  useEffect(() => {
    NotificationNumber();
  }, [contacts]);
  const removeNotificationNumber = async () => {
    contacts.map((data, index) => {
      if (data.view == true) {
        data.view = false;
      }
    });
  };
  return (
    <>
      {/* <form
        onSubmit={() => {
          removeNotificationNumber();
        }}
        className="h-8 w-8  relative rounded-full bg-violet-400/50 flex items-center justify-center"
      >
        <MdNotificationsActive className="w-6 h-6" />
        <div className="rounded-full text-sm bg-red-800/80 px-1 h-5 absolute -top-2 left-5">
          {countNoti}
        </div>
      </form> */}
    </>
  );
};

export default NotificationBtn;
