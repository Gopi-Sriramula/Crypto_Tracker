import React, { useEffect, useState } from "react";
import "./style.css";
import fetch100Coins from "../../../functions/fetch100Coins";
import Loader from "../Loader";
function Coins100({onChange2,crypto1,crypto2 }) {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch100Coins(setData);
  }, []);
  if (!data) {
    return <Loader />;
  }
  return (
    <div className="selectContainer">
      <div>
        <p>Crypto1</p>
        <select className="select" onChange={(e)=>onChange2(e,true)}>
          {data.map((item) => {
            if (item.id != crypto2) {
              return (
                <option className="option" value={item.id}>
                  {item.id}
                </option>
              );
            }
          })}
        </select>
      </div>
      <div>
        <p>Crypto2</p>
        <select className="select" onChange={(e)=>onChange2(e,false)}>
          {data.map((item) => {
            if (item.id != crypto1) {
              return (
                <option className="option" value={item.id}>
                  {item.id}
                </option>
              );
            }
          })}
        </select>
      </div>
    </div>
  );
}

export default Coins100;
