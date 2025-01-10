import convertDate from "./convertDate";
const settingChartData = function (setChartData, prices1, prices2) {
  setChartData({
    labels: prices1.map((item) => convertDate(item[0])),
    datasets: [
      {
        label: "Crypto1",
        data: prices1.map((price) => price[1]),
        borderColor: "#3a80e9",
        borderWidth: 1,
        fill: false,
        tension: 0.25,
        pointRadius: 1,
        yAxisID: "crypto1",
      },
      {
        label: "Crypto2",
        data: prices2.map((price) => price[1]),
        borderColor: "#61c96f",
        borderWidth: 1,
        fill: false,
        tension: 0.25,
        pointRadius: 1,
        yAxisID: "crypto2",
      },
    ],
  });
};
export default settingChartData;
