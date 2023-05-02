import React, { useState } from "react";
import Header from "./components/Header/Header";
import Menu from "./components/Menu/Menu";
import GameSettings from "./components/GameSettings/GameSettings";
import SplashScreen from "./components/SplashScreen/SplashScreen";
import { BrowserRouter } from "react-router-dom";

const App: React.FC = () => {
  const [visibleSettings, setVisibleSettings] = useState<boolean>(false);

  return (
    <BrowserRouter>
      <Header />
      <SplashScreen />
      <main>
        <button onClick={() => setVisibleSettings(!visibleSettings)}>
          Смена
        </button>
        {visibleSettings ? <GameSettings /> : <Menu />}
      </main>
    </BrowserRouter>
  );
}

export default App;
