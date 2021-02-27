/** @format */

import React from "react";
import { FaTimes } from "react-icons/fa";
import { links, social } from "./data";
import logo from "./logo-white.svg";
import { useGlobalContext } from "./context";

export default function Sidebar() {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();
  return (
    <aside className={`sidebar  ${isSidebarOpen ? "show-sidebar" : ""}`}>
      <div className='sidebar-header'>
        <img src={logo} alt='logo' className='logo' />
        <button className='close-btn' onClick={closeSidebar}>
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
