import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header";
import Form from "./components/Form";
import List from "./components/List";
import { ListProvider } from "./contexts/ListContexts";

function App() {
  return (
    <ListProvider>
      <>
        <Header></Header>
        <Form></Form>
        <List></List>
      </>
    </ListProvider>
  );
}

export default App;
