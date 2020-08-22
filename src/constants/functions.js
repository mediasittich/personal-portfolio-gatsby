export const createFilterMap = data => {
  let tagsList = []
  let filterMap = {
    all: () => true,
  }

  data.forEach(project => {
    tagsList.push(...project.tags)
  })
  tagsList = [...new Set(tagsList)]

  data.forEach(project => {
    tagsList.forEach(item => {
      filterMap[item] = project => project.tags.includes(item)
    })
  })

  return filterMap
}
