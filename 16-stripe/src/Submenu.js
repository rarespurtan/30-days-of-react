/** @format */

import React, { useEffect, useRef, useState } from "react";
import { useGlobalContext } from "./context";

export default function Submenu() {
  const {
    isSubmenuOpen,
    location,
    page: { page, links },
  } = useGlobalContext();

  const container = useRef(null);
  const [columns, setColumns] = useState("col-2");
  useEffect(() => {
    setColumns("col-2");
    const submenu = container.current;
    const { center, bottom } = location;
    submenu.style.left = `${center}px`;
    submenu.style.top = `${bottom}px`;

    if (links.length === 3) {
      setColumns("col-3");
    }
    if (links.length > 3) {
      setColumns("col-4");
    }
  }, [location, links]);
  return (
    <aside ref={container} className={`submenu ${isSubmenuOpen ? "show" : ""}`}>
      <h4>{page}</h4>
      <div className={`submenu-center ${columns}`}>
        {links.map((link, index) => {
          return (
            <a key={index} href={link.url}>
              {link.icon}
              {link.label}
            </a>
          );
        })}
      </div>
    </aside>
  );
}
