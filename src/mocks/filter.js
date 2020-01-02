import {FILTER_TITLES} from '../constants';

export const generateFilters = (tasksCount) => FILTER_TITLES
  .map((title) => ({
    title,
    count: Math.floor(Math.random() * tasksCount)
  }));
