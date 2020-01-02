import {createMenuTemplate} from './components/menu';
import {createFilterTemplate} from './components/filter';
import {createBoardTemplate} from './components/board';
import {createTaskEditingFormTemplate} from './components/task-editing-form';
import {createTaskTemplate} from './components/task';
import {createLoadMoreButtonTemplate} from './components/load-more-button';

import {generateTasks} from './mocks/task.js';
import {generateFilters} from './mocks/filter';

const TASKS_COUNT = 20;

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
tasks.slice(1).forEach((task) => render(tasksListElement, createTaskTemplate(task)));

const boardElement = document.querySelector(`.board`);
render(boardElement, createLoadMoreButtonTemplate());
