import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Main from "./pages/Main";
import GameMode from "./pages/GameMode";
import PlayGame from "./pages/PlayGame";
import { GAMEMODE, MAIN, PLAY } from "./constants";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={MAIN} element={<Main />} />
        <Route path={GAMEMODE} element={<GameMode />} />
        <Route path={PLAY} element={<PlayGame />} />
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
