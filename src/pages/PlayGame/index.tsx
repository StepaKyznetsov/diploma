import React from "react";
import BackArrow from "../../ui/BackArrow";
import TaskContainer from "@/components/TaskContainer";
import SingleAnswer from "@/components/SingleAnswer";
import MultipleAnswer from "@/components/MultipleAnswer";
import InputAnswer from "@/components/InputAnswer";
import { useTypedSelector } from "@/hooks";

const PlayGame: React.FC = () => {
  const { questions } = useTypedSelector((state) => state.questions);

  const differentAnswersTypes = {
    single: SingleAnswer,
    multiple: MultipleAnswer,
    input: InputAnswer,
  };

  return (
    <main>
      <BackArrow />
      <TaskContainer>
        {questions.map((e) => {
          const Component = differentAnswersTypes[e.type];
          return Component ? (
            <Component
              text={e.text}
              answer={e.answer}
              answerOptions={e.answerOptions}
              type={e.type}
            />
          ) : null;
        })}
      </TaskContainer>
    </main>
  );
};

export default PlayGame;
