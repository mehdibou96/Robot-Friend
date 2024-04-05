import React from "react";
import "./From.css";
import { useState } from "react";
import { useList } from "../contexts/ListContexts";
const Form = () => {
  const [name, setName] = useState("");
  const { addRobot } = useList();
  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addRobot(name);
        }}
        className="form"
      >
        <h2>Add Robot</h2>
        <label>Robot Name*</label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="example: R2D2 C3P0"
        />
        <div>Robot Image</div>
        {name && (
          <img
            src={"https://robohash.org/" + name}
            alt=""
            width={96}
            height={96}
          />
        )}

        <button>Add Friend</button>
      </form>
    </>
  );
};

export default Form;
