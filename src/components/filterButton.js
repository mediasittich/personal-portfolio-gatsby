import React from "react"

const FilterButton = ({ name, isPressed, setFilter, currentFilter }) => {
  return (
    <button
      className={currentFilter === name ? "active" : ""}
      type="button"
      aria-pressed={isPressed}
      onClick={() => setFilter(name)}
    >
      <span>{name}</span>
    </button>
  )
}

export default FilterButton
