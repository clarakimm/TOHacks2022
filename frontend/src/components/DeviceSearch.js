import React, { useState, useEffect } from "react";
import Results from "./Results";
import "./DeviceSearch.css";
import { Link } from "react-router-dom";

const DeviceSearch = ({ submitted }) => {
  const [search, setSearch] = useState("");
  const [sentiment, setSentiment] = useState(0);
  const [headlines, setHeadlines] = useState([]);
  const [clicked, setClicked] = useState(false);
  // const [submitted, setSubmitted] = useState(false);
  const fetchData = () => {
    fetch("http://127.0.0.1:5000/search")
      .then((res) => res.json())
      .then((data) => {
        setSearch(data.search);
        setSentiment(data.sentiment);
        setHeadlines(data.headlines);
      });
  };
  useEffect(() => {
    if (submitted) {
      fetchData();
    }
  }, []);
  return (
    <div className="header">
      {submitted ? (
        <div className="device-container">
          <form action="http://127.0.0.1:5000/" method="POST">
            <label for="search" style={{ fontFamily: "Kumbh Sans" }}>
              What device would you like to search for?
            </label>
            <input
              type="text"
              id="search"
              name="search"
              value={search}
              // placeholder="Enter device name"
              // onChange={(e) => {
              //   e.preventDefault();
              //   setSearch(e.target.value);
              //   // change the page state
              // }}
            />
            <Link to="/market" className="link">
              <div className="market-btn">Search in Marketplace</div>
            </Link>
          </form>
          <Results
            submitted={submitted}
            device={search}
            number={sentiment}
            headlines={headlines}
          />
        </div>
      ) : (
        <div className="device-container">
          <form
            autocomplete="off"
            action="http://127.0.0.1:5000/"
            method="POST"
          >
            <label for="search" style={{ fontFamily: "Kumbh Sans" }}>
              What device would you like to search for?
            </label>
            <input
              type="text"
              id="search"
              name="search"
              placeholder="Enter device name"
              onChange={(e) => {
                e.preventDefault();
                setSearch(e.target.value);
                // change the page state
              }}
            />
            <input
              type="submit"
              value={clicked ? "Loading..." : "Search"}
              onClick={() => {
                setClicked(true);
              }}
            ></input>
          </form>
          <Results submitted={submitted} />
        </div>
      )}
    </div>
  );
};

export default DeviceSearch;
