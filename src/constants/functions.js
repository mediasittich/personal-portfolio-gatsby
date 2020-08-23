export const createFilterMap = (categories, projects) => {
  const categoriesList = categories.map(category => category.name)
  let filterMap = {
    all: () => true,
  }

  projects.forEach(project => {
    categoriesList.forEach(
      filter =>
        (filterMap[filter] = function (project) {
          return project.category.name === filter
        })
    )
  })

  return filterMap
}
