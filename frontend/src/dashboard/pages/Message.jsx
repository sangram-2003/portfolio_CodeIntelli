import Contact from "../component/Contact";
import Hire from "../component/Hire";
import Home_card_container from "../component/Home_card_container";

const Message = () => {
  return (
    <>
      <div className="flex space-x-3 h-full">
        <Home_card_container headline={"Contact"}>
          <Contact />
        </Home_card_container>

        <Home_card_container headline={"Hire"}>
          <Hire />
        </Home_card_container>
      </div>
    </>
  );
};

export default Message;
