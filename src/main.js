import {createMenuTemplate} from './components/menu';
import {createFilterTemplate} from './components/filter';
import {createBoardTemplate} from './components/board';
import {createTaskEditionFormTemplate} from './components/task-edition-form';
import {createTaskTemplate} from './components/task';
import {createLoadMoreButtonTemplate} from './components/load-more-button';

const TASKS_COUNT = 3;

const render = (container, template, place = `beforeend`) => {
  container.insertAdjacentHTML(place, template);
};

const headerElement = document.querySelector(`.main__control`);
render(headerElement, createMenuTemplate());

const mainElement = document.querySelector(`.main`);
render(mainElement, createFilterTemplate());
render(mainElement, createBoardTemplate());

const tasksListElement = document.querySelector(`.board__tasks`);
render(tasksListElement, createTaskEditionFormTemplate());

new Array(TASKS_COUNT)
  .fill(``)
  .forEach(() => render(tasksListElement, createTaskTemplate()));

const boardElement = document.querySelector(`.board`);
render(boardElement, createLoadMoreButtonTemplate());
