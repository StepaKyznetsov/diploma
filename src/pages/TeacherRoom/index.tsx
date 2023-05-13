import React from "react";
import BackArrow from "../../ui/BackArrow";
import SplashScreen from "../../components/SplashScreen";

const TeacherRoom: React.FC = () => {
  return (
    <main>
      <BackArrow />
      <SplashScreen text="Учительская" />
    </main>
  );
};

export default TeacherRoom;
