import React, { useEffect, useState } from "react";

const Results = ({ submitted, device, number, headlines }) => {
  let sentiment = "";
  if (number >= 0) {
    sentiment = "Great Reviews!";
  } else {
    sentiment = "Bad Reviews";
  }
  return (
    <div className="rightResults">
      {submitted ? (
        <div className="realResults">
          <h1 className="h1header">Results</h1>
          <p className="introText">
            Sentiment Analysis has found the concensus on the{" "}
            <span className="searchNameText">{device}</span> to have
          </p>
          <div className="sentiment">{sentiment}</div>
          <h2 className="h2header">Key Product Summaries</h2>
          <ul className="resultList">
            {headlines.map((headline) => (
              <li>{headline}</li>
            ))}
          </ul>
        </div>
      ) : (
        <div className="longName">
          The search engine uses Sentiment Analysis and Summerization tools to
          parse through reviews to let you know how top reviewers rate your
          selected device
        </div>
      )}
    </div>
  );
};

export default Results;
