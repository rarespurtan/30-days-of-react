/** @format */

import "./App.css";
import React, { useState } from "react";
import Values from "values.js";
import SingleColour from "./SingleColour";

function App() {
  const [colour, setColour] = useState("");
  const [error, setError] = useState(false);
  const [list, setList] = useState(new Values("#f15025").all(10));

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      let colours = new Values(colour).all(10);
      setList(colours);
      setError(false);
    } catch (err) {
      setError(true);
    }
  };

  return (
    <>
      {" "}
      <section className='container'>
        <h3>colour generator</h3>
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            value={colour}
            onChange={(e) => setColour(e.target.value)}
            placeholder='#f15025'
            className={`${error ? "error" : null}`}
          />
          <button className='btn' type='submit'>
            submit
          </button>
        </form>
      </section>{" "}
      <section className='colors'>
        {list.map((colour, index) => {
          return <SingleColour key={index} {...colour} index={index} />;
        })}
      </section>
    </>
  );
}

export default App;
