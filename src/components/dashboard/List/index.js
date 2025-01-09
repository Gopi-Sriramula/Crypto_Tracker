import React from "react";
import "./style.css";
import {motion} from "framer-motion"
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import { Link } from "react-router-dom";
import { convertNumber } from "../../../functions/convertNumber";
function List({ item, i }) {
     console.log(i);
  return (
    <Link to={`/coin/${item.id}`} className="listContainer">
      <motion.tr
        initial={{ opacity: 0,y:-50}}
        animate={{ opacity: 1,y:0}}
        transition={{ duration: 0, delay: i * 0.1 }}
        className={`listCoin ${
          item.price_change_percentage_24h > 0 ? "green2" : "red2"
        }`}
      >
        <td className="list-img">
          <img
            src={item.image}
            alt="Image failed to load"
            className="grid-logo list-logo"
          />
        </td>
        <td className="gridCoins_names listCoins_names">
          <p className="grid_symbol listSymbol">{item.symbol}-usd</p>
          <p className="grid_id listId">{item.id}</p>
        </td>
        <td className="list_price_change">
          <div
            className={`grid_percentage_chnage ${
              item.price_change_percentage_24h > 0 ? "green" : "red"
            }`}
          >
            {item.price_change_percentage_24h > 0 && "+"}
            {item.price_change_percentage_24h.toFixed(2)} %
          </div>
          <div
            className={`grid_icon list_icon ${
              item.price_change_percentage_24h > 0 ? "green" : "red"
            }`}
          >
            {item.price_change_percentage_24h > 0 ? (
              <TrendingUpIcon />
            ) : (
              <TrendingDownIcon />
            )}
          </div>
        </td>
        <td
          className={`grid_current_price list_current_price ${
            item.price_change_percentage_24h > 0 ? "green1" : "red1"
          }`}
        >
          ${item.current_price.toLocaleString()}
        </td>
        <td className="grid_div3 list_div3">
          <p className="list_volume1">${item.total_volume.toLocaleString()}</p>
          <p className="list_volume2">${convertNumber(item.total_volume)}</p>
          <p className="list_MarketPrice">${item.market_cap.toLocaleString()}</p>
        </td>
      </motion.tr>
    </Link>
  );
}

export default List;
