import ReviewCard from "./ReviewCard";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAll as getAllProjects } from "../features/dashboard/projectSlice";
import { getAll as getAllDsas } from "../features/dashboard/dsaSlice";
import { getAll as getAllReviews } from "../features/dashboard/reviewSlice";

const AllReviewCard = () => {
  const dispatch = useDispatch();
  const { projects } = useSelector((state) => state.projectDetails);
  const { dsas } = useSelector((state) => state.dsaDetails);
  const { reviews } = useSelector((state) => state.reviewDetails);

  const [projectLength, setProjectLength] = useState(0);
  const [dsaLength, setDsaLength] = useState(0);
  const [reviewLength, setReviewLength] = useState(0);

  useEffect(() => {
    dispatch(getAllProjects());
    dispatch(getAllDsas());
    dispatch(getAllReviews());
  }, [dispatch]);

  useEffect(() => {
    if (projects) {
      setProjectLength(projects.length);
    }
    if (dsas) {
      setDsaLength(dsas.length);
    }
    if (reviews) {
      setReviewLength(reviews.length);
    }
  }, [projects, dsas, reviews]);

  console.log(dsas, projects, reviews);

  let allHomeReviewCardData = [projectLength, dsaLength, reviewLength];
  return (
    <>
      <div className="min-h-30 col-span-2 md:col-span-1 row-span-3 grid grid-cols-2 md:grid-cols-2 gap-2">
        {REVIEW_CARD_DATA.map((val, index) => {
          if (val.title === "Total Projects") {
            return <ReviewCard key={index} data={val} review={projectLength} />;
          }
          if (val.title === "Dsa Solved") {
            return <ReviewCard key={index} data={val} review={dsaLength} />;
          }
          if (val.title === "Total Review") {
            return <ReviewCard key={index} data={val} review={reviewLength} />;
          }
          return <ReviewCard key={index} data={val} />;
        })}
      </div>
    </>
  );
};

const REVIEW_CARD_DATA = [
  {
    title: "Total Projects",
    img: "./project.png",
    bgcolor: "bg-orange-200",
  },
  {
    title: "Dsa Solved",
    reviews: "100",
    img: "./dsa.png",
    bgcolor: "bg-sky-200",
  },
  {
    title: "Total Client",
    reviews: "100",
    img: "./client.png",
    bgcolor: "bg-pink-200 ",
  },
  {
    title: "Total Review",
    reviews: "100",
    img: "./review.png",
    bgcolor: "bg-lime-200 ",
  },
];

export default AllReviewCard;
