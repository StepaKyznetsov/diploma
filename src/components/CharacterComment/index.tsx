import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getRandomComment } from "../../helpers/getRandomComment";

interface ICharacterComment {
  visible: boolean;
}

const CharacterComment: React.FC<ICharacterComment> = ({
  visible,
}) => {
  const [comment, image] = getRandomComment();

  const notify = () =>
    toast(comment, {
      icon: () => (
        <img src={image} height={30} width={30} alt="characterIcon" />
      ),
    });

  visible && notify();

  return <ToastContainer hideProgressBar theme="dark" />;
};

export default CharacterComment;
