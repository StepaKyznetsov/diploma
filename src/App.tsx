import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Main from "./pages/Main";
import GameMode from "./pages/GameMode";
import PlayGame from "./pages/PlayGame";
import Statistics from "./pages/Statistics";
import TeacherRoom from "./pages/TeacherRoom";
import Login from "./pages/Login";
import GameOver from "./pages/GameOver";
import {
  MY_STATISTICS,
  GAMEMODE,
  GAME_OVER,
  LOGIN,
  MAIN,
  PLAY,
  TEACHER_ROOM,
} from "./constants";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={MAIN} element={<Main />} />
        <Route path={GAMEMODE} element={<GameMode />} />
        <Route path={PLAY} element={<PlayGame />} />
        <Route path={MY_STATISTICS} element={<Statistics />} />
        <Route path={TEACHER_ROOM} element={<TeacherRoom />} />
        <Route path={LOGIN} element={<Login />} />
        <Route path={GAME_OVER} element={<GameOver />} />
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
