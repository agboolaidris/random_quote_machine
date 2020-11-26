import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Fetch_Data } from "./Action";
function Layout({ Fetch_Data, quotes_Api }) {
  const [state, setstate] = useState({
    quote: "",
    author: "",
  });

  const { quotes } = quotes_Api !== undefined && quotes_Api;
  console.log(quotes);
  useEffect(() => {
    console.log(quotes);
  }, [quotes]);

  useEffect(() => {
    Fetch_Data();
  }, []);

  const handleClick = () => {
    const quote = quotes[Math.floor(Math.random() * quotes.length)];
    console.log(quote);
  };

  return (
    <div className="container">
      {!quotes ? (
        <h2>Loading</h2>
      ) : (
        <div id="quote-box">
          <div id="text">{state.quote}</div>
          <span id="author">Agboola</span>
          <div id="quote-change">
            <div id="quote-post">
              <a id="tweet-quote">twitter</a>
              <a id="tmblr-quote">T-mbir</a>
            </div>

            <button id="new-quote" onClick={handleClick}>
              New Quote
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    quotes_Api: state.quotes,
  };
};

export default connect(mapStateToProps, { Fetch_Data })(Layout);
