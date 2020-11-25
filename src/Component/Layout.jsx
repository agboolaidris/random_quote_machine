import React from "react";
import { connect } from "react-redux";
function Layout() {
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
  console.log(state);
  return {
    quote: state,
  };
};

export default connect(mapStateToProps)(Layout);
