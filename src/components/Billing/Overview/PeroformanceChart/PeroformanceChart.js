import React, { useEffect, useRef, useState } from "react";
import styles from "./PerofomanceChart.module.css";
import ApexCharts from "apexcharts";

const PeroformanceChart = () => {
  const chartRef = useRef(null);
  const [selectedInterval, setSelectedInterval] = useState("engagement");

  useEffect(() => {
    const chartData = {
      engagement: {
        categories: [
          "15",
          "16",
          "17",
          "18",
          "19",
          "20",
          "21",
          "22",
          "23",
          "24",
          "25",
          "26",
        ],

        data: [
          { date: "21st August 2021", amount: "650,921,221", value: 105 },
          { date: "22st August 2021", amount: "620,921,221", value: 200 },
          { date: "23st August 2021", amount: "610,921,221", value: 180 },
          { date: "21st August 2021", amount: "650,921,221", value: 105 },
          { date: "22st August 2021", amount: "620,921,221", value: 200 },
          { date: "23st August 2021", amount: "610,921,221", value: 180 },
          { date: "21st August 2021", amount: "650,921,221", value: 115 },
          { date: "22st August 2021", amount: "620,921,221", value: 80 },
          { date: "23st August 2021", amount: "610,921,221", value: 180 },
          { date: "21st August 2021", amount: "650,921,221", value: 120 },
          { date: "22st August 2021", amount: "620,921,221", value: 200 },
          { date: "23st August 2021", amount: "610,921,221", value: 300 },
        ],
      },
      impression: {
        categories: [
          "15",
          "16",
          "17",
          "18",
          "19",
          "20",
          "21",
          "22",
          "23",
          "24",
          "25",
          "26",
        ],
        data: [
          { date: "22st August 2021", amount: "620,921,221", value: 200 },
          { date: "22st August 2021", amount: "620,921,221", value: 80 },
          { date: "23st August 2021", amount: "610,921,221", value: 180 },
          { date: "21st August 2021", amount: "650,921,221", value: 120 },
          { date: "22st August 2021", amount: "620,921,221", value: 200 },
          { date: "23st August 2021", amount: "610,921,221", value: 300 },
          { date: "21st August 2021", amount: "650,921,221", value: 105 },

          { date: "23st August 2021", amount: "610,921,221", value: 180 },
          { date: "21st August 2021", amount: "650,921,221", value: 105 },
          { date: "22st August 2021", amount: "620,921,221", value: 200 },
          { date: "23st August 2021", amount: "610,921,221", value: 180 },
          { date: "21st August 2021", amount: "650,921,221", value: 115 },
        ],
      },
    };

    // Removed unnecessary assignment of selectedData
    // const selectedData = chartData;

    const selectedData = chartData[selectedInterval];
    const options = {
      markers: {
        colors: ["#2F39BF"],
      },
      series: [
        {
          name: "Area",
          data: selectedData.data.map((item) => item.value),
          stacked: true,
        },
      ],
      chart: {
        height: 230,
        type: "area",
        width: "100%", // Set the width to 100%
        toolbar: {
          show: false,
        },

        zoom: {
          enabled: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
        width: 2,
        colors: ["#2F39BF"],
      },
      grid: {
        show: true,
        padding: {
          right: 0,
        },
      },
      xaxis: {
        lines: {
          show: false,
        },
        type: "category",
        categories: selectedData.categories,
        max: "100%",
        tooltip: {
          enabled: false,
        },
      },

      axisBorder: {
        show: true,
        color: "#2F39BF",
        height: 2,
        width: "100%",
        offsetX: 1,
        offsetY: 1,
      },
      yaxis: {
        lines: {
          show: false,
        },
        labels: {
          formatter: (value) => `${value}`,
          style: {
            colors: ["#2F39BF"],
            fontSize: window.innerHeight <= 350 ? "2px" : "12px",
          },
        },
        tooltip: {
          enabled: false,
        },
        axisBorder: {
          show: false,
        },
      },
      tooltip: {
        custom: function ({ series, seriesIndex, dataPointIndex, w }) {
          const date = selectedData.data[dataPointIndex].date;
          const amount = selectedData.data[dataPointIndex].amount;

          return `
          <div class="${styles["customTooltip"]}">

            <p class="${styles["date"]}"> ${date}</p>
            <p class="${styles["amount"]}"> ${amount}</p>
          </div>
        `;
        },
      },
      fill: {
        type: "gradient",
        gradient: {
          shadeIntensity: 1,
          opacityFrom: 0.5,
          opacityTo: 0,
          stops: [0, 100],
        },
        colors: ["#2F39BF"], // Change the gradient color to #2F39BF
      },
    };

    const chart = new ApexCharts(chartRef.current, options);
    chart.render();

    return () => {
      chart.destroy();
    };
  }, [selectedInterval]);

  return (
    <div className={styles.chartContainer}>
      <div className={styles.chartHeader}>
        <p className={styles.chartTitle}>Your Performance</p>
        <div className={styles.chartTabContainer}>
          <p
            className={[
              styles.chartTab,
              selectedInterval.toLowerCase() === "engagement" &&
                styles.activeChartTab,
            ].join(" ")}
            onClick={() => setSelectedInterval("engagement")}
          >
            {" "}
            <span className={styles.circle}></span> Engagement
          </p>
          <p
            className={[
              styles.chartTab,
              selectedInterval.toLowerCase() === "impression" &&
                styles.activeChartTab,
            ].join(" ")}
            onClick={() => setSelectedInterval("impression")}
          >
            {" "}
            <span className={styles.circle}></span> Impression
          </p>
        </div>
      </div>
      <div id="chart" ref={chartRef} className={styles.myChart}></div>
    </div>
  );
};

export default PeroformanceChart;
