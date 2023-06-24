import React, { useEffect } from "react";
import BackArrow from "../../ui/BackArrow";
import SplashScreen from "../../components/SplashScreen";
import VariantsOptions from "../../components/VariantsOptions";
import { useActions, useTypedSelector } from "../../hooks";

const TeacherRoom: React.FC = () => {
  const { groups } = useTypedSelector((state) => state.groups);
  const { addGroup } = useActions();
  useEffect(() => {
    addGroup(
      {
        name: "qwe",
        surname: "qwe",
        userType: "teacher",
        personalStatistics: [],
        groups: [],
      },
      "qwe",
      groups
    );
  }, []);

  return (
    <main>
      <BackArrow />
      <SplashScreen text="Учительская" />
      <VariantsOptions />
    </main>
  );
};

export default TeacherRoom;
