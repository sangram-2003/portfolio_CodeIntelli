import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register necessary components in Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const ProjectsAndDSAWaveChart = () => {
  // Initial chart state with data for Projects and DSA Questions
  const [chartData, setChartData] = useState({
    labels: ["Week 1", "Week 2", "Week 3", "Week 4", "Week 5", "Week 6"],
    datasets: [
      {
        label: "Projects Completed",
        data: [2, 3, 1, 5, 2, 4], // Sample data for projects completed
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        fill: true,
        tension: 0.4, // Bezier curve for wave-like appearance
        pointRadius: 0, // Hide points for smooth wave look
      },
      {
        label: "DSA Questions Solved",
        data: [10, 20, 15, 30, 25, 40], // Sample data for DSA questions solved
        borderColor: "rgba(153, 102, 255, 1)",
        backgroundColor: "rgba(153, 102, 255, 0.2)",
        fill: true,
        tension: 0.4,
        pointRadius: 0,
      },
    ],
  });

  const [chartOptions] = useState({
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Projects and DSA Questions Solved (Weekly)",
      },
    },
    scales: {
      x: {
        grid: {
          display: false, // Hide the vertical grid lines
        },
      },
      y: {
        grid: {
          display: false, // Hide the horizontal grid lines
        },
      },
    },
  });

  // Function to dynamically update the chart with new data
  const updateChart = () => {
    const newProjectData = chartData.datasets[0].data.map(() =>
      Math.floor(Math.random() * 10)
    );
    const newDSAData = chartData.datasets[1].data.map(() =>
      Math.floor(Math.random() * 50)
    );

    setChartData((prevData) => ({
      ...prevData,
      datasets: [
        { ...prevData.datasets[0], data: newProjectData },
        { ...prevData.datasets[1], data: newDSAData },
      ],
    }));
  };

  return (
    <div>
      {/* Render Line chart with wave-like appearance */}
      <Line data={chartData} options={chartOptions} />
      {/* Button to update chart data */}
    </div>
  );
};

export default ProjectsAndDSAWaveChart;
