import React, { useState } from "react";
import Header from "./components/Header/Header";
import Menu from "./components/Menu/Menu";
import GameSettings from "./components/GameSettings/GameSettings";

function App() {
  const [visibleSettings, setVisibleSettings] = useState<boolean>(true);

  return (
    <>
      <Header />
      <main>
        <button onClick={() => setVisibleSettings(!visibleSettings)}>
          Смена
        </button>
        {visibleSettings ? <GameSettings /> : <Menu />}
      </main>
    </>
  );
}

export default App;
