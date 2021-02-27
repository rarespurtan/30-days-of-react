/** @format */

import React from "react";
import { FaTimes } from "react-icons/fa";
import { links, social } from "./data";
import logo from "./logo-white.svg";

export default function Sidebar() {
  return (
    <aside className={`sidebar show-sidebar`}>
      <div className='sidebar-header'>
        <img src={logo} alt='logo' className='logo' />
        <button className='close-btn'>
          <FaTimes />
        </button>
      </div>
      <ul className='links'>
        {links.map((link) => {
          return (
            <li key={link.id}>
              <a href={link.url}>
                {link.icon}
                {link.text}
              </a>
            </li>
          );
        })}
      </ul>
      <ul className='social-icons'>
        {social.map((link) => {
          return (
            <li key={link.id}>
              <a href={link.url}>{link.icon}</a>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
