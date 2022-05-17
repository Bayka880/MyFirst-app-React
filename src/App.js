import Main from "./components/Main";
import "./Player.css";
import "./index.css";
import React from "react";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import PlayerInfo from "./components/PlayerInfo";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/PlayerInfo" element={<PlayerInfo />}></Route>
      </Routes>
    </>
  );
}

export default App;
