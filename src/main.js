import {createSiteMenuTemplate} from './view/site-menu';
import {createSiteFilterTemplate} from './view/filter';
import {createTaskTemplate} from './view/task';
import {createTaskEditTemplate} from './view/task-edit';
import {buttonLoadMore} from './view/load-more-button';
import {createBoardTemplate} from './view/board';

const Task_Count = 3;

// container - куда будем рендерить данный шаблон
// template - сам шаблон
// place - место, в которое будем вставлять шаблон (в insertAdjacentHtml это before, after и тп)

const render = (container, template, place = `beforeend`) => {
  container.insertAdjacentHTML(place, template);
};

const siteMainElement = document.querySelector(`.main`);
const siteHeaderElement = siteMainElement.querySelector(`.main__control`);

render(siteHeaderElement, createSiteMenuTemplate());
render(siteMainElement, createSiteFilterTemplate());
render(siteMainElement, createBoardTemplate());

const siteTaskElement = siteMainElement.querySelector(`.board__tasks`);
const boardElement = siteMainElement.querySelector(`.board`);

render(siteTaskElement, createTaskEditTemplate());

for (let i = 0; i <= Task_Count; i++) {
  render(siteTaskElement, createTaskTemplate());
}


render(boardElement, buttonLoadMore());

