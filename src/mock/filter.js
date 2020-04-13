const FilterNames = [
  `all`, `overdue`, `today`, `favorites`, `repeating`, `archive`
];

const generateFilters = () => {
  return FilterNames.map((filter) => {
    return {
      name: filter,
      count: Math.floor(Math.random() * 10),
    };
  });
};

export {generateFilters};
