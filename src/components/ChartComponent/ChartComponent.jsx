import { useRef, useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  BarController,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  BarController,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
);
import "./css/index.css";
import PropTypes from "prop-types";
const ChartComponent = ({ title, lefttitle, righttitle }) => {
  const chartRef = useRef(null);
  const [borderColor, setBorderColor] = useState("#00cc5e");
  const [barBackground, setBarBackground] = useState("rgba(0, 204, 94, 0.14)");

  useEffect(() => {
    if (chartRef.current) {
      const chart = chartRef.current;
      const ctx = chart.ctx;
      const gradient = ctx.createLinearGradient(0, 0, chart.width, 0);
      gradient.addColorStop(0, "#00CC5E");
      gradient.addColorStop(1, "#0066FF");
      setBorderColor(gradient);

      const barGradient = ctx.createLinearGradient(0, 0, 0, chart.height);
      barGradient.addColorStop(0, "rgba(0, 204, 94, 0.14)");
      barGradient.addColorStop(1, "rgba(0, 178, 255, 0.14)");
      setBarBackground(barGradient);
    }
  }, []);

  const data = {
    labels: [
      "Янв",
      "Фев",
      "Мар",
      "Апр",
      "Май",
      "Июн",
      "Июл",
      "Авг",
      "Сен",
      "Окт",
      "Ноя",
      "Дек",
    ],
    datasets: [
      {
        type: "bar",
        label: "Belgilangan ustunlar",
        data: [25, 40, 10, 45, 55, 50, 70, null, null, null, null, null],
        backgroundColor: barBackground,
        borderWidth: 0,
        barThickness: 24,
        borderRadius: 2,
      },
      {
        type: "line",
        label: "Chiziqli trend",
        data: [20, 35, 5, 40, 50, 45, 65, null, null, null, null, null],
        borderColor: borderColor,
        borderWidth: 2,
        pointRadius: 0,
        fill: false,
        tension: 0,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        min: 0,
        max: 80,
        ticks: {
          stepSize: 20,
          padding: 15,
          color: "#262626",
          font: {
            size: 16,
            family: "Raleway",
            weight: 500,
          },
        },
        grid: {
          display: true,
          drawBorder: false,
          drawTicks: false,
          lineWidth: 1,
        },
      },
      x: {
        ticks: {
          padding: 15,
          color: "#262626",
          font: {
            size: 16,
            family: "Raleway",
            weight: 500,
          },
        },
        border: {
          dash: [3, 3],
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <div className="graphics-container">
      {title && <h2 className="block-title">{title}</h2>}
      <div className="graphics">
        {lefttitle && <h2 className="graphics-title">{lefttitle}</h2>}
        <div style={{ width: "100%", height: "100%" }}>
          <Line ref={chartRef} data={data} options={options} />
        </div>
        {righttitle && <p className="thousand-text">{righttitle}</p>}
      </div>
    </div>
  );
};

ChartComponent.propTypes = {
  title: PropTypes.string,
  lefttitle: PropTypes.string,
  righttitle: PropTypes.string,
};

export default ChartComponent;
