import React from "react";
import SplashScreen from "../../components/SplashScreen";
import BackArrow from "../../ui/BackArrow";
import LeadersList from "../../components/LeadersList";

const Leaderboard: React.FC = () => {
  return (
    <main>
      <SplashScreen text="К таблице рекордов" />
      <BackArrow />
      <LeadersList />
    </main>
  );
};

export default Leaderboard;
