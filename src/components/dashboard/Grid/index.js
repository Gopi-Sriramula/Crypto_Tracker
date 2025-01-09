import React from "react";
import "./style.css";
import { motion } from "framer-motion";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import { Link } from "react-router-dom";
function Grid({ item, i }) {
  return (
    <Link to={`/coin/${item.id}`} style={{ textDecoration: "none" }}>
      <motion.div
        initial={{ opacity: 0, y: +50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0, delay: i * 0.1 }}
        className={`gridCoin ${
          item.price_change_percentage_24h > 0 ? "green2" : "red2"
        }`}
      >
        <div className="grid_div1">
          <img
            src={item.image}
            alt="Image failed to load"
            className="grid-logo"
          />
          <div className="gridCoins_names">
            <p className="grid_symbol">{item.symbol}-usd</p>
            <p className="grid_id">{item.id}</p>
          </div>
        </div>
        <div className="grid_div2">
          <p
            className={`grid_percentage_chnage ${
              item.price_change_percentage_24h > 0 ? "green" : "red"
            }`}
          >
            {item.price_change_percentage_24h > 0 && "+"}
            {item.price_change_percentage_24h.toFixed(2)} %
          </p>
          <p
            className={`grid_icon ${
              item.price_change_percentage_24h > 0 ? "green" : "red"
            }`}
          >
            {item.price_change_percentage_24h > 0 ? (
              <TrendingUpIcon />
            ) : (
              <TrendingDownIcon />
            )}
          </p>
        </div>
        <p
          className={`grid_current_price ${
            item.price_change_percentage_24h > 0 ? "green1" : "red1"
          }`}
        >
          ${item.current_price.toLocaleString()}
        </p>
        <div className="grid_div3">
          <p>
            <span>Total Volume : </span>${item.total_volume.toLocaleString()}
          </p>
          <p>
            <span>Market Cap : </span>${item.market_cap.toLocaleString()}
          </p>
        </div>
      </motion.div>
    </Link>
  );
}

export default Grid;
