import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Fetch_Data } from "./Action";
function Layout({ Fetch_Data, quotes_Api }) {
  useEffect(() => {
    Fetch_Data();
  }, []);
  const { quotes } = !quotes_Api ? "HELLO" : quotes_Api;
  console.log(quotes);

  return (
    <div className="container">
      <div id="quote-box">
        <div id="text">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident
          atque quas animi blanditiis quis iure quidem a adipisci modi quod
          quasi ipsam vel, facere aperiam assumenda maxime omnis deserunt sequi?
        </div>
        <span id="author">Agboola</span>
        <div id="quote-change">
          <div id="quote-post">
            <a id="tweet-quote">twitter</a>
            <a id="tmblr-quote">T-mbir</a>
          </div>

          <button id="new-quote">New Quote</button>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    quotes_Api: state.quotes,
  };
};

export default connect(mapStateToProps, { Fetch_Data })(Layout);
