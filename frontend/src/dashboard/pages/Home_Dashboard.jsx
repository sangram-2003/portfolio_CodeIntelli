import Home_Card from "../component/Home_Card";
import Home_card_container from "../component/Home_card_container";
import HomeContactCard from "../component/HomeContactCard";
import ProjectList from "../component/ProjectList";
import { Chart as Chartjs } from "chart.js/auto";
import {} from "react-chartjs-2";
import DynamicBarChart from "./DynamicBarChart";

const Home_Dashboard = () => {
  return (
    <>
      <div className="flex space-x-3">
        <div className="w-8/12 pb-2 flex-col space-y-3 ">
          <Home_Card />
          <div className="h-[24rem]  w-full bg-white rounded-md">
            <DynamicBarChart />
          </div>
        </div>
        <div className="h-[25rem] flex-col space-y-3  w-4/12">
          <div className="h-[32.5rem]  w-full">
            <Home_card_container headline={"Recent Email"}>
              <HomeContactCard />
            </Home_card_container>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home_Dashboard;
