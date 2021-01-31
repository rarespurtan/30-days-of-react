/** @format */

import React, { useState } from "react";

const api = {
  key: "73797a4244b51f8fef1013fb9838d80e",
  base: "https://api.openweathermap.org/data/2.5/",
};

function App() {
  return (
    <div className='app'>
      <main>
        <div className='search-box'>
          <input type='text' className='search-bar' placeholder='Search...' />
        </div>
      </main>
    </div>
  );
}

export default App;
