import React from 'react'

const CategoryButton = ({ category, handleClick, type }) => {
  return (
    <div className={`badge mx-2 my-4 p-3 font-bold ${category === type ? 'badge-accent' : 'null'}`} onClick={handleClick}>
      {category}
    </div>
  )
}

export default CategoryButton
