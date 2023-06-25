import React, { useEffect } from "react";
import BackArrow from "../../ui/BackArrow";
import SplashScreen from "../../components/SplashScreen";
import VariantsOptions from "../../components/VariantsOptions";
import { useActions, useTypedSelector } from "../../hooks";

const TeacherRoom: React.FC = () => {
  const { groups } = useTypedSelector((state) => state.groups);
  const { persons } = useTypedSelector((state) => state.statistics);
  const { addGroupForDiploma, addPerson } = useActions();

  useEffect(() => {
    addGroupForDiploma(
      "Защита",
      [
        {
          text: "Найдите неизвестное число: x + 123 = 250",
          answer: "127",
          answerOptions: ["123", "125", "127", "128"],
          type: "single",
        },
        {
          text: "Как называется результат умножения?",
          answer: "произведение",
          answerOptions: ["сумма", "разность", "частное", "произведение"],
          type: "single",
        },
        {
          text: "Найдите частное чисел 595 и 35",
          answer: "17",
          answerOptions: [],
          type: "input",
        },
        {
          text: "Найдите значение выражения: сумма произведения 24 и 10 и частного 96 и 24",
          answer: "244",
          answerOptions: [],
          type: "input",
        },
        {
          text: "Как называется действие, обратное сложению?",
          answer: "вычитание",
          answerOptions: ["вычитание", "уменьшение", "умножение", "деление"],
          type: "single",
        },
      ],
      groups
    );
    addGroupForDiploma(
      "5В класс",
      [
        {
          text: "Как называют числа, которые складывают?",
          answer: "слагаемые",
          answerOptions: ["сложенные", "множители", "сумма", "слагаемые"],
          type: "single",
        },
        {
          text: "Вычислите: 353 + 0",
          answer: "353",
          answerOptions: [],
          type: "input",
        },
        {
          text: "Как называется действие, обратное сложению?",
          answer: "вычитание",
          answerOptions: ["вычитание", "сложение", "умножение", "деление"],
          type: "single",
        },
        {
          text: "Вычислите: 953 – 841",
          answer: "112",
          answerOptions: [],
          type: "input",
        },
        {
          text: "Найдите неизвестное число: x + 123 = 250",
          answer: "127",
          answerOptions: ["123", "125", "127", "128"],
          type: "single",
        },
        {
          text: "В трамвае ехало 225 пассажиров. На первой остановке вышло 37 пассажиров и вошло 45 пассажиров, на второй вышло 85 пассажиров и вошло 38 пассажиров. Сколько пассажиров стало в трамвае после второй остановки?",
          answer: "186",
          answerOptions: [],
          type: "input",
        },
        {
          text: "Как называется результат умножения?",
          answer: "произведение",
          answerOptions: ["сумма", "разность", "частное", "произведение"],
          type: "single",
        },
        {
          text: "Найдите произведение чисел 32 и 40",
          answer: "1280",
          answerOptions: [],
          type: "input",
        },
        {
          text: "Как называется действие, обратное умножению?",
          answer: "деление",
          answerOptions: ["вычитание", "сложение", "произведение", "деление"],
          type: "single",
        },
        {
          text: "Найдите частное чисел 595 и 35",
          answer: "17",
          answerOptions: [],
          type: "input",
        },
        {
          text: "Мальчик проходит 80 метров за 1 минуту. Сколько метров он пройдёт за 60 минут? Ответ запишите в метрах",
          answer: "4800",
          answerOptions: [],
          type: "input",
        },
        {
          text: "При скорости 48 км/ч мотоциклист затрачивает на дорогу из города до поселка 2 часа. С какой скоростью должен ехать мотоциклист, чтобы затратить на тот же путь на 1 час больше? В ответ запишите только число",
          answer: "32",
          answerOptions: [],
          type: "input",
        },
        {
          text: "Найдите значение выражения: 385 : 35 + (231 – 165)». ",
          answer: "77",
          answerOptions: [],
          type: "input",
        },
        {
          text: "Найдите значение выражения: сумма произведения 24 и 10 и частного 96 и 24",
          answer: "244",
          answerOptions: ["30", "244", "236", "18"],
          type: "single",
        },
      ],
      groups
    );
    if (
      !persons.filter(
        (e) => e.name === "Захар" && e.surname === "Бодров" && e.userType === "student"
      ).length
    )
    addPerson({
      name: "Захар",
      surname: "Бодров",
      userType: "student",
      personalStatistics: [
        {
          type: "infinity",
          groupName: "5В класс",
          correctlyAnswers: 5,
          wrongAnswers: 9,
          details: [
            { questionIndex: 1, correctAnswer: false },
            { questionIndex: 2, correctAnswer: true },
            { questionIndex: 3, correctAnswer: true },
            { questionIndex: 4, correctAnswer: false },
            { questionIndex: 5, correctAnswer: false },
            { questionIndex: 6, correctAnswer: false },
            { questionIndex: 7, correctAnswer: true },
            { questionIndex: 8, correctAnswer: false },
            { questionIndex: 9, correctAnswer: false },
            { questionIndex: 10, correctAnswer: true },
            { questionIndex: 11, correctAnswer: false },
            { questionIndex: 12, correctAnswer: false },
            { questionIndex: 13, correctAnswer: true },
            { questionIndex: 14, correctAnswer: false },
          ],
          averageScores: "-12.00",
          result: "draw",
        },
      ],
      groups: [],
    });
    if (
      !persons.filter(
        (e) => e.name === "Варвара" && e.surname === "Васильева" && e.userType === "student"
      ).length
    )
    addPerson({
      name: "Варвара",
      surname: "Васильева",
      userType: "student",
      personalStatistics: [
        {
          type: "infinity",
          groupName: "5В класс",
          correctlyAnswers: 7,
          wrongAnswers: 7,
          details: [
            { questionIndex: 1, correctAnswer: true },
            { questionIndex: 2, correctAnswer: true },
            { questionIndex: 3, correctAnswer: false },
            { questionIndex: 4, correctAnswer: true },
            { questionIndex: 5, correctAnswer: false },
            { questionIndex: 6, correctAnswer: false },
            { questionIndex: 7, correctAnswer: true },
            { questionIndex: 8, correctAnswer: false },
            { questionIndex: 9, correctAnswer: true },
            { questionIndex: 10, correctAnswer: false },
            { questionIndex: 11, correctAnswer: false },
            { questionIndex: 12, correctAnswer: true },
            { questionIndex: 13, correctAnswer: true },
            { questionIndex: 14, correctAnswer: false },
          ],
          averageScores: "0",
          result: "draw",
        },
      ],
      groups: [],
    });
    if (
      !persons.filter(
        (e) => e.name === "Полина" && e.surname === "Власенко" && e.userType === "student"
      ).length
    )
    addPerson({
      name: "Полина",
      surname: "Власенко",
      userType: "student",
      personalStatistics: [
        {
          type: "infinity",
          groupName: "5В класс",
          correctlyAnswers: 12,
          wrongAnswers: 2,
          details: [
            { questionIndex: 1, correctAnswer: true },
            { questionIndex: 2, correctAnswer: true },
            { questionIndex: 3, correctAnswer: true },
            { questionIndex: 4, correctAnswer: true },
            { questionIndex: 5, correctAnswer: true },
            { questionIndex: 6, correctAnswer: true },
            { questionIndex: 7, correctAnswer: false },
            { questionIndex: 8, correctAnswer: true },
            { questionIndex: 9, correctAnswer: true },
            { questionIndex: 10, correctAnswer: true },
            { questionIndex: 11, correctAnswer: false },
            { questionIndex: 12, correctAnswer: true },
            { questionIndex: 13, correctAnswer: true },
            { questionIndex: 14, correctAnswer: true },
          ],
          averageScores: "25.75",
          result: "draw",
        },
      ],
      groups: [],
    });
    if (
      !persons.filter(
        (e) => e.name === "Арсений" && e.surname === "Гурьев" && e.userType === "student"
      ).length
    )
    addPerson({
      name: "Арсений",
      surname: "Гурьев",
      userType: "student",
      personalStatistics: [
        {
          type: "infinity",
          groupName: "5В класс",
          correctlyAnswers: 8,
          wrongAnswers: 6,
          details: [
            { questionIndex: 1, correctAnswer: true },
            { questionIndex: 2, correctAnswer: true },
            { questionIndex: 3, correctAnswer: false },
            { questionIndex: 4, correctAnswer: true },
            { questionIndex: 5, correctAnswer: true },
            { questionIndex: 6, correctAnswer: true },
            { questionIndex: 7, correctAnswer: false },
            { questionIndex: 8, correctAnswer: true },
            { questionIndex: 9, correctAnswer: false },
            { questionIndex: 10, correctAnswer: false },
            { questionIndex: 11, correctAnswer: false },
            { questionIndex: 12, correctAnswer: false },
            { questionIndex: 13, correctAnswer: true },
            { questionIndex: 14, correctAnswer: true },
          ],
          averageScores: "14.00",
          result: "draw",
        },
      ],
      groups: [],
    });
    if (
      !persons.filter(
        (e) => e.name === "Ксения" && e.surname === "Истомина" && e.userType === "student"
      ).length
    )
    addPerson({
      name: "Ксения",
      surname: "Истомина",
      userType: "student",
      personalStatistics: [
        {
          type: "infinity",
          groupName: "5В класс",
          correctlyAnswers: 13,
          wrongAnswers: 1,
          details: [
            { questionIndex: 1, correctAnswer: true },
            { questionIndex: 2, correctAnswer: true },
            { questionIndex: 3, correctAnswer: true },
            { questionIndex: 4, correctAnswer: true },
            { questionIndex: 5, correctAnswer: true },
            { questionIndex: 6, correctAnswer: true },
            { questionIndex: 7, correctAnswer: true },
            { questionIndex: 8, correctAnswer: true },
            { questionIndex: 9, correctAnswer: false },
            { questionIndex: 10, correctAnswer: true },
            { questionIndex: 11, correctAnswer: true },
            { questionIndex: 12, correctAnswer: true },
            { questionIndex: 13, correctAnswer: true },
            { questionIndex: 14, correctAnswer: true },
          ],
          averageScores: "33.12",
          result: "draw",
        },
      ],
      groups: [],
    });
    if (
      !persons.filter(
        (e) => e.name === "Ярослав" && e.surname === "Каракчиев" && e.userType === "student"
      ).length
    )
    addPerson({
      name: "Ярослав",
      surname: "Каракчиев",
      userType: "student",
      personalStatistics: [
        {
          type: "infinity",
          groupName: "5В класс",
          correctlyAnswers: 12,
          wrongAnswers: 2,
          details: [
            { questionIndex: 1, correctAnswer: true },
            { questionIndex: 2, correctAnswer: true },
            { questionIndex: 3, correctAnswer: true },
            { questionIndex: 4, correctAnswer: true },
            { questionIndex: 5, correctAnswer: true },
            { questionIndex: 6, correctAnswer: true },
            { questionIndex: 7, correctAnswer: true },
            { questionIndex: 8, correctAnswer: true },
            { questionIndex: 9, correctAnswer: true },
            { questionIndex: 10, correctAnswer: true },
            { questionIndex: 11, correctAnswer: false },
            { questionIndex: 12, correctAnswer: false },
            { questionIndex: 13, correctAnswer: true },
            { questionIndex: 14, correctAnswer: true },
          ],
          averageScores: "28.7",
          result: "draw",
        },
      ],
      groups: [],
    });
    if (
      !persons.filter(
        (e) => e.name === "Ксения" && e.surname === "Кетова" && e.userType === "student"
      ).length
    )
    addPerson({
      name: "Ксения",
      surname: "Кетова",
      userType: "student",
      personalStatistics: [
        {
          type: "infinity",
          groupName: "5В класс",
          correctlyAnswers: 11,
          wrongAnswers: 3,
          details: [
            { questionIndex: 1, correctAnswer: true },
            { questionIndex: 2, correctAnswer: true },
            { questionIndex: 3, correctAnswer: false },
            { questionIndex: 4, correctAnswer: true },
            { questionIndex: 5, correctAnswer: true },
            { questionIndex: 6, correctAnswer: true },
            { questionIndex: 7, correctAnswer: true },
            { questionIndex: 8, correctAnswer: true },
            { questionIndex: 9, correctAnswer: true },
            { questionIndex: 10, correctAnswer: true },
            { questionIndex: 11, correctAnswer: false },
            { questionIndex: 12, correctAnswer: false },
            { questionIndex: 13, correctAnswer: true },
            { questionIndex: 14, correctAnswer: true },
          ],
          averageScores: "23.1",
          result: "draw",
        },
      ],
      groups: [],
    });
    if (
      !persons.filter(
        (e) => e.name === "Ангелина" && e.surname === "Кофель" && e.userType === "student"
      ).length
    )
    addPerson({
      name: "Ангелина",
      surname: "Кофель",
      userType: "student",
      personalStatistics: [
        {
          type: "infinity",
          groupName: "5В класс",
          correctlyAnswers: 12,
          wrongAnswers: 2,
          details: [
            { questionIndex: 1, correctAnswer: true },
            { questionIndex: 2, correctAnswer: true },
            { questionIndex: 3, correctAnswer: true },
            { questionIndex: 4, correctAnswer: true },
            { questionIndex: 5, correctAnswer: true },
            { questionIndex: 6, correctAnswer: true },
            { questionIndex: 7, correctAnswer: false },
            { questionIndex: 8, correctAnswer: true },
            { questionIndex: 9, correctAnswer: true },
            { questionIndex: 10, correctAnswer: true },
            { questionIndex: 11, correctAnswer: true },
            { questionIndex: 12, correctAnswer: false },
            { questionIndex: 13, correctAnswer: true },
            { questionIndex: 14, correctAnswer: true },
          ],
          averageScores: "26.3",
          result: "draw",
        },
      ],
      groups: [],
    });
    if (
      !persons.filter(
        (e) => e.name === "Валентина" && e.surname === "Кофель" && e.userType === "student"
      ).length
    )
    addPerson({
      name: "Валентина",
      surname: "Кофель",
      userType: "student",
      personalStatistics: [
        {
          type: "infinity",
          groupName: "5В класс",
          correctlyAnswers: 9,
          wrongAnswers: 5,
          details: [
            { questionIndex: 1, correctAnswer: false },
            { questionIndex: 2, correctAnswer: true },
            { questionIndex: 3, correctAnswer: false },
            { questionIndex: 4, correctAnswer: true },
            { questionIndex: 5, correctAnswer: true },
            { questionIndex: 6, correctAnswer: true },
            { questionIndex: 7, correctAnswer: false },
            { questionIndex: 8, correctAnswer: true },
            { questionIndex: 9, correctAnswer: true },
            { questionIndex: 10, correctAnswer: false },
            { questionIndex: 11, correctAnswer: true },
            { questionIndex: 12, correctAnswer: true },
            { questionIndex: 13, correctAnswer: true },
            { questionIndex: 14, correctAnswer: false },
          ],
          averageScores: "15.8",
          result: "draw",
        },
      ],
      groups: [],
    });
    if (
      !persons.filter(
        (e) => e.name === "Аврора" && e.surname === "Митина" && e.userType === "student"
      ).length
    )
    addPerson({
      name: "Аврора",
      surname: "Митина",
      userType: "student",
      personalStatistics: [
        {
          type: "infinity",
          groupName: "5В класс",
          correctlyAnswers: 5,
          wrongAnswers: 9,
          details: [
            { questionIndex: 1, correctAnswer: false },
            { questionIndex: 2, correctAnswer: false },
            { questionIndex: 3, correctAnswer: false },
            { questionIndex: 4, correctAnswer: true },
            { questionIndex: 5, correctAnswer: false },
            { questionIndex: 6, correctAnswer: false },
            { questionIndex: 7, correctAnswer: false },
            { questionIndex: 8, correctAnswer: true },
            { questionIndex: 9, correctAnswer: true },
            { questionIndex: 10, correctAnswer: true },
            { questionIndex: 11, correctAnswer: false },
            { questionIndex: 12, correctAnswer: false },
            { questionIndex: 13, correctAnswer: true },
            { questionIndex: 14, correctAnswer: false },
          ],
          averageScores: "3.12",
          result: "draw",
        },
      ],
      groups: [],
    });
    if (
      !persons.filter(
        (e) => e.name === "Никита" && e.surname === "Можегов" && e.userType === "student"
      ).length
    )
    addPerson({
      name: "Никита",
      surname: "Можегов",
      userType: "student",
      personalStatistics: [
        {
          type: "infinity",
          groupName: "5В класс",
          correctlyAnswers: 14,
          wrongAnswers: 0,
          details: [
            { questionIndex: 1, correctAnswer: true },
            { questionIndex: 2, correctAnswer: true },
            { questionIndex: 3, correctAnswer: true },
            { questionIndex: 4, correctAnswer: true },
            { questionIndex: 5, correctAnswer: true },
            { questionIndex: 6, correctAnswer: true },
            { questionIndex: 7, correctAnswer: true },
            { questionIndex: 8, correctAnswer: true },
            { questionIndex: 9, correctAnswer: true },
            { questionIndex: 10, correctAnswer: true },
            { questionIndex: 11, correctAnswer: true },
            { questionIndex: 12, correctAnswer: true },
            { questionIndex: 13, correctAnswer: true },
            { questionIndex: 14, correctAnswer: true },
          ],
          averageScores: "46.54",
          result: "draw",
        },
      ],
      groups: [],
    });
    if (
      !persons.filter(
        (e) => e.name === "Тимур" && e.surname === "Осипов" && e.userType === "student"
      ).length
    )
    addPerson({
      name: "Тимур",
      surname: "Осипов",
      userType: "student",
      personalStatistics: [
        {
          type: "infinity",
          groupName: "5В класс",
          correctlyAnswers: 10,
          wrongAnswers: 4,
          details: [
            { questionIndex: 1, correctAnswer: true },
            { questionIndex: 2, correctAnswer: false },
            { questionIndex: 3, correctAnswer: true },
            { questionIndex: 4, correctAnswer: true },
            { questionIndex: 5, correctAnswer: true },
            { questionIndex: 6, correctAnswer: false },
            { questionIndex: 7, correctAnswer: false },
            { questionIndex: 8, correctAnswer: true },
            { questionIndex: 9, correctAnswer: true },
            { questionIndex: 10, correctAnswer: true },
            { questionIndex: 11, correctAnswer: true },
            { questionIndex: 12, correctAnswer: false },
            { questionIndex: 13, correctAnswer: true },
            { questionIndex: 14, correctAnswer: true },
          ],
          averageScores: "25.98",
          result: "draw",
        },
      ],
      groups: [],
    });
    if (
      !persons.filter(
        (e) => e.name === "Дина" && e.surname === "Осипова" && e.userType === "student"
      ).length
    )
    addPerson({
      name: "Дина",
      surname: "Осипова",
      userType: "student",
      personalStatistics: [
        {
          type: "infinity",
          groupName: "5В класс",
          correctlyAnswers: 7,
          wrongAnswers: 7,
          details: [
            { questionIndex: 1, correctAnswer: false },
            { questionIndex: 2, correctAnswer: false },
            { questionIndex: 3, correctAnswer: true },
            { questionIndex: 4, correctAnswer: false },
            { questionIndex: 5, correctAnswer: true },
            { questionIndex: 6, correctAnswer: true },
            { questionIndex: 7, correctAnswer: false },
            { questionIndex: 8, correctAnswer: false },
            { questionIndex: 9, correctAnswer: true },
            { questionIndex: 10, correctAnswer: true },
            { questionIndex: 11, correctAnswer: true },
            { questionIndex: 12, correctAnswer: true },
            { questionIndex: 13, correctAnswer: false },
            { questionIndex: 14, correctAnswer: false },
          ],
          averageScores: "7.66",
          result: "draw",
        },
      ],
      groups: [],
    });
    if (
      !persons.filter(
        (e) => e.name === "Вячеслав" && e.surname === "Полянский" && e.userType === "student"
      ).length
    )
    addPerson({
      name: "Вячеслав",
      surname: "Полянский",
      userType: "student",
      personalStatistics: [
        {
          type: "infinity",
          groupName: "5В класс",
          correctlyAnswers: 2,
          wrongAnswers: 12,
          details: [
            { questionIndex: 1, correctAnswer: false },
            { questionIndex: 2, correctAnswer: true },
            { questionIndex: 3, correctAnswer: false },
            { questionIndex: 4, correctAnswer: false },
            { questionIndex: 5, correctAnswer: false },
            { questionIndex: 6, correctAnswer: false },
            { questionIndex: 7, correctAnswer: false },
            { questionIndex: 8, correctAnswer: false },
            { questionIndex: 9, correctAnswer: false },
            { questionIndex: 10, correctAnswer: false },
            { questionIndex: 11, correctAnswer: false },
            { questionIndex: 12, correctAnswer: false },
            { questionIndex: 13, correctAnswer: false },
            { questionIndex: 14, correctAnswer: true },
          ],
          averageScores: "-33",
          result: "draw",
        },
      ],
      groups: [],
    });
    if (
      !persons.filter(
        (e) => e.name === "Дмитрий" && e.surname === "Попов" && e.userType === "student"
      ).length
    )
    addPerson({
      name: "Дмитрий",
      surname: "Попов",
      userType: "student",
      personalStatistics: [
        {
          type: "infinity",
          groupName: "5В класс",
          correctlyAnswers: 2,
          wrongAnswers: 12,
          details: [
            { questionIndex: 1, correctAnswer: false },
            { questionIndex: 2, correctAnswer: true },
            { questionIndex: 3, correctAnswer: false },
            { questionIndex: 4, correctAnswer: false },
            { questionIndex: 5, correctAnswer: false },
            { questionIndex: 6, correctAnswer: false },
            { questionIndex: 7, correctAnswer: true },
            { questionIndex: 8, correctAnswer: false },
            { questionIndex: 9, correctAnswer: false },
            { questionIndex: 10, correctAnswer: false },
            { questionIndex: 11, correctAnswer: false },
            { questionIndex: 12, correctAnswer: false },
            { questionIndex: 13, correctAnswer: false },
            { questionIndex: 14, correctAnswer: false },
          ],
          averageScores: "-33",
          result: "draw",
        },
      ],
      groups: [],
    });
    if (
      !persons.filter(
        (e) => e.name === "Вадим" && e.surname === "Сергеев" && e.userType === "student"
      ).length
    )
    addPerson({
      name: "Вадим",
      surname: "Сергеев",
      userType: "student",
      personalStatistics: [
        {
          type: "infinity",
          groupName: "5В класс",
          correctlyAnswers: 3,
          wrongAnswers: 11,
          details: [
            { questionIndex: 1, correctAnswer: false },
            { questionIndex: 2, correctAnswer: true },
            { questionIndex: 3, correctAnswer: false },
            { questionIndex: 4, correctAnswer: true },
            { questionIndex: 5, correctAnswer: true },
            { questionIndex: 6, correctAnswer: false },
            { questionIndex: 7, correctAnswer: false },
            { questionIndex: 8, correctAnswer: false },
            { questionIndex: 9, correctAnswer: false },
            { questionIndex: 10, correctAnswer: false },
            { questionIndex: 11, correctAnswer: false },
            { questionIndex: 12, correctAnswer: false },
            { questionIndex: 13, correctAnswer: false },
            { questionIndex: 14, correctAnswer: false },
          ],
          averageScores: "-28",
          result: "draw",
        },
      ],
      groups: [],
    });
    if (
      !persons.filter(
        (e) => e.name === "Вадим" && e.surname === "Харин" && e.userType === "student"
      ).length
    )
    addPerson({
      name: "Вадим",
      surname: "Харин",
      userType: "student",
      personalStatistics: [
        {
          type: "infinity",
          groupName: "5В класс",
          correctlyAnswers: 6,
          wrongAnswers: 8,
          details: [
            { questionIndex: 1, correctAnswer: false },
            { questionIndex: 2, correctAnswer: true },
            { questionIndex: 3, correctAnswer: false },
            { questionIndex: 4, correctAnswer: true },
            { questionIndex: 5, correctAnswer: true },
            { questionIndex: 6, correctAnswer: false },
            { questionIndex: 7, correctAnswer: false },
            { questionIndex: 8, correctAnswer: true },
            { questionIndex: 9, correctAnswer: false },
            { questionIndex: 10, correctAnswer: false },
            { questionIndex: 11, correctAnswer: true },
            { questionIndex: 12, correctAnswer: true },
            { questionIndex: 13, correctAnswer: false },
            { questionIndex: 14, correctAnswer: false },
          ],
          averageScores: "1.2",
          result: "draw",
        },
      ],
      groups: [],
    });
    if (
      !persons.filter(
        (e) => e.name === "Андрей" && e.surname === "Шрамм" && e.userType === "student"
      ).length
    )
    addPerson({
      name: "Андрей",
      surname: "Шрамм",
      userType: "student",
      personalStatistics: [
        {
          type: "infinity",
          groupName: "5В класс",
          correctlyAnswers: 0,
          wrongAnswers: 12,
          details: [
            { questionIndex: 1, correctAnswer: false },
            { questionIndex: 2, correctAnswer: false },
            { questionIndex: 3, correctAnswer: false },
            { questionIndex: 4, correctAnswer: false },
            { questionIndex: 5, correctAnswer: false },
            { questionIndex: 6, correctAnswer: false },
            { questionIndex: 7, correctAnswer: false },
            { questionIndex: 8, correctAnswer: false },
            { questionIndex: 9, correctAnswer: false },
            { questionIndex: 10, correctAnswer: false },
            { questionIndex: 11, correctAnswer: false },
            { questionIndex: 12, correctAnswer: false },
            { questionIndex: 13, correctAnswer: false },
            { questionIndex: 14, correctAnswer: false },
          ],
          averageScores: "-44.3",
          result: "draw",
        },
      ],
      groups: [],
    });
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
