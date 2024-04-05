import React from "react";
import "./List.css";
import { useState } from "react";
const List = ({ robot, removeRobot }) => {
  const [search, setSearch] = useState("");
  return (
    <>
      <div className="list">
        <h1>List of robot friends </h1>
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          type="search"
          placeholder="search"
        />
        <div className="robots">
          {robot.map((r, i) => {
            if (r.toLowerCase().includes(search.toLowerCase()))
              return (
                <div key={i} className="card">
                  <h1>{r}</h1>

                  <img
                    src={" https://robohash.org/" + r}
                    alt=""
                    width={210}
                    height={210}
                  />
                  <button
                    onClick={(index) => {
                      removeRobot(i);
                    }}
                  >
                    Remov
                  </button>
                </div>
              );
          })}
        </div>
      </div>
    </>
  );
};

export default List;
