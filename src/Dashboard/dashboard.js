import React, { useEffect, useState } from "react";
import axios from "axios";
import Coins from "./Coins";
import CoinGeckoLogo from "../assets/images/coingecko.webp";

const Dashboard = () => {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.coingecko.com/api/v3/coins/markets", {
        params: {
          vs_currency: "usd",
          order: "market_cap_desc",
          per_page: 15,
          page: 1,
          sparkline: false,
        },
      })
      .then((response) => {
        setCoins(response.data);
      })
      .catch((error) => {
        console.error("Error fetching the data", error);
      });
  }, []);

  return (
    <React.Fragment>
      <div className="col-md-12">
        <div className="card">
          <div className="card-header">
            <img src={CoinGeckoLogo} alt="CoinGecko" />
          </div>
          <div className="card-body">
            <Coins coins={coins} />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Dashboard;
