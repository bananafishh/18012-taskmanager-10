import {MONTHS} from '../constants';
import {formatTime} from '../utils';

const createTagsTemplate = (tags) => Array.from(tags)
  .map((tag) => (
    `<span class="card__hashtag-inner">
      <span class="card__hashtag-name">
        #${tag}
      </span>
    </span>`
  ))
  .join(`\n`);

export const createTaskTemplate = (task) => {
  const {description, dueDate, repeatingDays, tags, color} = task;

  const isTaskDeadlineSet = !!dueDate;
  const date = isTaskDeadlineSet ? `${dueDate.getDate()} ${MONTHS[dueDate.getMonth()]}` : ``;
  const time = isTaskDeadlineSet ? `${formatTime(dueDate)}` : ``;

  const tagsTemplate = createTagsTemplate(tags);

  const isTaskRepeated = Object.values(repeatingDays).some(Boolean);
  const repeatClass = isTaskRepeated ? `card--repeat` : ``;

  const isTaskExpired = dueDate instanceof Date && dueDate < Date.now();
  const deadlineClass = isTaskExpired ? `card--deadline` : ``;

  return (
    `<article class="card card--${color} ${repeatClass} ${deadlineClass}">
      <div class="card__form">
        <div class="card__inner">
          <div class="card__control">
            <button type="button" class="card__btn card__btn--edit">
              edit
            </button>
            <button type="button" class="card__btn card__btn--archive">
              archive
            </button>
            <button
              type="button"
              class="card__btn card__btn--favorites card__btn--disabled"
            >
              favorites
            </button>
          </div>
    
          <div class="card__color-bar">
            <svg class="card__color-bar-wave" width="100%" height="10">
              <use xlink:href="#wave"></use>
            </svg>
          </div>
    
          <div class="card__textarea-wrap">
            <p class="card__text">${description}</p>
          </div>
    
          <div class="card__settings">
            <div class="card__details">
              <div class="card__dates">
                <div class="card__date-deadline">
                  <p class="card__input-deadline-wrap">
                    <span class="card__date">${date}</span>
                    <span class="card__time">${time}</span>
                  </p>
                </div>
              </div>
    
              <div class="card__hashtag">
                <div class="card__hashtag-list">
                    ${tagsTemplate}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>`
  );
};
