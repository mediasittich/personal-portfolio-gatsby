import React from "react"
import styled from "styled-components"

const FilterButton = ({ name, isPressed, setFilter, currentFilter }) => {
  return (
    <StyledButton
      className={currentFilter === name ? "active" : ""}
      type="button"
      aria-pressed={isPressed}
      onClick={() => setFilter(name)}
    >
      <span>{name}</span>
    </StyledButton>
  )
}

const StyledButton = styled.button`
  background: transparent;
  border: none;
  font-size: 16px;
  font-weight: 300;
  padding: 0.5rem 1rem;
  margin-bottom: 0.25rem;
  border-radius: 2rem;
  min-width: 50px;
  line-height: normal;
  cursor: pointer;
  transition: all 0.1s;

  &:hover,
  &:active,
  &.active {
    background-color: ${props => props.theme.colors.secondary};
    color: white;
  }
`

export default FilterButton
