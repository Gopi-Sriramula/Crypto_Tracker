import React from "react";
import "./style.css";
function RadioButtons({ onChange2 ,buttons }) {
  return (
    <form className="form" onChange={onChange2}>
      <input type="radio" name="box" id="prices" checked={buttons==="prices"}/>
      <label className="wanted1" htmlFor="prices">PRICE</label>
      <input type="radio" name="box" id="market_caps" checked={buttons==="market_caps"} />
      <label htmlFor="market_caps">MKT CAP</label>
      <input type="radio" name="box" id="total_volumes" checked={buttons==="total_volumes"}/>
      <label className="wanted2" htmlFor="total_volumes">VOLUME</label>
    </form>
  );
}

export default RadioButtons;
