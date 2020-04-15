import {COLORS} from "../const.js";

const DescriptionItems = [
  `Изучить теорию`,
  `Сделать домашку`,
  `Пройти интенсив на соточку`,
];

const DefaultRepeatingDays = {
  "MO": false,
  "TU": false,
  "WE": false,
  "TH": false,
  "FR": false,
  "SA": false,
  "SU": false,
};

const getRandomBool = () => {
  return Math.random() > 0.5;
}

const getRandomArrayItem = (array) => {
  const randomIndex = getRandomInteger(0, array.length);

  return array[randomIndex];
};

const getRandomInteger = (min, max) => {
  return min + Math.floor(Math.random() * (max - min));
};

const getRandomDate = () => {
  const targetDate = new Date();
  const sign = getRandomBool() ? 1 : -1;
  const diffValue = sign * getRandomInteger(0, 8);

  targetDate.setDate(targetDate.getDate() + diffValue);

  return targetDate;
};

const generateRepeatingDays = () => {
  return Object.assign({}, DefaultRepeatingDays, {
    "MO": getRandomBool(),
    "TU": getRandomBool(),
    "WE": getRandomBool(),
    "TH": getRandomBool(),
    "FR": getRandomBool(),
    "SA": getRandomBool(),
    "SU": getRandomBool(),
  });
}

const generateTask = () => {
  const dueDate = getRandomBool() ? null : getRandomDate();

  return {
    description: getRandomArrayItem(DescriptionItems),
    dueDate,
    repeatingDays: dueDate ? DefaultRepeatingDays : generateRepeatingDays(),
    color: getRandomArrayItem(COLORS),
    isArchive: getRandomBool(),
    isFavorite: getRandomBool(),
  };
};

const generateTasks = (count) => {
  return new Array(count)
    .fill(``)
    .map(generateTask);
};

export {generateTask, generateTasks};
