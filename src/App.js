import { useState, useEffect } from "react";
import './index.css'

function App() {
  const [qoutes, setQoutes] = useState('');

  const getQoute = () => {
    fetch("https://dummyjson.com/quotes")
      .then(res => res.json())
      .then(data => {

        const array = Object.keys(data).map(function (key) {
          return data[key]
        })
        let randomNumber = Math.floor(Math.random() * array[0].length);
        setQoutes(array[0][randomNumber]);

      });
  };

  useEffect(() => {
    getQoute();
  }, []);

  return (
    <div className="App">
      <div className="qoute" id="quote-box">
        {qoutes.quote && <p id="text">{qoutes.quote}</p>}
        {qoutes.author && <p id="author">Author: {qoutes.author}</p>}
        <div className="btnContainer">
          <button onClick={getQoute} className="btn" id="new-quote">Get qoute</button>
        </div>
        <a href="twitter.com/intent/tweet"
            target="_blank"
            id="tweet-quote"><i class="fa-brands fa-square-twitter"></i></a>
      </div>
    </div>
  );
}

export default App;
