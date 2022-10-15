import React, { useState, useEffect } from "react";
import { fetchDailyData } from "../../api";
import { Line, Bar } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";

import styles from "./Chart.module.css";

Chart.register(...registerables);

export const CovidChart = () => {
  const [dailyData, setDailyData] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      const dailyData1 = await fetchDailyData();

      setDailyData(dailyData1);
    };

    console.log(dailyData);

    fetchAPI();
  });

  // const lineChart = dailyData ? <h1>Charts</h1> : null;
  const lineChart = dailyData.length ? (
    <Line
      data={{
        labels: dailyData.map(({ date }) => date),
        datasets: [
          {
            data: dailyData.map(({ confirmed }) => confirmed),
            label: "Infected",
            borderColor: "#3333ff",
            fill: true
          },
          {
            data: dailyData.map(({ deaths }) => deaths),
            label: "Recovered",
            borderColor: "red",
            backgroundColor: "rgba(255, 0, 0, 0.5)",
            fill: true
          }
        ]
      }}
    />
  ) : null;
  // // (
  //   <Line data={{ labels: "", datasets: [{}, {}] }} />
  //   )
  return <div className={styles.container}>{lineChart}</div>;
};
