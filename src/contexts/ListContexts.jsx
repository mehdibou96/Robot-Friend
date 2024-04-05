import { useContext } from "react";
import { createContext } from "react";
import { useState } from "react";
const ListCotext = createContext();

export const ListProvider = ({ children }) => {
  const [robot, setRobot] = useState(["C3PO", "R2D2"]);
  function addRobot(name) {
    setRobot([...robot, name]);
  }
  function removeRobot(index) {
    const newRobots = robot.filter((r, i) => i !== index);
    setRobot(newRobots);
  }
  return (
    <ListCotext.Provider value={{ robot, addRobot, removeRobot }}>
      {children}
    </ListCotext.Provider>
  );
};
export const useList = () => useContext(ListCotext);
