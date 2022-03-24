import React from 'react'

const CategoryButton = ({ category, handleClick, type }) => {
  return (
    <div className={`badge w-24 py-3 ${category === type ? 'badge-accent' : 'badge-secondary'}`} onClick={handleClick}>
      {category}
    </div>
  )
}

export default CategoryButton
