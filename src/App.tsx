import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Main from "./pages/Main";
import GameMode from "./pages/GameMode";
import PlayGame from "./pages/PlayGame";
import AllTasks from "./pages/AllTasks";
import TeacherRoom from "./pages/TeacherRoom";
import Login from "./pages/Login";
import { ALL_TASKS, GAMEMODE, LOGIN, MAIN, PLAY, TEACHER_ROOM } from "./constants";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={MAIN} element={<Main />} />
        <Route path={GAMEMODE} element={<GameMode />} />
        <Route path={PLAY} element={<PlayGame />} />
        <Route path={ALL_TASKS} element={<AllTasks />} />
        <Route path={TEACHER_ROOM} element={<TeacherRoom />} />
        <Route path={LOGIN} element={<Login />} />
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
