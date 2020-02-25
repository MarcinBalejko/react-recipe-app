import React, { useEffect, useState } from "react";
import dotenv from "dotenv";
import "./App.css";

dotenv.config();

const App = () => {
  const APP_ID = process.env.REACT_APP_APPID;
  const APP_KEY = process.env.REACT_APP_APPKEY;

  const [counter, setCounter] = useState(0);

  useEffect(() => {
    getRecipes();
  }, []);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    console.log(data);
  };

  return (
    <div className="App">
      <form className="search-form">
        <input className="search-bar" type="text" />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
      <h1 onClick={() => setCounter(counter + 1)}>{counter}</h1>
    </div>
  );
};

export default App;
