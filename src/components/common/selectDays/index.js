import React from "react";
import "./style.css";
function SelectDays({ onChange,bool=true}) {
  return (
    <div className="selectContainer">
      <p style={{display:bool?"flex":"none"}}>Price Change in the last</p>
      <select onChange={onChange} className="selectDays">
        <option value={7}>7 days</option>
        <option value={30}>30 days</option>
        <option value={60}>60 days</option>
        <option value={90}>90 days</option>
        <option value={120}>120 days</option>
        <option value={200}>200 days</option>
        <option value={365}>1 Year</option>
      </select>
    </div>
  );
}

export default SelectDays;
