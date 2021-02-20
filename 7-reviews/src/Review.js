/** @format */
import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";
import people from "./data";

export default function Review() {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];

  const nextPerson = () => {
    setIndex((index) => {
      return (index + 1) % people.length;
    });
  };

  const prevPerson = () => {
    setIndex((index) => {
      return index - 1 > -1 ? index - 1 : people.length - 1;
    });
  };

  const randomPerson = () => {
    setIndex((index) => {
      let newIndex;
      while (true) {
        newIndex = Math.floor(Math.random() * people.length);
        if (newIndex !== index) {
          break;
        }
      }
      return newIndex;
    });
  };

  return (
    <article className='review'>
      <div className='img-container'>
        <img src={image} alt={name} className='person-img' />
        <span className='quote-icon'>
          <FaQuoteRight />
        </span>
      </div>
      <h4 className='author'>{name}</h4>
      <p className='job'>{job}</p>
      <p className='info'>{text}</p>
      <div className='botton-container'>
        <button className='prev-btn' onClick={prevPerson}>
          <FaChevronLeft />{" "}
        </button>
        <button className='next-btn' onClick={nextPerson}>
          <FaChevronRight />{" "}
        </button>{" "}
      </div>
      <button className='random-btn' onClick={randomPerson}>
        surprise me
      </button>
    </article>
  );
}
