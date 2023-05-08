import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Main from "./pages/Main/Main";
import GameMode from "./pages/GameSettings/GameMode";
import PlayGame from "./pages/PlayGame/PlayGame";

const App: React.FC = () => {
  return (
    <main>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/gamemode" element={<GameMode />} />
          <Route path="/play" element={<PlayGame />} />
          <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
};

export default App;
