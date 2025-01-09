import axios from "axios";

const fetch100Coins = async function (setCoinsData) {
  try{
    const data = await axios({
      url: "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&per_page=100",
      method: "GET",
      headers: {
        accept: "application/json",
        "x-cg-demo-api-key": "CG-AMC57QgLWBmrRR3824ks1S9a",
      },
    });
    setCoinsData(data.data);
  }
  catch(err){
    setCoinsData(null)
  }
};
export default fetch100Coins;
