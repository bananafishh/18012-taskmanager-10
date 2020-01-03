import {createMenuTemplate} from './components/menu';
import {createFilterTemplate} from './components/filter';
import {createBoardTemplate} from './components/board';
import {createTaskEditingFormTemplate} from './components/task-editing-form';
import {createTaskTemplate} from './components/task';
import {createLoadMoreButtonTemplate} from './components/load-more-button';

import {generateTasks} from './mocks/task.js';
import {generateFilters} from './mocks/filter';

const TASKS_COUNT = 20;
const INITIAL_TASKS_COUNT = 8;
const TASKS_COUNT_PER_LOAD = 8;

const tasks = generateTasks(TASKS_COUNT);
const filters = generateFilters(TASKS_COUNT);

const render = (container, template, place = `beforeend`) => {
  container.insertAdjacentHTML(place, template);
};

const headerElement = document.querySelector(`.main__control`);
render(headerElement, createMenuTemplate());

const mainElement = document.querySelector(`.main`);
render(mainElement, createFilterTemplate(filters));
render(mainElement, createBoardTemplate());

const tasksListElement = document.querySelector(`.board__tasks`);
render(tasksListElement, createTaskEditingFormTemplate(tasks[0]));
let showedTasksCount = INITIAL_TASKS_COUNT;
tasks.slice(1, showedTasksCount).forEach((task) => render(tasksListElement, createTaskTemplate(task)));

const boardElement = document.querySelector(`.board`);
render(boardElement, createLoadMoreButtonTemplate());

const loadMoreButton = boardElement.querySelector(`.load-more`);
loadMoreButton.addEventListener(`click`, (event) => {
  const prevShowedTasksCount = showedTasksCount;
  showedTasksCount = showedTasksCount + TASKS_COUNT_PER_LOAD;

  tasks.slice(prevShowedTasksCount, showedTasksCount)
    .forEach((task) => render(tasksListElement, createTaskTemplate(task)));

  if (showedTasksCount >= TASKS_COUNT) {
    event.target.remove();
  }
});
