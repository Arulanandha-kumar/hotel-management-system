import MainLayout from "../../layouts/MainLayout";
import Card from "../../components/Card";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Tooltip,
  Legend
} from "chart.js";

import { Doughnut } from "react-chartjs-2";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend
);

import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend
);
function AdminPage() {
  const data = {
    labels: [
      "Superior Room",
      "Deluxe Room",
      "Guest House",
      "Single Room",
    ],

    datasets: [
      {
        data: [15, 25, 20, 40],

        backgroundColor: [
          "#ff6384",
          "#ff9f40",
          "#36a2eb",
          "#9966ff",
        ],

        borderColor: "#fff",
        borderWidth: 2,
      },
    ],
  };
  const chartData = {
    labels: [
      "2022-11-10",
      "2026-06-18",
    ],

    datasets: [
      {
        label: "Revenue",

        data: [100, 0],

        backgroundColor: "#8b5cf6",
        borderRadius: 8,
      },
    ],
  };
  return (
    <MainLayout pageTitle="Dashboard">

      <div className="grid md:grid-cols-4 gap-5">
        <Card
          title="Booked Rooms"
          value="1/15"
          color="#009966"
        />

        <Card
          title="Total Rooms"
          value="500"
          color="#e17100"
        />

        <Card
          title="Staffs"
          value="145"
          color="#e60076"
        />

        <Card
          title="Revenue"
          value="₹2,50,000"
          color="#7f22fe"
        />
      </div>
      <div className="grid md:grid-cols-3 gap-5 mt-5">
        <div className="chart-card border border-gray-200 shadow-lg rounded-xl px-3 py-5">
          <h2 className="text-xl text-center text-black font-bold mb-4">
            Booked Rooms
          </h2>
          <Doughnut
            data={data}
            options={{
              cutout: "50%",
              plugins: {
                legend: {
                  position: "top",
                },
              },
            }}
          />

          <h3 className="chart-title">
            Booked Room
          </h3>

        </div>
        <div className="chart-card border border-gray-200 shadow-lg rounded-xl px-3 py-5">
          <h2 className="text-xl text-center text-black font-bold mb-4">
            Staffs
          </h2>
          <Bar
            data={chartData}
            options={{
              responsive: true,

              plugins: {
                legend: {
                  display: false,
                },
              },

              scales: {
                y: {
                  beginAtZero: true,
                  max: 200,
                },
              },
            }}
          />
        </div>
        <div className="chart-card border border-gray-200 shadow-lg rounded-xl px-3 py-5">
          <h2 className="text-xl text-center text-black font-bold mb-4">
            Profit
          </h2>
          <Bar
            data={chartData}
            options={{
              responsive: true,

              plugins: {
                legend: {
                  display: false,
                },
              },

              scales: {
                y: {
                  beginAtZero: true,
                  max: 200,
                },
              },
            }}
          />
        </div>
      </div>
    </MainLayout>
  )
}

export default AdminPage