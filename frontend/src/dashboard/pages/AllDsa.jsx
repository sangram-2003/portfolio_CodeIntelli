import { Link, useNavigate } from "react-router-dom";
import Home_card_container from "../component/Home_card_container";
import { useDispatch, useSelector } from "react-redux";
import dsaDetails, {
  deleteone,
  getAll,
} from "../../features/dashboard/dsaSlice";
import { useEffect } from "react";
import DsaCard from "../component/DsaCard";
const AllDsa = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { dsas } = useSelector((state) => state.dsaDetails);

  useEffect(() => {
    dispatch(getAll());
  }, []);
  // console.log("allp roject",projects);
  return (
    <>
      <Home_card_container
        headline={"All Datasturture and Algorithm Questions"}
      >
        {dsas.map((val, index) => {
          return (
            <>
              <DsaCard
                key={index}
                data={val}
                question_no={index + 1}
                deleteone={deleteone}
              ></DsaCard>
            </>
          );
        })}
      </Home_card_container>
    </>
  );
};

export default AllDsa;
