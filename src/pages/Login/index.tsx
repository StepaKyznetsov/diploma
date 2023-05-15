import React from "react";
import BackArrow from "../../ui/BackArrow";
import SplashScreen from "../../components/SplashScreen";
import LoginForm from "../../components/LoginForm";

const Login: React.FC = () => {
  return (
    <main>
      <BackArrow />
      <SplashScreen text="Вход в систему" />
      <LoginForm />
    </main>
  );
};

export default Login;
