import React from "https://cdn.skypack.dev/react@17.0.1";
import ReactDOM from "https://cdn.skypack.dev/react-dom@17.0.1";
import { useState, useEffect } from "https://cdn.skypack.dev/react@17.0.1";
import axios from "https://cdn.skypack.dev/axios@1.3.5";

function FirstLoad() {
  const [quoteText, setQuote] = useState('');
  const [authorText, setAuthor] = useState('');
  
    useEffect(() => {
    async function getQuote() {
      const response = await axios.get('https://api.quotable.io/random');
      setQuote(response.data.content);
      setAuthor(response.data.author)
    }
    getQuote();
  }, []);
  
  const handleButtonClick = () => {
    axios.get('https://api.quotable.io/random').then(response => {
      setQuote(response.data.content);
      setAuthor(response.data.author);
    });
  };
    function handleTweet() {
    const tweetUrl = `https://twitter.com/intent/tweet?hashtags=quotes&text=${encodeURIComponent(quoteText)}`;
    window.open(tweetUrl);
  }
  
  return (
    <div  id="quote-box">
      <div id="text">
        "{quoteText}"
      </div>
      <div id="author">
        - {authorText}
      </div>
      <div id="new-quote">
        <button onClick={handleButtonClick}>New Quote</button>
      </div>
      <a href="https://twitter.com/intent/tweet" id="tweet-quote" onClick={handleTweet}>
        <img src="https://abs.twimg.com/responsive-web/client-web/icon-ios.8ea219d5.png"/>
      </a>
  </div>
  );
}
ReactDOM.render(<FirstLoad />, document.getElementById("root"));



