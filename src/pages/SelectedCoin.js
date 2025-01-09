import React, { useEffect, useState } from "react";
import Header from "../components/common/Header";
import { useParams } from "react-router-dom";
import selectedCoinData from "../functions/selectedCoinData";
import Loader from "../components/common/Loader";
import List from "../components/dashboard/List";
import CoinDisscription from "../components/common/coinDiscription";
import fetchChartData from "../functions/FetchChartData";
import LineChart from "../components/common/LineChart";
import SelectDays from "../components/common/selectDays";
import RadioButtons from "../components/common/RadiaButtons";
function SelectedCoin() {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [days, setDays] = useState(7);
  const [buttons,setButtons] = useState("prices")
  const onChange = function(e){
     setDays(e.target.value);
  }
  const onChange2 = function(e){
    setButtons(e.target.id)
  }
  const [chartData, setChartData] = useState(null);
  useEffect(() => {
    if (id) {
      selectedCoinData(setData, id);
    }
  }, []);
  useEffect(() => {
    if (id) {
      fetchChartData(id, days,buttons, setChartData);
    }
  }, [days,buttons]);
  if (!data || !chartData) {
    return <Loader />;
  }
  return (
    <div>
      <Header />
      <div className="selectedCoin">
        <List item={data} key={"unquic"} i={0} />
      </div>
      <div className="lineChart">
          <SelectDays onChange={onChange}/>
          <div className="Radiobuttons">
            <RadioButtons onChange2={onChange2} buttons={buttons}/>
          </div>
        <LineChart chartData={chartData} priceType={buttons}/>
      </div>
      <CoinDisscription symbol={data.id} desc={data.desc} />
    </div>
  );
}

export default SelectedCoin;
