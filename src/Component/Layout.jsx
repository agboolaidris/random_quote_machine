import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Fetch_Data } from "./Action";
function Layout({ Fetch_Data, quotes_Api, isLoad }) {
  const [state, setstate] = useState({
    random_num: Math.floor(Math.random() * 30),
    color: ["red", "yellow", "green", "blue"],
  });

  useEffect(() => {
    Fetch_Data();
  }, []);

  const handleClick = () => {
    setstate({
      random_num: Math.floor(Math.random() * quotes_Api.length),
    });
  };
  return (
    <div className="container" sty>
      {isLoad ? (
        <h2>Loading</h2>
      ) : (
        <div id="quote-box">
          {
            <>
              <div id="text">{quotes_Api[state.random_num].quote}</div>
              <span id="author">{quotes_Api[state.random_num].author}</span>
              <div id="quote-change">
                <div id="quote-post">
                  <a id="tweet-quote">twitter</a>
                  <a id="tmblr-quote">T-mbir</a>
                </div>

                <button id="new-quote" onClick={handleClick}>
                  New Quote
                </button>
              </div>
            </>
          }
        </div>
      )}
    </div>
  );
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    quotes_Api: state.Data,
    isLoad: state.isLoading,
  };
};

export default connect(mapStateToProps, { Fetch_Data })(Layout);
