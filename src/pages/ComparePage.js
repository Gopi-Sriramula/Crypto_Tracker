import React, { useEffect, useState } from "react";
import Header from "../components/common/Header";
import selectedCoinData from "../functions/selectedCoinData";
import Loader from "../components/common/Loader";
import List from "../components/dashboard/List";
import CoinDisscription from "../components/common/coinDiscription";
import Coins100 from "../components/common/100Coins";
import SelectDays from "../components/common/selectDays";
import fetchChartData from "../functions/FetchChartData";
import settingChartData from "../functions/settingChartData";
import LineChart from "../components/common/LineChart";
import RadioButtons from "../components/common/RadiaButtons";

function ComparePage() {
  const [crypto1, setCrypto1] = useState("bitcoin");
  const [crypto2, setCrypto2] = useState("ethereum");
  const [days, setDays] = useState(7);
  const [chartData, setChartData] = useState(null);
  const [crypto1Data, setCrypto1Data] = useState(null);
  const [crypto2Data, setCrypto2Data] = useState(null);
  const [buttons, setButtons] = useState("prices");
  useEffect(() => {
    (async function (params) {
      const data1 = await fetchChartData(
        crypto1,
        days,
        buttons,
        undefined,
        false
      );
      const data2 = await fetchChartData(
        crypto2,
        days,
        buttons,
        undefined,
        false
      );
      if (data1 && data2) {
        settingChartData(setChartData, data1, data2);
      }
    })();
    selectedCoinData(setCrypto1Data, crypto1);
    selectedCoinData(setCrypto2Data, crypto2);
  }, [crypto1, crypto2, days,buttons]);
  const onChange = function (e) {
    setDays(e.target.value);
  };
  const onChange3 = function (e) {
    setButtons(e.target.id);
  };
  const onChange2 = async function (e, bool) {
    if (bool) {
      setCrypto1(e.target.value);
    } else {
      setCrypto2(e.target.value);
    }
  };
  if (!crypto1Data || !crypto2Data || !chartData) {
    return <Loader />;
  }
  return (
    <div>
      <Header />
      <div className="combinedCoins">
        <Coins100 onChange2={onChange2} crypto1={crypto1} crypto2={crypto2} />
        <SelectDays onChange={onChange} bool={false} />
      </div>
      <div className="selectedCoin">
        <List item={crypto1Data} key={"unquic"} i={0} />
      </div>
      <div className="selectedCoin">
        <List item={crypto2Data} key={"unquic"} i={0} />
      </div>
      <div className="lineChart">
        <div className="Radiobuttons">
          <RadioButtons onChange2={onChange3} buttons={buttons} />
        </div>
        <LineChart
          chartData={chartData}
          priceType={buttons}
          multiAxis={true}
        />
      </div>
      <CoinDisscription symbol={crypto1Data.id} desc={crypto1Data.desc} />
      <CoinDisscription symbol={crypto2Data.id} desc={crypto2Data.desc} />
    </div>
  );
}

export default ComparePage;
