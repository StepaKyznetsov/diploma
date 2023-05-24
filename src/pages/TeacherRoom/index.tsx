import React from "react";
import BackArrow from "../../ui/BackArrow";
import SplashScreen from "../../components/SplashScreen";
import VariantsOptions from "../../components/VariantsOptions";


const TeacherRoom: React.FC = () => {
  return (
    <main>
      <BackArrow />
      <SplashScreen text="Учительская" />
      <VariantsOptions />
    </main>
  );
};

export default TeacherRoom;
