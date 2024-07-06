import React, { useState } from "react";
import { Badge } from "reactstrap";

const Coins = ({ coins }) => {
  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <React.Fragment>
      <div>
        <form>
          <input
            type="text"
            className="form-control form-control-lg"
            placeholder="Search"
            onChange={handleChange}
          />
        </form>
      </div>
      <div className="table-responsive mt-4">
        <table className="table table-striped">
          <thead className="table-dark" id="theads">
            <tr>
              <th className="h5">#</th>
              <th className="h5">Coin</th>
              <th className="h5">Price</th>
              <th className="h5">24h</th>
              <th className="h5">Market Cap</th>
            </tr>
          </thead>
          <tbody>
            {filteredCoins &&
              filteredCoins.map((row, index) => (
                <tr key={`row_${index}`}>
                  <td>{index + 1}</td>
                  <td className="d-flex align-items-center">
                    <img src={row.image} alt="crypto" height="25" width="25" />
                    <div className="ms-2">
                      <span className="fw-bolder h6">{row.name}</span>
                      <span className="coin-symbol text-uppercase text-muted ms-2 h6">
                        {row.symbol}
                      </span>
                    </div>
                    <Badge
                      className="ms-4"
                      style={{ fontSize: "0.75rem", padding: "0.25em 0.5em", cursor: 'pointer' }}
                      color="success"
                    >
                      Buy
                    </Badge>
                  </td>
                  <td>
                    <div className="h6">
                      ${row.current_price?.toLocaleString()}
                    </div>
                  </td>
                  <td>
                    <div
                      className={`h6 ${
                        row.price_change_24h < 0
                          ? "text-danger"
                          : "text-success"
                      }`}
                    >
                      {((row.price_change_24h / 10) * 100).toFixed(2)}%{" "}
                    </div>
                  </td>
                  <td>
                    <div className="h6">
                      ${row.market_cap?.toLocaleString()}
                    </div>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </React.Fragment>
  );
};

export default Coins;
