import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Main from "./pages/Main";
import GameMode from "./pages/GameMode";
import PlayGame from "./pages/PlayGame";
import { ALL_TASKS, GAMEMODE, MAIN, PLAY } from "./constants";
import AllTasks from "./pages/AllTasks";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={MAIN} element={<Main />} />
        <Route path={GAMEMODE} element={<GameMode />} />
        <Route path={PLAY} element={<PlayGame />} />
        <Route path={ALL_TASKS} element={<AllTasks />} />
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
