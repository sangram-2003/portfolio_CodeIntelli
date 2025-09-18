import { useNavigate } from "react-router-dom";
import Review_card_dashboard from "../component/Review_card_dashboard";

const Review = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="w-full h-full rounded-md   bg-gray-100 p-2 space-y-2 overflow-x-hidden overflow-y-scroll gap-3  review ">
        <div className="w-full flex items-center justify-between">
          <h6 className="text-xl font-bold  underline-offset-4 tracking-wide">
            All Reviews{" "}
          </h6>
        </div>

        <Review_card_dashboard />
      </div>
    </>
  );
};

export default Review;
