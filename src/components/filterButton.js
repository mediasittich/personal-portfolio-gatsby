import React from "react"

const FilterButton = ({ name, isPressed, setFilter }) => {
  return (
    <button
      type="button"
      aria-pressed={isPressed}
      onClick={() => setFilter(name)}
    >
      <span>{name}</span>
    </button>
  )
}

export default FilterButton
