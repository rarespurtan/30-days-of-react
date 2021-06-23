/** @format */

import React, { useEffect, useState } from "react";
import rgbToHex from "./utils";
export default function SingleColour({ rgb, type, weight, index }) {
  const [alert, setAlert] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAlert(false);
    }, 3000);
    return () => clearTimeout(timeout);
  }, [alert]);
  return (
    <article
      onClick={() => {
        setAlert(true);
        navigator.clipboard.writeText(rgbToHex(...rgb));
      }}
      className={`color`}
      style={{ backgroundColor: `rgb(${rgb.join(",")})` }}>
      <p
        style={{ color: `${type === "tint" ? "black" : "white"}` }}
        className='percent-value'>
        {weight}%
      </p>
      <p
        style={{ color: `${type === "tint" ? "black" : "white"}` }}
        className='color-value'>
        {rgbToHex(...rgb)}
      </p>
      {alert && <p className='alert'> copied to clipboard </p>}
    </article>
  );
}
