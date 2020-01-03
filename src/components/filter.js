const createFilterItemsTemplate = (filters) => filters
  .map((filter, filterIndex) => {
    const {title, count} = filter;

    return (
      `<input
        type="radio"
        id="filter__all"
        class="filter__input visually-hidden"
        name="filter"
        ${filterIndex === 0 ? `checked` : ``}
      />
      <label for="filter__all" class="filter__label">
        ${title} <span class="filter__all-count">${count}</span>
      </label>`
    );
  })
  .join(`\n`);

export const createFilterTemplate = (filters) => {
  return (
    `<section class="main__filter filter container">
      ${createFilterItemsTemplate(filters)}
    </section>`
  );
};
