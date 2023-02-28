import React, { useState } from "react";
import "./Sidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { data } from "./data";
import { Link } from "react-router-dom";

function Sidebar() {
  const [selected, setSelected] = useState(0);
  return (
    <div className="sidebar">
      <div className="avata">
        <img
          src="https://raw.githubusercontent.com/ZainRk/React-Admin-Dashboard-public/master/src/imgs/img1.png "
          alt=""
        />
      </div>
      <div className="info">
        <h6 className="info_name">Lernaddo Decaprio</h6>
        <FontAwesomeIcon icon={faChevronDown} height={10} width={10} />
      </div>
      <div className="menu">
        {data.map((item, index) => (
          <Link
            to={item.path}
            key={index}
            className={selected === index ? "menuItem active" : "menuItem"}
            onClick={() => setSelected(index)}
          >
            <i>{item.icon}</i>
            <span>{item.heading}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
