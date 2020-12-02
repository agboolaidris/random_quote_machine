import React, { useEffect, useState, useRef } from "react";
import { connect } from "react-redux";
import { Fetch_Data } from "./Action";
import Quote from "./Quote";

function Layout({ Fetch_Data, quotes_Api, isLoad }) {
  //generate a random number
  const [state, setstate] = useState({
    random_num: Math.floor(Math.random() * 30),
  });

  // quote tweet
  const [quote, setquote] = useState({
    quote: "",
    author: "",
  });

  //style
  const arr = ["#2c698d", "#272643", "#54007d", "#1a1b4b", "gold", "#f7a400"];
  const arr2 = ["#e3f6f5", "#bae8e8", "#eabfff"];

  const [style, setstyle] = useState({
    background: arr[Math.floor(Math.random() * arr.length)],
  });

  const [box, setbox] = useState({
    background: arr2[Math.floor(Math.random() * arr2.length)],
  });

  useEffect(() => {
    Fetch_Data();
  }, []);

  //callback function that pass props from child element to parent

  const callback = (call) => {
    setquote({
      ...state,
      quote: call.quote,
      author: call.author,
    });
  };

  // tweeter link
  const tweet_URL = `https://twitter.com/intent/tweet?text=${quote.quote} -${quote.author}`;

  //random quote
  const handleClick = () => {
    setstate({
      random_num: Math.floor(Math.random() * quotes_Api.length),
    });
    setstyle({
      background: arr[Math.floor(Math.random() * arr.length)],
    });
    setbox({
      background: arr2[Math.floor(Math.random() * arr2.length)],
    });
  };

  //return
  return (
    <div style={style} className="wrapper">
      {isLoad ? (
        <h2>Loading</h2>
      ) : (
        <div id="quote-box" style={box}>
          {
            <>
              <Quote
                quotes_Api={quotes_Api}
                random={state.random_num}
                URL={tweet_URL}
                handleClick={handleClick}
                callback={callback}
              />
            </>
          }
        </div>
      )}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    quotes_Api: state.Data,
    isLoad: state.isLoading,
  };
};

export default connect(mapStateToProps, { Fetch_Data })(Layout);
