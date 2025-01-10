import axios from "axios";
import convertDate from "./convertDate";

const fetchChartData = async function (
  id,
  days,
  prices,
  setChartData,
  bool = true
) {
  try {
    const respondse = await axios({
      url: `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&currency=usd&days=${days}&interval=daily`,
      method: "GET",
      headers: {
        accept: "application/json",
        "x-cg-demo-api-key": "CG-AMC57QgLWBmrRR3824ks1S9a",
      },
    });
    const data = respondse.data;
    if (bool) {
      setChartData({
        labels: data[prices].map((item) => convertDate(item[0])),
        datasets: [
          {
            data: data[prices].map((price) => price[1]),
            borderColor: "#3a80e9",
            borderWidth: 1,
            fill: true,
            tension: 0.25,
            backgroundColor: "rgba(58,128,233,0.1)",
            pointRadius: 1,
            yAxisID: "crypto1",
          },
        ],
      });
    }
    return respondse.data[prices];
  } catch (err) {
    setChartData(null);
  }
};
export default fetchChartData;
