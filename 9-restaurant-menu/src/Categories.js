/** @format */

import React from "react";

export default function Categories({ categories, filterItems }) {
  return (
    <div className='btn-container'>
      {categories.map((category, index) => {
        return (
          <button
            type='button'
            className='filter-btn'
            onClick={() => {
              filterItems(category);
            }}
            key={index}>
            {" "}
            {category}
          </button>
        );
      })}
    </div>
  );
}
