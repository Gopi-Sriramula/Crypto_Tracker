import axios from "axios";
import { convertObject } from "./convertObject";

const selectedCoinData = async function (setData,id) {
     try{
          const data = await axios({
               url: `https://api.coingecko.com/api/v3/coins/${id}`,
               method: "GET",
               headers: {
                 accept: "application/json",
                 "x-cg-demo-api-key": "CG-AMC57QgLWBmrRR3824ks1S9a",
               },
          });
          convertObject(setData,data.data);
     }
     catch(err){
          setData(null);
     }
};
export default selectedCoinData;
