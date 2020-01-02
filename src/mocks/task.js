import {COLORS} from '../constants';

const TASK_DESCRIPTIONS = [`Изучить теорию`, `Сделать домашку`, `Пройти интенсив на соточку`];
const TAGS = [`homework`, `theory`, `practice`, `intensive`, `keks`];

const DefaultTaskRepeatSchedule = {
  mo: false,
  tu: false,
  we: false,
  th: false,
  fr: false,
  sa: false,
  su: false
};

const getRandomInteger = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const getRandomArrayItem = (array) => array[getRandomInteger(0, array.length - 1)];

const getRandomDate = () => {
  const randomDate = new Date();
  const sign = Math.random() > 0.5 ? 1 : -1;
  const daysCount = sign * getRandomInteger(0, 7);

  randomDate.setDate(randomDate.getDate() + daysCount);

  return randomDate;
};

const generateTaskRepeatingSchedule = () => Object.assign({}, DefaultTaskRepeatSchedule, {
  mo: Math.random() > 0.5,
  fr: Math.random() > 0.5,
});

const generateTags = (tags) => tags
  .filter(() => Math.random() > 0.5)
  .slice(0, 3);

const generateTask = () => {
  const dueDate = Math.random() > 0.5 ? getRandomDate() : null;

  return {
    description: getRandomArrayItem(TASK_DESCRIPTIONS),
    dueDate,
    repeatingDays: dueDate ? DefaultTaskRepeatSchedule : generateTaskRepeatingSchedule(),
    tags: new Set(generateTags(TAGS)),
    color: getRandomArrayItem(COLORS),
    isFavorite: Math.random() > 0.5,
    isArchive: Math.random() > 0.5
  };
};

const generateTasks = (count) => (
  new Array(count)
    .fill(``)
    .map(generateTask)
);

export {generateTasks};
