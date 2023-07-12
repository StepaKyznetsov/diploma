import React, { useEffect } from "react";
import BackArrow from "../../ui/BackArrow";
import SplashScreen from "../../components/SplashScreen";
import VariantsOptions from "../../components/VariantsOptions";
import { useActions, useTypedSelector } from "../../hooks";

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
