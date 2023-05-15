import React from "react";
import BackArrow from "../../ui/BackArrow";
import SplashScreen from "../../components/SplashScreen";
import SettingsContainer from "../../ui/SettingsContainer";
import MenuList from "../../ui/MenuList";
import { IoOptionsOutline } from "react-icons/io5";
import { FcStatistics } from "react-icons/fc";

const TeacherRoom: React.FC = () => {
  return (
    <main>
      <BackArrow />
      <SplashScreen text="Учительская" />
      <SettingsContainer>
        <MenuList
          items={[
            {
              text: "Мои варианты",
              icon: <IoOptionsOutline />,
              description: "Создавайте свои варианты заданий для учеников",
              href: "/myvariants",
              redirectToLogin: true,
            },
            {
              text: "Статистика вариантов",
              icon: <FcStatistics />,
              description: "Статистика учеников по выполненным заданиям",
              href: "/statistics",
              redirectToLogin: true,
            },
          ]}
        />
      </SettingsContainer>
    </main>
  );
};

export default TeacherRoom;
