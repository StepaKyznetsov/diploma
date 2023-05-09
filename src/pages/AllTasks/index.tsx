import React, { useEffect } from "react";
import axios from "axios";
import SplashScreen from "../../components/SplashScreen";
import { useActions, useTypedSelector } from "../../hooks";
import BackArrow from "../../ui/BackArrow";

const AllTasks: React.FC = () => {
  const { setCurrentQuestions } = useActions();
  const { questions } = useTypedSelector((state) => state.questions);

  const getQuestions = async () => {
    const response = await axios.get("/mocks/questions.json");
    setCurrentQuestions(response.data, null);
  };

  useEffect(() => {
    getQuestions();
  }, []);

  return (
    <main>
      <BackArrow />
      <SplashScreen text="К списку всех заданий" />
      <ul>
        {questions.map((e, index) => (
          <li key={index}>
            <span>{e.text}</span>
            <span>{e.type}</span>
          </li>
        ))}
      </ul>
    </main>
  );
};

export default AllTasks;
