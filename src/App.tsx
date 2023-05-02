import React from "react";
import Menu from "./components/Menu/Menu";
import SplashScreen from "./components/SplashScreen/SplashScreen";
import { BrowserRouter } from "react-router-dom";

const App: React.FC = () => {

  return (
    <BrowserRouter>
      <SplashScreen />
      <main>
        <Menu />
      </main>
    </BrowserRouter>
  );
}

export default App;
