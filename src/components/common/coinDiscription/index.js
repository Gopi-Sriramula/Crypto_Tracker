import React, { useState } from 'react'
import "./style.css";
function CoinDisscription({symbol,desc}) {
     const [bool,setBool] = useState(false);
     const short = desc.slice(0,desc.length/2);
  return (
    <div className='aboutCoin'>
     <h2>{symbol}</h2>
     <p dangerouslySetInnerHTML={{ __html:bool?desc:short}} />
     <span onClick={()=>{setBool(!bool)}} style={{color:"var(--grey)"}}>{bool?"showLess":"showMore..."}</span>
    </div>
  )
}

export default CoinDisscription