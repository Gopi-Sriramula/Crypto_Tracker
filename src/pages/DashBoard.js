import React, { useEffect, useState } from "react";
import Header from "../components/common/Header";
import Tabs from "../components/dashboard/Tabs";
import { CircularProgress } from "@mui/material";
import fetch100Coins from "../functions/fetch100Coins";
import Pages from "../components/dashboard/Pagination";
import SearchBar from "../components/common/SearchBar";
import Loader from "../components/common/Loader";
function DashBoard() {
  const [coinsData, setCoinsData] = useState(null);
  const [coinsData10,setCoinsData10] = useState(null);
  const [page,setPage] = useState(1);
  const [value,setValue] = useState("");
  const onChange = (e)=>{
    let coins = coinsData.slice((page*10)-10,page*10);
    let value1 = e.target.value.toLowerCase();
    const filterCoins = coins.filter(item=>item.id.toLowerCase().includes(value1) || item.symbol.toLowerCase().includes(value1));
    setCoinsData10(filterCoins);
    setValue(e.target.value);
  }
  const handleChange = (event, page) => {
    setPage(page);
    console.log((page*10)-10,page*10);
    setCoinsData10(coinsData.slice((page*10)-10,page*10));
  };
  if(coinsData && !coinsData10){
    setCoinsData10(coinsData.slice(0,10));
  }
  useEffect(() => {
    fetch100Coins(setCoinsData);
  }, []);
  if (!coinsData10) {
    return <Loader/>  
  }
  return (
    <div>
      <Header />
      <SearchBar value={value} onChange={onChange}/>
      <Tabs coinsData10={coinsData10} />
      <Pages page={page} handleChange={handleChange}/>
    </div>
  );
}

export default DashBoard;
