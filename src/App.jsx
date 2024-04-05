import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header";
import Form from "./components/Form";
import List from "./components/List";

function App() {
  const [count, setCount] = useState(0);
  const [robot, setRobot] = useState(["C3PO", "R2D2"]);
  function addRobot(name) {
    setRobot([...robot, name]);
  }
  function removeRobot(index) {
    const newRobots = robot.filter((r, i) => i !== index);
    setRobot(newRobots);
  }
  return (
    <>
      <Header></Header>
      <Form addRobot={addRobot}></Form>
      <List robot={robot} setRobot={setRobot} removeRobot={removeRobot}></List>
    </>
  );
}

export default App;
