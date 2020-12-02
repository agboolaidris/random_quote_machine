import React from "react";

function Quote({ quotes_Api, random, URL, handleClick, callback }) {
  const handleQuote = () => {
    callback(quotes_Api[random]);
  };
  return (
    <>
      <p id="text">
        <i className="fas fa-quote-left"> </i>
        {quotes_Api[random].quote}
      </p>
      <cite id="author">{quotes_Api[random].author}</cite>
      <div id="quote-change">
        <a id="tweet-quote" href={URL} target="_blank">
          <i className="fab fa-twitter" onClick={handleQuote}></i>
          twitter
        </a>

        <button id="new-quote" onClick={handleClick}>
          New Quote
        </button>
      </div>
    </>
  );
}

export default Quote;
