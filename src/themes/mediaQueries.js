export const breakpoints = {
  sm: 576,
  md: 768,
  lg: 992,
  ml: 1024,
  xl: 1200,
}

export const mediaQueries = key => {
  return style => `@media (min-width: ${breakpoints[key]}px) { ${style} }`
}
